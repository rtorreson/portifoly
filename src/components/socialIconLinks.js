import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconInstagram from './images/instagram'
import IconWhats from "./images/whatsapp"

const SocialIconLinks = ({ iconClasses }) => {

  return (
    <React.Fragment>
      <a href="https://github.com/rtorreson" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="https://www.linkedin.com/in/rafaeltorreson" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      <a href="https://www.instagram.com/rafaeltorreson" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`}  />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5511984308575" target="_blank" rel="noopener noreferrer">
        <IconWhats classes={`${iconClasses}`}  />
      </a>
    </React.Fragment>
  )
}

export default SocialIconLinks
