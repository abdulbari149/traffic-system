import React, { useEffect } from 'react'
import { CREATE_PASSWORD_SCREEN, VERIFICATION_SCREEN } from 'src/routes'
import Password from '../components/Password'
import * as yup from 'yup'
import { useForgetPasswordMutation } from 'src/api'
import { Alert } from 'react-native'
import { forgetPasswordFormData } from '../constants'
import { errorAlert } from "src/utils/error-alert"
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email formmat')
    .required('This is a required field'),
})

const ForgotPassword = ({ navigation, route }) => {
  const [
    forgotpassword,
    { data, error, isSuccess, isError, isLoading },
  ] = useForgetPasswordMutation()

  const handleSubmit = async (value, { setSubmitting }) => {
    setSubmitting(true)
    await forgotpassword({ email: value.email })
    setTimeout(() => setSubmitting(false), 2000)
  }
  useEffect(() => {
    if (isSuccess) {
      navigation.navigate(VERIFICATION_SCREEN, {
        next: CREATE_PASSWORD_SCREEN,
        phone_number: data.data.phone_number,
      })
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      console.log(error)
      const FORGOT_PASSWORD_ERROR = {
        title: 'Server Error Occured',
        body: error?.data?.message,
      }
      errorAlert(FORGOT_PASSWORD_ERROR)
    }
  }, [isError])
  return (
    <Password
      data={forgetPasswordFormData}
      validationSchema={validationSchema}
      text="Please enter your email address to receive the verification code"
      handleSubmit={handleSubmit}
      route={route}
    />
  )
}
export default ForgotPassword
