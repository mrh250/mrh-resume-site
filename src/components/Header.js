import React from 'react'
import PropTypes from 'prop-types'

import mrhProfilePhoto from '../images/mrhProfilePhoto.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-microchip"></span>
    </div>
    <div className="content">
      <div className="inner">
        <img src={mrhProfilePhoto} alt="My ugly mug." />
        <h1>Dr. Matthew Halstead</h1>
        <p>
          <b>Motivated</b>, <em>energetic</em> nuclear engineer and radiation effects in electronics physicist with a passion for team-driven, empathetic leadership. <b>Experienced</b> with experimental- and simulation-based scientific research and strong interpersonal skills.  Lifelong desire to continue learning and expand <em>worldview</em>. {' '}
        </p>
        <ul className="icons">
          <li><a href="https://twitter.com/mrh250" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','twitter-square']}/></a></li>
          <li><a href="https://www.facebook.com/matt.halstead.754" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','facebook']}/></a></li>
          <li><a href="https://www.linkedin.com/in/matthewrhalstead/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','linkedin']}/></a></li>
          <li><a href="https://github.com/mrh250" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab','github']}/></a></li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
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
              props.onOpenArticle('workExperience')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a 
            onClick={() => {
              props.onOpenArticle('education')
            }}
          >
            Education
          </a>
        </li>
        <li>
          <a 
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skillset
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
