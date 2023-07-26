import * as yup from 'yup'

export const userRegisterSchema = yup.object().shape({
  name: yup.string().min(2, 'En az 2 karakter olmalıdır.').required('Ad alanı zorunludur.'),
  surname: yup.string().min(2, 'En az 2 karakter olmalıdır.').required('Soyad alanı zorunludur.'),
  email: yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta alanı zorunludur.'),
  password: yup
    .string()
    .min(8, 'En az 8 karakter olmalıdır.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Özel karakter içermeli, büyük ve küçük harf ve rakam içermelidir.',
    )
    .required('Şifre alanı zorunludur.'),
  privacy: yup.boolean().oneOf([true], 'Lütfen onay kutusunu işaretleyin.').required('Onay kutusu zorunludur.'),
})

export const employerRegisterSchema = yup.object().shape({
  company_name: yup.string().min(2).required(),
  email: yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta alanı zorunludur.'),
  password: yup
    .string()
    .min(8, 'En az 8 karakter olmalıdır.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Özel karakter içermeli, büyük ve küçük harf ve rakam içermelidir.',
    )
    .required('Şifre alanı zorunludur.'),
  privacy: yup.boolean().oneOf([true], 'Lütfen onay kutusunu işaretleyin.').required('Onay kutusu zorunludur.'),
})
