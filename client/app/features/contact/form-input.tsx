"use client";

import type React from "react";

import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-white text-sm font-medium">{label}</label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-[#2C1220] border border-[#3A1A2C] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${className}`}
          {...props}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
