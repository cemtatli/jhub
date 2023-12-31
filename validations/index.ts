import * as yup from 'yup'

export const userRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .required('Name field is required.'),
  surname: yup
    .string()
    .min(2, 'Surname must be at least 2 characters.')
    .required('Surname field is required.'),
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Email field is required.'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    )
    .required('Password field is required.'),
  privacy: yup
    .boolean()
    .oneOf([true], 'Please check the box to proceed.')
    .required('The box is required.'),
})
export const employerRegisterSchema = yup.object().shape({
  company_name: yup
    .string()
    .min(2, 'Company Name must be at least 2 characters.')
    .required('Company name field is required.'),
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Email field is required.'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    )
    .required('Password field is required.'),
  privacy: yup
    .boolean()
    .oneOf([true], 'Please check the box to proceed.')
    .required('The box is required.'),
})
export const resumePersonalSchema = yup.object().shape({
  school: yup.string().required('School is required'),
  degree: yup.string().required('Degree is required'),
  city: yup.string().required('City is required'),
  explanations: yup.string(),
  started: yup.date(),
  ended: yup.date(),
})
export const resumeEducationSchema = yup.object().shape({
  school: yup.string().required('School is required'),
  degree: yup.string().required('Degree is required'),
  city: yup.string().required('City is required'),
  explanations: yup.string(),
  started: yup.date(),
  ended: yup.date(),
})
