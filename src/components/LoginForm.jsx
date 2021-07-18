import React from "react";
import "../style/myStyle.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import eshop from "../public/eshop.png";

function LoginForm({ handleSubmit = (values) => values }) {
  return (
    <div style={{ marginLeft: "30%", marginTop: "15%" }}>
      <img
        src={eshop}
        className="logo pb-1"
        style={{ marginLeft: "20%" }}
        alt="Ecommerce logo"
      />
      <h1 className="text mx-4">Welcome to Eshop</h1>
      <div className="col-sm-6 border px-3 py-3 bg-light mx-2">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(10, "Must be 10 charactres or less")
              .required("Username required"),
            password: Yup.string()
              .min(8, "Password must be 8 characters or more ")
              .required("Password required"),
          })}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <div className="form-group d-grid gap-2">
              <ErrorMessage
                name="username"
                render={(msg) => (
                  <div class="alert alert-danger" role="alert">
                    {msg}
                  </div>
                )}
              />
              <label>Username</label>
              <Field
                type="text"
                name="username"
                className="form-control borderless"
              />
            </div>
            <div className="form-group pt-3 d-grid gap-2">
              <ErrorMessage
                name="password"
                render={(msg) => (
                  <div class="alert alert-danger" role="alert">
                    {msg}
                  </div>
                )}
              />
              <label>Password</label>
              <Field
                type="password"
                className="form-control borderless"
                name="password"
              />
            </div>
            <div className="d-grid gap-2 pt-3">
              <button
                className="btn border-warning link borderless"
                type="submit"
              >
                <i className="fas fa-sign-in-alt me-2"></i>
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
