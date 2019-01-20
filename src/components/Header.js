import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-microchip" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Dr. Matthew Halstead</h1>
        <p>
          A motivated, energetic nuclear engineer and radiation effects in
          electronics physicist with a passion to get things done for your
          organization.{' '}
        </p>
        <ul className="icons">
          <li><a href="https://twitter.com/mrh250" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="https://www.facebook.com/matt.halstead.754" target="_blank" rel="noopener noreferrer" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/mrh250/" target="_blank" rel="noopener noreferrer" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="https://github.com/mrh250" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a 
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a 
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a 
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
