import React from "react"
import EmailStyles from "../styles/email.module.css"
import { Email, Item } from "react-html-email"
export default function InlineLink({ name, children }) {
  return (
    <Email
      title="link"
      className={EmailStyles.email}
      style={{ display: "flex", flexFlow: "column", justifyContent: "center", }}
    >
      <Item
        className={EmailStyles.email__title}
        style={{
          fontSize: "2rem",
        }}
      >
        Hello {name} has send you a email
      </Item>
      <Item className={EmailStyles.email__body} style={{ textAlign: 'center', }}>
        {children}
      </Item>
    </Email>
  )
}
