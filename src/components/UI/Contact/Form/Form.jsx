import React,{useEffect,useRef } from "react"
import * as yup from 'yup';
import ContactFormStyles from "./Form.module.css"
import Recaptcha from 'react-google-recaptcha';
import { withFormik , Form, Field,FastField, ErrorMessage } from "formik"
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 import axios from "axios"
import rescaleCaptcha from "../../../../../static/js/rescaleCaptcha";
import { ResizeObserver } from 'resize-observer';
 
 export default function ContactForm() {
  const formEl = useRef(null);
  let languageCde="";
  i18next.use(LanguageDetector).init({  detection: {order:["navigator"]},}).then( (value)=>{
     languageCde=i18next.language||"fr";
  })
  useEffect (()=>{
    let recaptchaContainer=document.getElementsByClassName(ContactFormStyles.form__recaptcha__container)[0];
      let resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
           
   
          if(entry.target.children.length>0){
            rescaleCaptcha(entry.target,entry.target.children[0]);
          }
        }
      });
  
      resizeObserver.observe(recaptchaContainer);
    
  },[])
  const onSubmit=async (values,{ setFieldValue }) => {
      
    axios({
      method: 'POST',
      url: 'https://submit-form.com/04qNr6OovR4lRje61FlbD',
      data:{name:values.name,message:values.message},
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(response => {
        if(response){
          setFieldValue('success',!values.success);
        }
        
      })
      .catch(error => {
        console.log({"error":error});
        setFieldValue('success',false);
      })
     
      
  }
      
   const MyForm = withFormik({
    handleSubmit:onSubmit,

    validationSchema:yup.object().shape({
      name:yup.string().min(2,"Too short").required("Required"),
      email: yup.string().email("Valid Email Required").required("Required"),
      message:yup.string().trim().required("Required"),
      recaptcha: yup.string().nullable().required('Robots are not welcome yet!')}),
    mapPropsToValues({ name,email,message,success,recaptcha,
                       }) {
      return {
      email: email || "",
      name: name|| "",
      email: email||"",
      message: message||"",
      recaptcha: recaptcha||'',
      success: success||false,
      
    }
  }})((props)=>{
    const {
      values,
     errors,
     touched,
     handleChange,
     handleBlur,
     handleSubmit,
     isSubmitting,
     isValid,
     setFieldValue}=props;
  return (
    <div className={ContactFormStyles.container}>
          <Form
            name="contact-form"
            method="POST"
            ref={formEl}
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            className={ContactFormStyles.form}

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
              value={values.name}
              id="name"
              className={`${ContactFormStyles.form__input} ${ (errors.name && touched.name ? ContactFormStyles.isInvalid : '')}`}
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
              className={`${ContactFormStyles.form__input} ${(errors.email && touched.email ? ContactFormStyles.isInvalid : '')}`}
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
               
              name="message"
              id="message"
              placeholder="Message"
              component="textarea"
              value={values.message}
              className={` ${ContactFormStyles.form__inputMessage}
                          ${ContactFormStyles.form__input} ${(errors.message && touched.message ? ContactFormStyles.isInvalid : '')}`}
              required
              aria-invalid={errors.message  && touched.message ?"true":"false"}
            >
            <ErrorMessage
              name="message"
              component="div"
              className={ContactFormStyles.form__error}
            />
            </Field>
              
             
          <div className={ContactFormStyles.form__recaptcha__container}>
          { console.log({name:values,email:values.email,message:values.message})}
          {values.name && values.email && values.message && (
            <>
            <FastField
              component={Recaptcha}
              className="g-recaptcha"
                
              hl={  languageCde.includes("en")? "en":"fr"}
              sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={value => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component="span" style={{color: "#ff4136",}} name="recaptcha" />
            </>
            )}
          </div>
      
        {values.success && (
          <div className={ContactFormStyles.form__success}>
              <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
          </div>
        )}
        <Field type="text" name="_honey" style={{display: "none",}}/>
        <Field type="hidden" name="_next" value="" style={{display: "none",}}/>
        <Field type="hidden" name="form-name" style={{display: "none",}}/>
            <Field type="hidden" name="bot-field" style={{display: "none",}}/>
            <Field type="hidden" name="_redirect" value="false" style={{display: "none",}}/>
       
            <button
              type="submit"
              disabled={isSubmitting }
              className={ContactFormStyles.form__inputSubmit}
            >
              Send
            </button>
          </Form>
    </div>)
  });
  return <MyForm/>
}
 