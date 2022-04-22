import React, { useEffect } from "react";
import styles from "../styles/Auth.module.css";
import { Typography, Grid, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Input from "../containers/CustomInput";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useLoginMutation } from "../api";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/auth";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("This is a required field"),
  password: yup
    .string()
    .required("This is a required field")
    .min(8, "Password must be minimum of 8 characters long"),
});
const Login = () => {
  const navigate = useNavigate();
  const [login, { data, error, isSuccess, isError, isLoading }] =
    useLoginMutation();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    let data = {
      email: values?.email,
      password: values?.password,
    };

    await login(data);
    setTimeout(() => setSubmitting(false), 1000);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log({ data: data.data });
      localStorage.setItem("token", data.data.token)
      dispatch(setUser({ data: data.data }));
      navigate("/", {
        replace: true,
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      alert(JSON.stringify(error));
    }
  }, [isError]);

  return (
    <div className={styles.loginBox}>
      <Typography
        variant="h1"
        fontSize={40}
        textAlign="center"
        className={styles.heading}
      >
        LOGIN
      </Typography>
      <div className={styles.formCard}>
        <AccountCircleRoundedIcon className={styles.icon} />
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} >
          {(formikProps) => {
            const {
              handleChange,
              handleBlur,
              values,
              isSubmitting,
              handleSubmit,
            } = formikProps;
            return (
              <Grid container styles={{ width: "100%" }}>
                <Input
                  name="email"
                  value={values.email}
                  label="Email Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email address"
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  type="password"
                />
                <LoadingButton
                  loading={true}
                  onClick={handleSubmit}
                  loadingPosition="start"
                  variant="contained"
                  className={styles.button}
                  fullWidth
                  loadingIndicator={<CircularProgress color="white" size={20} />}
                >
                  <p className={styles.buttonText}>Login</p>
                </LoadingButton>
              </Grid>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(Login);
