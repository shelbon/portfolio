import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ContactFormStyles from "../styles/contactform.module.css";
import useEmailAutocomplete from 'use-email-autocomplete';
 
  
export default function ContactForm() {
  const { email, bind } = useEmailAutocomplete();
  
  return(
          
    <div className={ContactFormStyles.container}>
    <h1>Ecrivez-Moi</h1>
    <Formik
      initialValues={{  "bot-field": "",
      "form-name": "contact",name: '', email: '',message:'' }}
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if(!values.name){
            errors.name = 'Required';
        }
        if(!values.message){
            errors.message = 'Required';
        }
        if(!values.email || !emailRegex.test(values.email)) 
        {        errors.email = 'Valid Email Required'      
         }
        if (!values.email) {
          errors.email = 'Required';
        }  
         
        return errors;
      }}
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
        <Form name="contact" method="post"   className={ContactFormStyles.form}action="">

        <label htmlFor="name" className={ContactFormStyles.form__label__name}>Name: </label>
        <Field type="text" name="name"  className={ContactFormStyles.form__input__name} />
        <ErrorMessage name="name" component="div" className={ContactFormStyles.form__error__name} />

        <label htmlFor="email" className={ContactFormStyles.form__label__email}>Email: </label>
        <Field type="email" name="email" {...bind} className={ContactFormStyles.form__input__email} />
        <ErrorMessage name="email"   component="div" className={ContactFormStyles.form__error__email} />
        
        <label htmlFor="message"  className={ContactFormStyles.form__label__message} >Message: </label>
        <Field type="text" name="message"  component="textarea"     className={ContactFormStyles.form__input__message} />
        <ErrorMessage name="message"   component="div"  className={ContactFormStyles.form__error__message}/>
        
        <button type="submit" disabled={isSubmitting} className={ContactFormStyles.form__input__submit}>
          Submit
        </button>
      </Form>
      )}
    </Formik>
  </div>)
}
 