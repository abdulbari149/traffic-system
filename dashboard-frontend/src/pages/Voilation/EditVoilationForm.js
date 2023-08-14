import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import { Input, LoadingButton } from '../../components'
import styles from './style.module.css'
import { Button, Grid } from '@mui/material'
import { editVoilationValidationSchema } from '../../helpers/validators'
import { useEditVoilationPriceMutation } from '../../api'
import { closeVoilationModal } from '../../reducers/voilation'

function EditVoilationForm({ onClose }) {
  const [
    editVoilationPrice,
    { data, error, isSuccess, isError, isLoading },
  ] = useEditVoilationPriceMutation()
  const voilationId = useSelector(
    (state) => state.voilation.selectedVoilationId,
  )
	const dispatch = useDispatch()
  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)
    let body = {
      id: voilationId,
      new_price: values.price,
    }
    await editVoilationPrice(body)
		setTimeout(() => {	
			setSubmitting(false)
			dispatch(closeVoilationModal())
		}, 200)
		
  }

  useEffect(() => {
		if(isSuccess){
			setTimeout(() => {
				alert(data?.message)
			}, 500)
		}
	}, [isSuccess])

  return (
    <Formik
      initialValues={{ price: 0 }}
      onSubmit={onSubmit}
      validationSchema={editVoilationValidationSchema}
    >
      {({ handleChange, handleBlur, values, handleSubmit, isSubmitting }) => (
        <>
          <Grid container fullWidth>
            <Input
              name="price"
              value={values.price}
              label="New Price"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter new price"
              type="number"
              modal={true}
            />
          </Grid>
          <Grid className={styles.buttonGroup}>
            <Button
              className={styles.ghostButton}
              variant="outlined"
              onClick={onClose}
            >
              Cancel
            </Button>
            <LoadingButton onClick={handleSubmit} loading={isSubmitting}>
              Change
            </LoadingButton>
          </Grid>
        </>
      )}
    </Formik>
  )
}

export default EditVoilationForm
