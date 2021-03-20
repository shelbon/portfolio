import React from "react"
import i18nConfig from  "../../../../i18n/config.json"
const LanguageSwitcher = () => {
   return(
     <span>
        {
          i18nConfig.map((locale)=>{
            return <p lang={locale.code} >{locale.name}</p>
          })
        }
     </span>
   )
   
}
export default LanguageSwitcher


