import React from 'react';
import { useFormik } from 'formik'; // new
import * as Yup from 'yup'; // for everything

export default function ContactForm() {
  const GATEWAY_URL =
    'https://n05aoqv1k3.execute-api.us-east-1.amazonaws.com/prod';
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      message: Yup.string().required(),
    }),
    
    onSubmit(values, { resetForm }) {
      try {
        fetch(GATEWAY_URL, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          body: JSON.stringify(values),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        resetForm();
      } catch (error) {
        // handle server errors
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-6 col-12-mobile">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className={formik.errors.name ? 'error' : null}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <span className="errorText">{formik.errors.name}</span>
          ) : null}
        </div>
        <div className="col-6 col-12-mobile">
          <input
            type="text"
            name="email"
            placeholder="Your email"
            className={formik.errors.email ? 'error' : null}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <span className="errorText">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="col-12">
          <textarea
            name="message"
            placeholder="Your message"
            className={formik.errors.message ? 'error' : null}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message ? (
            <span className="errorText">{formik.errors.message}</span>
          ) : null}
        </div>
        <div className="col-12">
          <button type="submit">
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}
