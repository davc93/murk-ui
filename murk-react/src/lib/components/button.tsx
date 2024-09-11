import { ButtonHTMLAttributes } from "react"



type NativeProps = ButtonHTMLAttributes<HTMLButtonElement>
type CustomProps = {
    variant: 'outlined' | 'filled'
}

export const Button = (props:NativeProps & CustomProps) => {
  return (
    <button {...props}/>
  )
}
