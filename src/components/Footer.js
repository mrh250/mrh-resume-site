import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Matt Halstead. 2019. Template from:{' '}
      <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer"> Gatsby.js</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
