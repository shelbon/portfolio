import React from "react"
import * as yup from 'yup';
import ContactFormStyles from "../styles/contactform.module.css"
import MyEmail from '../templates/email'
import Recaptcha from 'react-google-recaptcha';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { renderEmail } from 'react-html-email'
 
 
 
 export default function ContactForm() {
 
  
  return (
    <div className={ContactFormStyles.container}>
      <Formik
        initialValues={{
          "bot-field": "",
          "form-name": "contact",
          name: "",
          email: "",
          message: "",
          recaptcha: '',
          success: false,
        }}
         
        validationSchema={yup.object().shape({
          name:yup.string().min(5,"Too short").required("Required"),
          email: yup.string().email("Valid Email Required").required("Required"),
          message:yup.string().required("Required"),
          recaptcha: yup.string().required('Robots are not welcome yet!'),
          
        })}

        onSubmit={async (values, { setSubmitting }) => {
          const messageHtml =  renderEmail(
            <MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>
          );
          
          const descriptor = {
            from: `${values.email}`,
            to: "mouclesheron@gmail.com",
            subject: `${values.name} sent you a message `,
            text: values.message,
            html:messageHtml,
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
          setFieldValue
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
              className={ContactFormStyles.form__label}
            >
              Name: 
            </label>
            <Field
              type="text"
              name="name"
              className={ContactFormStyles.form__input}
              required
              placeholder="Name"
              aria-invalid={errors.name  && touched.name ?"true":"false"}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={ContactFormStyles.form__error}
            />

            <label
              htmlFor="email"
              className={ContactFormStyles.form__label}
            >
              Email: 
            </label>
            <Field
              name="email"
              placeholder="Email"  
              id="email"
              value={values.email}
              className={ContactFormStyles.form__input}
              required
              aria-invalid={errors.email  && touched.email ?"true":"false"}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={ContactFormStyles.form__error}
            />

            <label
              htmlFor="message"
              className={ContactFormStyles.form__label}
            >
              Message:
            </label>
            <Field
              type="text"
              name="message"
              placeholder="Message"
              component="textarea"
              className={` ${ContactFormStyles.form__inputMessage}
                          ${ContactFormStyles.form__input}`}
              required
              aria-invalid={errors.message  && touched.message ?"true":"false"}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={ContactFormStyles.form__error}
            />
            {console.log({email:values.email})}
             {values.name && values.email && values.message && (
          <div className={ContactFormStyles.form__recaptcha__container}>
            <Field
              component={Recaptcha}
              sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
               
              onChange={value => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component="span" style={{color: "#ff4136",}} name="recaptcha" />
          </div>
        )}
        {values.success && (
          <div className={ContactFormStyles.form__success}>
              <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
          </div>
        )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={ContactFormStyles.form__inputSubmit}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
 