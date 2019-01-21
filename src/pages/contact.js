import React from 'react'

import Layout from '../components/layout'
import contactMe from '../images/contactMe.gif'

const contactPage = () => (
  <Layout>
    <div className="content">
      <style>{'body { background-color: black; }'}</style>
      <img src={contactMe} alt="" width="700px" />
      <form
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
          <li>
            <button onClick="/"> Homepage</button>
          </li>
        </ul>
      </form>
    </div>
  </Layout>
)

export default contactPage
