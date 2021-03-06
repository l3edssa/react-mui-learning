import React, { useState } from "react";

import { connect } from "react-redux";
import { LogIn } from "../../../redux/Auth/Auth.actions";

// FORMIK and YUP
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Container, Grid, Typography, Box, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import Textfield from "../../../Components/FormUI/Textfield";

//import Submit from "../../../Components/FormUI/Submit";

const LoginForm = ({ LogIn }) => {
  const [loading, setLoading] = useState(false);
  const INITIAL_FORM_STATE = {
    login: "",
    password: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    login: Yup.string()
      .required("Champ obligatoire")
      .test(
        "logina",
        "L'identifiant n'existe pas",
        (value) => value === "admin" || value === "muni" || value === "user"
      ),
    password: Yup.string()
      .required("Champ obligatoire")
      .when("login", {
        is: "admin", // alternatively: (val) => val == true
        then: (schema) =>
          schema.test(
            "pwd",
            "Mot de passe incorrect",
            (value) => value === "admin"
          ),
      })
      .when("login", {
        is: "muni", // alternatively: (val) => val == true
        then: (schema) =>
          schema.test(
            "pwd",
            "Mot de passe incorrect",
            (value) => value === "muni"
          ),
      })
      .when("login", {
        is: "user", // alternatively: (val) => val == true
        then: (schema) =>
          schema.test(
            "pwd",
            "Mot de passe incorrect",
            (value) => value === "user"
          ),
      }),
  });

  const resetAndExit = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(values);
      if (values.login === "admin" && values.password === "admin")
        LogIn(values.login);
      if (values.login === "muni" && values.password === "muni")
        LogIn(values.login);
      if (values.login === "user" && values.password === "user")
        LogIn(values.login);
      values.login = "";
      values.password = "";

      values = INITIAL_FORM_STATE;
    }, 1000);
  };

  const handleSubmit = (values) => {
    console.log("checking");
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="l">
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={handleSubmit}
            >
              {(formikProps) => {
                const { values, handleReset, submitForm, isValid } =
                  formikProps;
                return (
                  <Form
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        submitForm();
                        if (isValid) resetAndExit(values);
                      }
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography align="center" variant="h5" my={8}>
                          <b>App</b>
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield name="login" label="Identifiant" />
                      </Grid>

                      <Grid item xs={12}>
                        <Textfield
                          name="password"
                          type="password"
                          label="Mot de passe"
                        />
                      </Grid>
                      <Grid item xs={12} mt={2}>
                        <LoadingButton
                          size="small"
                          variant="contained"
                          fullWidth
                          loading={loading}
                          onClick={() => {
                            submitForm();
                            if (isValid) resetAndExit(values);
                          }}
                        >
                          Login
                        </LoadingButton>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  LogIn: (username) => dispatch(LogIn(username)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
