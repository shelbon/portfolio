import React from "react"
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage ,withFormik} from "formik"
import ContactFormStyles from "../styles/contactform.module.css"
import useEmailAutocomplete from "use-email-autocomplete"

let schema = yup.object().shape({
  name:yup.string().min(5,"too short").required("Required"),
  email: yup.string().email("Valid Email Required").required("Required"),
  message:yup.string().required("Required")
  
});
 export default function ContactForm() {
  const { email, bind } = useEmailAutocomplete()
  
  return (
    <div className={ContactFormStyles.container}>
      <h1>Ecrivez-Moi</h1>
      <Formik
        initialValues={{
          "bot-field": "",
          "form-name": "contact",
          name: "",
          email: "",
          message: "",
        }}
         
        validationSchema={schema}

        onSubmit={(values, { setSubmitting }) => {
          const descriptor = {
            from: `${values.email}`,
            to: "mouclesheron@gmail.com",
            subject: `${values.name} sent you a message `,
            text: values.message,
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form
            name="contact"
            method="post"
            className={ContactFormStyles.form}
            action=""
          >
            <label
              htmlFor="name"
              className={ContactFormStyles.form__label__name}
            >
              Name:{" "}
            </label>
            <Field
              type="text"
              name="name"
              className={ContactFormStyles.form__input__name}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={ContactFormStyles.form__error__name}
            />

            <label
              htmlFor="email"
              className={ContactFormStyles.form__label__email}
            >
              Email:{" "}
            </label>
            <Field
              name="email"
              
              placeholder="email here"
            >
              {({
                field, // { name, value, onChange, onBlur }

                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.

                meta,
              }) => (
                <div>
                  <input type="email" placeholder="Email" {...field} {...bind} className={ContactFormStyles.form__input__email} />

                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <ErrorMessage
              name="email"
              component="div"
              className={ContactFormStyles.form__error__email}
            />

            <label
              htmlFor="message"
              className={ContactFormStyles.form__label__message}
            >
              Message:{" "}
            </label>
            <Field
              type="text"
              name="message"
              component="textarea"
              className={ContactFormStyles.form__input__message}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={ContactFormStyles.form__error__message}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={ContactFormStyles.form__input__submit}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
 