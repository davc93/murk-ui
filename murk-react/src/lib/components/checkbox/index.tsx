import { InputHTMLAttributes } from "react"

type NativeProps = InputHTMLAttributes<HTMLInputElement>
export const Checkbox = ({type,children,...props}:NativeProps) => {
  return (
    <div className="checkbox">
        <label className="checkbox__label">{children}</label>
        <input className="checkbox__square" type="checkbox" {...props}/>
    </div>
  )
}
