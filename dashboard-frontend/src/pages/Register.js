import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import styles from "../styles/Auth.module.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { registerValidationSchema } from "../helpers/validators";
import CustomInput from "../components/CustomInput";
import { useRegisterMutation } from "../api";
import ActionAlerts from "../components/ActionAlerts";
const Register = () => {
  const [createAdmin, { data, error, isSuccess, isError, isLoading }] =
    useRegisterMutation();
  const navigate = useNavigate();
  const { token, admin } = useSelector((state) => state.auth);
  useEffect(() => {
    if (admin.role !== "superadmin") {
      navigate("/", { replace: true });
    }
  }, []);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };
  const [alert, setAlert] = useState({ title: "", message: "", severity: "" });
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  async function handleSubmit(
    values,
    { setSubmitting, resetForm, submitCount }
  ) {
    setSubmitting(true);
    console.log({ token });
    let body = {
      name: `${values.first_name} ${values.last_name}`,
      email: values.email,
      password: values.password
    };
    await createAdmin({ data: body, token });
    setTimeout(() => {
      resetForm({
        values: initialValues,
        error: initialValues,
        touched: Object.keys(initialValues).reduce(
          (obj, key) => ({ ...obj, [key]: false }),
          {}
        ),
        isSubmitting: false,
        submitCount: submitCount + 1,
        isValidating: false
      });
      setSubmitting(false);
    }, 1000);
  }

  useEffect(() => {
    if (isSuccess) {
      console.log({ data });
      setAlertModalOpen(true);
      setAlert({
        title: "Successfully",
        message: data?.data?.message,
        severity: "success"
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log({ error });

      setAlertModalOpen(true);
      setAlert({
        title: "Error Occured",
        message: error?.data?.message,
        severity: "error"
      });
    }
  }, [isError]);

  return (
    <Grid
      container
      lg={10.5}
      xs={12}
      alignItems="center"
      justifyContent="center"
      sx={{ py: 4, overflow: "scroll", height: "100vh" }}
    >
      <div style={{ maxWidth: 600 }} className={styles.formCard}>
        <Typography variant="h5" className={styles.heading}>
          Add New Admin
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={registerValidationSchema}
        >
          {(formikProps) => {
            const {
              handleChange,
              handleBlur,
              values,
              isSubmitting,
              handleSubmit
            } = formikProps;
            return (
              <Grid container styles={{ width: "100%" }}>
                <Grid
                  item
                  container
                  spacing={4}
                  alignItems="center"
                  direction="row"
                >
                  <Grid item xs={6}>
                    <CustomInput
                      label="First Name"
                      name="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter first name"
                      type="text"
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <CustomInput
                      label="Last Name"
                      name="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter last name"
                      type="email"
                    />
                  </Grid>
                </Grid>
                <CustomInput
                  name="email"
                  value={values.email}
                  label="Email Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter email address"
                  type="email"
                />
                <CustomInput
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter password"
                  type="password"
                />
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  className={styles.button}
                  fullWidth
                >
                  {isSubmitting ? (
                    <CircularProgress
                      size={25}
                      thickness={4.5}
                      sx={{ color: "white" }}
                    />
                  ) : (
                    <p className={styles.buttonText}>Add</p>
                  )}
                </Button>
              </Grid>
            );
          }}
        </Formik>
      </div>
      <ActionAlerts
        open={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        {...alert}
      />
    </Grid>
  );
};

export default Register;
