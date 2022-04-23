import React, {  useEffect } from "react";
import { Formik } from "formik";
import { Grid, Button } from "@mui/material";
import { Input, Select, LoadingButton } from "../../components";
import { addVoilationValidationSchema } from "../../helpers/validators";
import styles from "./style.module.css";
import { useAddVoilationMutation } from "../../api";
function AddVoilationForm({ onClose }) {

	const [addVoilation, { data, error, isSuccess, isError, isLoading }] = useAddVoilationMutation()

  const onSubmit = async (values, {setSubmitting}) => {
		setSubmitting(true)
		let body ={
			v_type: values?.v_type,
			code: values?.code,
			price: values?.price,
			voilation: values?.voilation
		}
		await addVoilation(body)
		setTimeout(() => setSubmitting(false), 500)
	};

	useEffect(() => {
		if(isSuccess){
			onClose()
		}
	}, [isSuccess]) 
 
  return (
    <Formik
      initialValues={{ price: 0, code: "", v_type: "", voilation: "" }}
      onSubmit={onSubmit}
      validationSchema={addVoilationValidationSchema}
    >
      {({ handleChange, handleBlur, values, handleSubmit, isSubmitting }) => (
        <>
          <Grid container fullWidth>
            <Input
              name="voilation"
              value={values.voilation}
              label="Voilation"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter the voilation"
              type="text"
              multiLine={true}
              rows={2}
              modal={true}
            />
            <Grid sx={{ display: "flex", flexDirection: "row", gap: "4em" }}>
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
							 <Input
                name="code"
                value={values.code}
                label="Voilation Code"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter voilation Code"
                type="text"
                modal={true}
              />
            </Grid>

            <Select
              name="v_type"
              value={values.v_type}
              label="Voilation Type"
              onChange={handleChange}
              onBlur={handleBlur}
              items={[
                { id: 1, label: "Moving", value: "moving" },
                { id: 2, label: "Parking", value: "parking" }
              ]}
            />
          </Grid>
          <Grid className={styles.buttonGroup}>
            <LoadingButton fullWidth onClick={handleSubmit} loading={isSubmitting}>
              Add
            </LoadingButton>
          </Grid>
        </>
      )}
    </Formik>
  );
}

export default AddVoilationForm;
