import React, { useEffect } from "react";
import { Typography, Grid, Button, CircularProgress } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

import styles from "../styles/Auth.module.css";

import CustomInput from "../components/CustomInput";
import { validationSchema } from "../helpers/validators";
import { setUser } from "../reducers/auth";
import { useLoginMutation } from "../api";

const Login = () => {
  const navigate = useNavigate();
  const [login, { data, error, isSuccess, isError, isLoading }] =
    useLoginMutation();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("Submit runni");
    let data = {
      email: values?.email,
      password: values?.password
    };

    await login(data);
    setTimeout(() => setSubmitting(false), 1000);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log({ data: data.data });
      localStorage.setItem("token", data.data.token);
      dispatch(setUser({ data: data.data }));
      navigate("/dashboard/warden-approval", {
        replace: true
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
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
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
                <CustomInput
                  name="email"
                  value={values.email}
                  label="Email Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email address"
                  type="email"
                />
                <CustomInput
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
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
                    <p className={styles.buttonText}>Login</p>
                  )}
                </Button>
              </Grid>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default React.memo(Login);
