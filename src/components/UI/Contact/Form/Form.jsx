import React, { useEffect, useState } from "react"
import { Formik, Form, Field, FastField, ErrorMessage } from "formik"
import { ResizeObserver } from "resize-observer"
import { withTranslation } from 'react-i18next';
import { Alert, AlertTitle } from "@material-ui/lab"
import { IconButton, Collapse,makeStyles } from "@material-ui/core"
import * as yup from "yup"
import CloseIcon from "@material-ui/icons/Close"
import ContactFormStyles from "./Form.module.css"
import Recaptcha from "react-google-recaptcha"
import axios from "axios"
import rescaleCaptcha from "../../../../../static/js/rescaleCaptcha"

//style for alertTitle
const useStyles = makeStyles({
    root:{
      color:"#1C1C1C",
      fontSize:"1.2rem",
      fontFamily:"Montserrat,sans-serif"
    }
});
function ContactForm({ t,i18n}) {
  const [open, setOpen] = useState(false)
  let languageCde = i18n.language  
  const classes = useStyles();
  useEffect(() => {
    let recaptchaContainer = document.getElementsByClassName(
      ContactFormStyles.form__recaptcha__container
    )[0]
    let resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target.children.length > 0) {
          rescaleCaptcha(entry.target, entry.target.children[0])
        }
      }
    })

    resizeObserver.observe(recaptchaContainer)
  }, [])
  let initialValues = {
    "bot-field": "",
    "form-name": "contact",
    name: "",
    email: "",
    message: "",
    recaptcha: "",
    success: false,
    _next: "",
    _redirect: false,
  }
  return (
    <div className={ContactFormStyles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={yup.object().shape({
          name: yup.string().trim().max(256,t("error_name")).required(t("required",{saisie:t("name").toLowerCase()})),
          email: yup
            .string()
            .email(t("error_email"))
            .required(t("required",{saisie:t("email").toLowerCase()})),
          message: yup.string().trim().max(280,t("error_message")).required(t("required",{saisie:t("message").toLowerCase()})),
          recaptcha: yup
            .string()
            .nullable()
            .required(t("error_recaptcha")),
        })}
        //https://formsubmit.co/18e395e03f25f7d71383b32b1097319c',
        onSubmit={async (
          values,
          { setSubmitting, resetForm, setFieldValue }
        ) => {
          try {
            axios({
              method: "POST",
              url: "https://formsubmit.co/18e395e03f25f7d71383b32b1097319c",
              data: {
                name: values.name,
                message: values.message,
                email: values.email,
                "g-recaptcha-response": values.recaptcha,
              },
            })
            setSubmitting(false)
            setFieldValue("success", true)
            setOpen(true)
            setTimeout(() => setOpen(false), 3000)
            setTimeout(() => resetForm(), 6000)
          } catch (err) {
            console.log({ error: err })
            setSubmitting(false)
            setFieldValue("success", false)
            setOpen(true)
          }
        }}
      >
        {props => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,
            isValid,
            setFieldValue,
            resetForm,
          } = props
          return (
            <Form
              name="contact"
              method="post"
              className={ContactFormStyles.form}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <label htmlFor="name" className={ContactFormStyles.form__label}>
                {t("name")}:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={`${ContactFormStyles.form__input} ${
                  errors.name && touched.name ? ContactFormStyles.isInvalid : ""
                  }`}
                yup
                placeholder={t("namePlaceholder")}
                onBlur={handleBlur}
                onChange={handleChange}
                aria-invalid={errors.name && touched.name ? "true" : "false"}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={ContactFormStyles.form__error}
              />

              <label htmlFor="email" className={ContactFormStyles.form__label}>
                {t("e-mail")}:
              </label>
              <Field
                name="email"
                placeholder={t("e-mailPlaceholder")}
                id="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                className={`${ContactFormStyles.form__input} ${
                  errors.email && touched.email
                    ? ContactFormStyles.isInvalid
                    : ""
                  }`}
                yup
                aria-invalid={errors.email && touched.email ? "true" : "false"}
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
                {t("message")}:
              </label>
              <Field
                name="message"
                id="message"
                placeholder={t("messagePlaceholder")}
                component="textarea"
                onBlur={handleBlur}
                onChange={handleChange}
                className={` ${ContactFormStyles.form__inputMessage}
                          ${ContactFormStyles.form__input} ${
                  errors.message && touched.message
                    ? ContactFormStyles.isInvalid
                    : ""
                  }`}
                yup
                aria-invalid={
                  errors.message && touched.message ? "true" : "false"
                }
              />
              <ErrorMessage
                  name="message"
                  component="div"
                  className={ContactFormStyles.form__error}
                />
              <Field type="hidden" name="form-name" />
              <Field type="hidden" name="bot-field" />
              <Field type="hidden" name="_redirect" value="false" />

              <div className={ContactFormStyles.form__recaptcha__container}>
                {values.name && values.email && values.message && (
                  <>
                    <FastField
                      component={Recaptcha}
                      className="g-recaptcha"
                      hl={languageCde.includes("en") ? "en" : "fr"}
                      sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                      name="recaptcha"
                      onChange={value => setFieldValue("recaptcha", value)}
                    />
                    <ErrorMessage
                      name="recapta"
                      className={ContactFormStyles.form__error}
                      component="span"
                      style={{ color: "#ff4136" }}
                      name="recaptcha"
                    />
                  </>
                )}
              </div>

              <Collapse in={open}>
                <Alert
                  className={ContactFormStyles.form__result}
                  variant="filled"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false)
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  severity={values.success ? "success" : "error"}
                >
                  <AlertTitle classes={{root:classes.root}}>
                    {values.success
                      ? "Votre message a bien été transmis"
                      : "le message n'a pas pu être transmis veuillez réessayer  ou contacter par téléphone"}
                  </AlertTitle>
                </Alert>
              </Collapse>

              <Field
                type="hidden"
                name="_next"
                value=""
                style={{ display: "none" }}
              />
              <Field type="hidden" name="_captcha" value="false" />
              <button
                type="submit"
                disabled={isSubmitting }
                className={ContactFormStyles.form__inputSubmit}
              >
                Send
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default withTranslation()(ContactForm);