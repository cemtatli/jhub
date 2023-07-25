import * as yup from 'yup'

export const userRegisterSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  surname: yup.string().min(2).required(),
  email: yup.string().required('email address is required'),
  password: yup.string().min(8).required('password is required'),
  confirm: yup.boolean().oneOf([true], 'Please tick checkbox'),
})
export const employerRegisterSchema = yup.object().shape({
  company_name: yup.string().min(2).required(),
  email: yup.string().required('email address is required'),
  password: yup.string().min(8).required('password is required'),
  confirm: yup.boolean().oneOf([true], 'Please tick checkbox'),
})
