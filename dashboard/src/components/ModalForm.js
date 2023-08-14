import React from 'react'

import { Formik } from 'formik'

import Input from './CustomInput'

import styles from '../styles/ModalForm.module.css'
import { Button } from '@mui/material'

const getFieldValues = (data) => {
  let names = []
  for (const key in data) {
    names = names.concat(data[key].names)
  }
  const values = names.reduce((obj, name) => ({ ...obj, [name]: '' }), {})
  return values
}

const FormModal = ({
  data,
  handleSubmit,
  btn: { title, amount, onClickOfCancel },
}) => {
  const fieldInitialValues = getFieldValues(data)
  return (
    <Formik initialValues={fieldInitialValues} onSubmit={handleSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit: formikSubmit,
        values,
        errors,
      }) => (
        <>
          <form>
            {data.names.map((name, idx) => (
              <Input
                onChange={handleChange(name)}
                onBlur={handleBlur(name)}
                key={name}
                modal={true}
                name={name}
                value={values[name]}
                placeholder={data.placeholders ? data?.placeholders[idx] : ''}
                label={name.replace(/_/g, ' ')}
                type={data.types ? data?.types[idx] : 'text'}
                error={errors[name]}
              />
            ))}
          
        </>
      )}
    </Formik>
  )
}

let defaultRenderButton = ({ onClose, onSubmit, button }) => {
  return (
    <div className={styles.buttonGroup}>
      <Button className={styles.ghostButton} onClick={onClose}>
        Cancel
      </Button>

      <Button className={styles.button} onClick={onSubmit}>
        {button.title}
      </Button>
    </div>
  )
}

const ModalFormV2 = (props) => {
  const {
    fields,
    buttonProps,
    validationSchema,
    onSubmit,
    onClose,
    renderBtns = defaultRenderButton,
  } = props

  const initialValues = fields.reduce(
    (obj, field) => ({ ...obj, [field.name]: field.defaultValue }),
    {},
  )

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          <form className={styles.form}>
            {fields.map(({ name, placeholder, label, type }, idx) => (
              <Input
                onChange={handleChange(name)}
                onBlur={handleBlur(name)}
                key={name}
                modal={true}
                name={name}
                value={values[name]}
                placeholder={placeholder}
                label={label}
                type={type}
                error={errors[name]}
              />
            ))}
          </form>
          {renderBtns({
            button: buttonProps,
            onSubmit: handleSubmit,
            onClose,
          })}
        </>
      )}
    </Formik>
  )
}

export { ModalFormV2 as ModalForm }

export default FormModal
