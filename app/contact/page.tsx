'use client'

import { useState, ChangeEvent, FormEvent, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Footer } from '../components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  email?: string;
  name?: string;
  message?: string;
}

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link?: string;
}

const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },
  name: (name: string): boolean => name.trim().length > 0,
  message: (message: string): boolean => message.trim().length > 0
};

function ContactCard({ info }: { info: ContactInfo }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#E5DFD3] p-6 rounded-lg text-center"
    >
      <div className="flex justify-center mb-4 text-[#3C3A36]">
        {info.icon}
      </div>
      <h3 className="text-sm font-medium tracking-[0.2em] mb-2">{info.title}</h3>
      {info.link ? (
        <a 
          href={info.link}
          className="text-[#3C3A36]/80 hover:text-[#3C3A36] transition-colors duration-300"
          target={info.link.startsWith('http') ? '_blank' : undefined}
          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {info.content}
        </a>
      ) : (
        <p className="text-[#3C3A36]/80">{info.content}</p>
      )}
    </motion.div>
  );
}

function FormInput({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium tracking-[0.2em] text-[#3C3A36]">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-[#F5F0E6] border-2 ${
          error ? 'border-red-500' : 'border-[#3C3A36]/10'
        } rounded-lg focus:border-[#3C3A36]/30 outline-none transition-colors duration-300 placeholder-[#3C3A36]/40`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const [submitStatus, setSubmitStatus] = useState<{
    show: boolean;
    isSuccess: boolean;
    message: string;
  }>({
    show: false,
    isSuccess: false,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "EMAIL",
      content: "info@febelladesign.com",
      link: "mailto:info@febelladesign.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "PHONE",
      content: "(555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "LOCATION",
      content: "123 Fashion Avenue, NY",
      link: "https://maps.google.com/?q=123+Fashion+Avenue+New+York"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "HOURS",
      content: "Mon-Fri: 9AM-6PM EST"
    }
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    if (name === 'email' || name === 'name' || name === 'message') {
      setFormErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const saveToFile = useCallback((data: FormData) => {
    const text = `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
Date: ${new Date().toLocaleString()}
    `.trim();

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact_form_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const errors: FormErrors = {}
    
    if (!formData.email.trim()) {
      errors.email = 'Email cannot be empty'
    } else if (!validators.email(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!validators.name(formData.name)) {
      errors.name = 'Name cannot be empty'
    }
    
    if (!validators.message(formData.message)) {
      errors.message = 'Message cannot be empty'
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true);

    try {
      await saveToFile(formData);
      
      setSubmitStatus({
        show: true,
        isSuccess: true,
        message: 'Message sent successfully!'
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (err) {
      console.error('Error saving message:', err);
      setSubmitStatus({
        show: true,
        isSuccess: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === 'email') {
      if (!value.trim()) {
        setFormErrors(prev => ({ ...prev, email: 'Email cannot be empty' }))
      } else if (!validators.email(value)) {
        setFormErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
      }
    } else if (name === 'name' && !validators.name(value)) {
      setFormErrors(prev => ({ ...prev, name: 'Name cannot be empty' }))
    } else if (name === 'message' && !validators.message(value)) {
      setFormErrors(prev => ({ ...prev, message: 'Message cannot be empty' }))
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#3C3A36]">
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-semibold tracking-[0.2em] mb-4">CONTACT US</h1>
              <p className="text-lg text-[#3C3A36]/80 max-w-2xl mx-auto">
                Begin your style journey with a personal consultation. We&apos;ll be in touch within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-[#E5DFD3] p-10 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="NAME"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={formErrors.name}
                  placeholder="Enter your full name"
                />
                <FormInput
                  label="EMAIL"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={formErrors.email}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium tracking-[0.2em] text-[#3C3A36]">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={6}
                  placeholder="Tell us about your styling needs or any questions you have..."
                  className={`w-full px-4 py-3 bg-[#F5F0E6] border-2 ${
                    formErrors.message ? 'border-red-500' : 'border-[#3C3A36]/10'
                  } rounded-lg focus:border-[#3C3A36]/30 outline-none transition-colors duration-300 resize-none placeholder-[#3C3A36]/40`}
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {formErrors.message}
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? 'bg-[#3C3A36]/70' : 'bg-[#3C3A36]'
                } text-[#F5F0E6] px-8 py-4 rounded-lg text-lg font-medium tracking-[0.2em] hover:bg-[#3C3A36]/90 transition-colors duration-300 shadow-md disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </motion.button>

              <AnimatePresence>
                {submitStatus.show && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-center p-4 rounded-lg ${
                      submitStatus.isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}