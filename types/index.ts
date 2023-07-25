import { ChangeEventHandler, MouseEventHandler } from 'react'

export type InputWithLabelProps = {
  label: string
  id: string
  name: string
  type: string
  value?: string
  className: any
  onChange?: ChangeEventHandler<HTMLInputElement>
}
export type ButtonWithIconProps = {
  label?: string
  size?: number
  placeholder?: string
  variant?: string
  className?: string
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}
export type InputWithButtonProps = {
  className?: string
  type?: string
  label?: string
}
export type CheckboxWithTextProps = {
  id?: string
  label?: string
  text?: string
  name: string
}
export type NavigationMenuItemProps = {
  title: string
  href: string
  description: string
}
export type JobsItemProps = {
  title: string
  href?: string
  slug?: string
}
export type InputFileProps = {
  label: string
  className?: string
}
