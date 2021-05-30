import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FastField, ErrorMessage } from 'formik';
import { withTranslation } from 'react-i18next';
import { Alert, AlertTitle } from '@material-ui/lab';
import { IconButton, Collapse, makeStyles } from '@material-ui/core';
import * as yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import Recaptcha from 'react-google-recaptcha';
import axios from 'axios';
import {
  container,
  form__recaptcha__container,
  form,
  form__label,
  form__input,
  form__error,
  form__inputMessage,
  isInvalid,
  form__inputSubmit,
  form__result,
} from './Form.module.css';
import AppContext from '../../../../utils/context';

// style for alertTitle
const useStyles = makeStyles({
  root: {
    color: '#1C1C1C',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat,sans-serif',
  },
});
function ContactForm({ t, i18n }) {
  const [open, setOpen] = useState(false);
  const languageCde = i18n.language;
  const classes = useStyles();
  const { resizeObserver } = React.useContext(AppContext);
  useEffect(() => {
    const recaptchaContainer = document.getElementsByClassName(
      form__recaptcha__container,
    )[0];

    resizeObserver.observe(recaptchaContainer);
  }, []);
  return (
    <div className={container}>
      <Formik
        initialValues={{
          'bot-field': '',
          'form-name': 'contact',
          name: '',
          email: '',
          message: '',
          recaptcha: '',
          success: false,
          _next: '',
          _redirect: false,
        }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .trim()
            .max(
              256,
              t('contactForm.input.error_name', { limit: 256 }),
            )
            .required(
              t('required', {
                saisie: t('contactForm.input.name').toLowerCase(),
              }),
            ),
          email: yup
            .string()
            .email(t('contactForm.input.error_email'))
            .required(
              t('required', {
                saisie: t('contactForm.input.e-mail').toLowerCase(),
              }),
            ),
          message: yup
            .string()
            .trim()
            .max(
              300,
              t('contactForm.input.error_message', { limit: 300 }),
            )
            .required(
              t('required', {
                saisie: t('contactForm.input.message').toLowerCase(),
              }),
            ),
          recaptcha: yup
            .string()
            .nullable()
            .required(t('contactForm.error_recaptcha')),
        })}
        onSubmit={async (
          values,
          { setSubmitting, resetForm, setFieldValue },
        ) => {
          try {
            axios({
              method: 'POST',
              url: 'https://submit-form.com/04qNr6OovR4lRje61FlbD',
              data: {
                name: values.name,
                message: values.message,
                email: values.email,
                'g-recaptcha-response': values.recaptcha,
              },
            });
            setSubmitting(false);
            setFieldValue('success', true);
            setOpen(true);
            setTimeout(() => setOpen(false), 3000);
            setTimeout(() => resetForm(), 6000);
          } catch (err) {
            setSubmitting(false);
            setFieldValue('success', false);
            setOpen(true);
          }
        }}
      >
        {(props) => {
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
          } = props;
          return (
            <Form
              name="contact"
              method="post"
              className={form}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <label htmlFor="name" className={form__label}>
                {t('contactForm.input.name')}:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className={`${form__input} ${
                  errors.name && touched.name ? isInvalid : ''
                }`}
                yup
                placeholder={t('contactForm.input.name.placeholder')}
                onBlur={handleBlur}
                onChange={handleChange}
                aria-invalid={
                  errors.name && touched.name ? 'true' : 'false'
                }
              />
              <ErrorMessage
                name="name"
                component="div"
                className={form__error}
              />

              <label htmlFor="email" className={form__label}>
                {t('contactForm.input.e-mail')}:
              </label>
              <Field
                name="email"
                placeholder={t(
                  'contactForm.input.e-mail.placeholder',
                )}
                id="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                className={`${form__input} ${
                  errors.email && touched.email ? isInvalid : ''
                }`}
                yup
                aria-invalid={
                  errors.email && touched.email ? 'true' : 'false'
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className={form__error}
              />

              <label htmlFor="message" className={form__label}>
                {t('contactForm.input.message')}:
              </label>
              <Field
                name="message"
                id="message"
                placeholder={t(
                  'contactForm.input.message.placeholder',
                )}
                component="textarea"
                onBlur={handleBlur}
                onChange={handleChange}
                className={` ${form__inputMessage}
                          ${form__input} ${
                  errors.message && touched.message ? isInvalid : ''
                }`}
                yup
                aria-invalid={
                  errors.message && touched.message ? 'true' : 'false'
                }
              />
              <ErrorMessage
                name="message"
                component="div"
                className={form__error}
              />
              <Field type="hidden" name="form-name" />
              <Field type="hidden" name="bot-field" />
              <Field type="hidden" name="_redirect" value="false" />

              <div className={form__recaptcha__container}>
                {values.name && values.email && values.message && (
                  <>
                    <FastField
                      component={Recaptcha}
                      className="g-recaptcha"
                      hl={languageCde.includes('en') ? 'en' : 'fr'}
                      sitekey={
                        process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY
                      }
                      name="recaptcha"
                      onChange={(value) =>
                        setFieldValue('recaptcha', value)
                      }
                    />
                    <ErrorMessage
                      name="recapta"
                      className={form__error}
                      component="span"
                      style={{ color: '#ff4136' }}
                      name="recaptcha"
                    />
                  </>
                )}
              </div>
              {open && (
                <Collapse in={open}>
                  <Alert
                    className={form__result}
                    variant="filled"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    severity={values.success ? 'success' : 'error'}
                  >
                    <AlertTitle classes={{ root: classes.root }}>
                      {values.success
                        ? t('contactForm.form_result.success')
                        : t('contactForm.form_result.failed')}
                    </AlertTitle>
                  </Alert>
                </Collapse>
              )}
              <Field
                type="hidden"
                name="_next"
                value=""
                style={{ display: 'none' }}
              />
              <Field type="hidden" name="_captcha" value="false" />
              <button
                type="submit"
                disabled={isSubmitting}
                className={form__inputSubmit}
              >
                {t('contactForm.submit.button')}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default withTranslation('contactForm')(ContactForm);
