import React from "react"
import * as yup from 'yup';
import ContactFormStyles from "../styles/contactform.module.css"

import Recaptcha from 'react-google-recaptcha';
import { Formik, Form, Field, ErrorMessage } from "formik"
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 import axios from "axios"
 

 
 export default function ContactForm() {
  let languageCde="";
  i18next.use(LanguageDetector).init({  detection: {order:["navigator"]},}).then( (value)=>{
     console.log({i18languagedetected:i18next.language})
     languageCde=i18next.language||"en";
  })
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
        validateOnBlur={true} 
         
        validationSchema={yup.object().shape({
          name:yup.string().min(2,"Too short").required("Required"),
          email: yup.string().email("Valid Email Required").required("Required"),
          message:yup.string().trim().required("Required"),
          recaptcha: yup.string().nullable().required('Robots are not welcome yet!'),
          
        })}

        onSubmit={async (values, { setSubmitting,setFieldValue }) => {
           
          
          axios({
            method: 'POST',
            url: 'https://formsubmit.co/18e395e03f25f7d71383b32b1097319c',
            data: [values.name,values.message,values.email],
          })
            .then(response => {
              if(response){
                setFieldValue('success',!values.success);
              }
              
            })
            .catch(error => {
              console.log(error);
              setFieldValue('success',false);
            })
           
            
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
              id="name"
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
              id="message"
              placeholder="Message"
              component="textarea"
              className={` ${ContactFormStyles.form__inputMessage}
                          ${ContactFormStyles.form__input}`}
              required
              aria-invalid={errors.message  && touched.message ?"true":"false"}
            >
            <ErrorMessage
              name="message"
              component="div"
              className={ContactFormStyles.form__error}
            />
            </Field>
              
             {values.name && values.email && values.message && (
          <div className={ContactFormStyles.form__recaptcha__container}>
            <Field
              component={Recaptcha}
              hl={  languageCde.includes("en")? "en":"fr"}
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
        <input type="hidden" name="_next" value="" style={{display: "none",}}></input>
        {console.log(isSubmitting)}
            <button
              type="submit"
              disabled={isSubmitting}
              className={ContactFormStyles.form__inputSubmit}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
 