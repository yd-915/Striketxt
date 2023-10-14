import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/FAQs">
          FAQs
        </Link>
      </div>
      <div>
        <p> © Striketxt All Rights Reserved. 2023 </p>
      </div>
    </div>
  )
}
