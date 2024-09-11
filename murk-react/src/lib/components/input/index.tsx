import { IconError } from '../../icons/icon-error'
import { forwardRef, InputHTMLAttributes } from 'react'

export interface CustomInputProps {
  label: string
  error?: string
}

type NativeProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<
  HTMLInputElement,
  NativeProps & CustomInputProps
>(({ label, error, ...props }, ref) => {
  return (
    <label className="input-container">
      <span className="input__label">{label}</span>
      <input {...props} className="input" ref={ref} />
      {error && (
        <div className="error-message">
          <div className="error-message__icon-container">
            <IconError />
          </div>
          <span className="error-message__text">{error}</span>
        </div>
      )}
    </label>
  )
})
