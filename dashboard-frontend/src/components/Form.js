import React from 'react'

import { Formik } from 'formik'

import Input from './CustomInput'

import styles from '../styles/Auth.module.css'

import { Link, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import VerificationInput from './VerificationInput'

const getFieldValues = (data) => {
  let names = []
  for (const key in data) {
    names = names.concat(data[key].names)
  }
  const values = names.reduce((obj, name) => ({ ...obj, [name]: '' }), {})
  return values
}

const Form = ({ data, handleSubmit, btn, forgotPassword = false, variety }) => {
  const fieldInitialValues = getFieldValues(data)
  const navigate = useNavigate()
  return (
    <>
      {variety !== 'verification' ? (
        <Formik initialValues={fieldInitialValues} onSubmit={handleSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit: formikSubmit,
            values,
            errors,
          }) => (
            <>
              <form className={styles.form}>
                {data.names.map((name, idx) => (
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    key={name}
                    name={name}
                    value={values[name]}
                    placeholder={
                      data.placeholders ? data?.placeholders[idx] : ''
                    }
                    label={name.replace(/_/g, ' ')}
                    type={data.types ? data?.types[idx] : 'text'}
                    error={errors[name]}
                  />
                ))}
                {forgotPassword && (
                  <Typography
                    className={styles.underline}
                    onClick={forgotPassword}
                  >
                    Forgot password?
                  </Typography>
                )}
                <div className={styles.buttonGroup}>
                  {btn.amount === 2 && (
                    <Button
                      className={styles.ghostButton}
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button
                    className={styles.button}
                    onClick={() => formikSubmit()}
                  >
                    <Link to={btn.navigate} className={styles.buttonText}>
                      {btn.title}
                    </Link>
                  </Button>
                </div>
              </form>
            </>
          )}
        </Formik>
      ) : (
        <VerificationInput />
      )}
    </>
  )
}

export default Form
