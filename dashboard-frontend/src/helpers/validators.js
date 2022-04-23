import * as yup from "yup"

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('This is a required field'),
  password: yup
    .string()
    .required('This is a required field')
    .min(8, 'Password must be minimum of 8 characters long'),
})

export const editVoilationValidationSchema = yup.object({
  price: yup.number().positive()
})


export const addVoilationValidationSchema = yup.object({
  price: yup.number().positive(),
  code: yup.string().required(),
  v_type: yup.string().required(),
  voilation: yup.string().required()
})