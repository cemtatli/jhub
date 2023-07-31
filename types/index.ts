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
  text: string
  size?: number
  variant: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: any
  props?: any
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
  count: string
}
export type InputFileProps = {
  label: string
  className?: string
  onFileChange: any
}
