"use client"

import type React from "react"

import { forwardRef } from "react"

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-white text-sm font-medium">{label}</label>
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-[#2C1220] border border-[#3A1A2C] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-vertical min-h-[120px] ${className}`}
          {...props}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    )
  },
)

FormTextarea.displayName = "FormTextarea"

export default FormTextarea
