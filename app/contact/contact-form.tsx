"use client"

import type React from "react"

import { useState } from "react"
import FormInput from "./form-input"
import FormTextarea from "./form-textarea"
import { Button } from "~/components/ui/button"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
  isLoading?: boolean
}

export default function ContactForm({ onSubmit, isLoading = false }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit?.(formData)
    }
  }

  const handleInputChange =
    (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }))

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }))
      }
    }
    
  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl max-w-2xl mx-auto bg-[#23101A] p-8 shadow-2xl">
      <FormInput
        label="Name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange("name")}
        error={errors.name}
        disabled={isLoading}
      />

      <FormInput
        label="Email address"
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleInputChange("email")}
        error={errors.email}
        disabled={isLoading}
      />

      <FormInput
        label="Subject"
        placeholder="Inquiry about..."
        value={formData.subject}
        onChange={handleInputChange("subject")}
        error={errors.subject}
        disabled={isLoading}
      />

      <FormTextarea
        label="Message"
        placeholder="Your message here..."
        value={formData.message}
        onChange={handleInputChange("message")}
        error={errors.message}
        disabled={isLoading}
        rows={6}
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
