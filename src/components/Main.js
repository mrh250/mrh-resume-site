import React from 'react'
import PropTypes from 'prop-types'
import Recaptcha from "react-google-recaptcha";

import trident from '../images/trident.jpg'
import integrity from '../images/integrity.jpg'
import craneLogo from '../images/craneLogo.jpg'
import AFITlogo from '../images/AFITlogo.jpg'
import PSUlogo from '../images/PSUlogo.png'
import leadership from '../images/leadership.jpg'
import keyboard from '../images/keyboard.jpg'
import contactMe from '../images/contactMe.gif'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabWindows } from '@fortawesome/free-solid-svg-icons'

library.add(fabWindows)

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

class Main extends React.Component {
  handleRecaptcha = value => {
    this.setState({"g-recaptcha-response": value});
  };

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Who am I?</h2>
          <span className="image main">
            <img src={integrity} alt="" />
          </span>
          <p>
            <em>Integrity: </em>I endeavor to do the right thing, all the time,
            no matter who is watching.{' '}
          </p>
          <p>
            <em> Reliability and Dedication: </em> I put forth maximum effort
            toward any project or job – all day, every day – and do so with
            enthusiasm and perseverance.
          </p>
          <p>
            <em>Innovation:</em> I strive to push boundaries in order to provide
            new solutions.
          </p>
          <p>
            <em>Respectfulness: </em> I strive to treat team members with the
            utmost respect in all interpersonal relationships; disagreement is
            okay, as it can lead to innovative thinking, but contempt is not.
          </p>
          {close}
        </article>

        <article
          id="workExperience"
          className={`${
            this.props.article === 'workExperience' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            {' '}
            <img src={craneLogo} alt="" />{' '}
          </span>
          <h3> Naval Surface Warfare Center (NSWC) Crane </h3>
          <p>
            <u>Title</u>: Radiation Sciences Engineer <br />
            <u>Supervisor</u>: Matt Bedel <br />
            <u>Dates</u>: 08/2014 - Present
            <br />
          </p>
          <p>
            <em>Research Engineer:</em> <br />
            <ul>
              <li>
                As Principal Investigator and lead researcher, executed two Internal Research &amp; Development (IR&amp;D) projects for $350K+.
              </li>
              <li>
                Developed collaboration partnership teams made up of internal and external world-class personnel. Organizations include Sandia National Laboratory, Vanderbilt University, MIT, The Aerospace Corporation, and others.
              </li>
              <li>
                Collected, analyzed, and presented findings at the Hardened Electronics and Radiation Technologies (HEART), Radiation Hardened Electronics Technology (RHET), and Nuclear & Space Radiation Effects Conference (NSREC) along with numerous technical interchange meetings. Presentations lead to publication in the Journal of Radiation Effects, Research, and Engineering (JRERE).
              </li>
            </ul>
          </p>
          <p>
            <em>
              Lead, Microelectronics Radiation Survivability Support to Missile
              Defense Agency{' '}
            </em>
            : <br />
            <ul>
              <li>
              Principal Subject Matter Expert (SME) leading team of 5 exceptional individuals and 3 FTE of effort providing radiation survivability support to the Missile Defense Agency (MDA) Redesigned Kill Vehicle (RKV) program.
              </li>
              <li>
                Interfaced with division leadership and base physical security/communications personnel to propose, develop, and execute plan to improve local classified (SIPR) terminal access.
              </li>
            </ul>
          </p>
          <p>
            <em>Study Manager, Radiation Test Infrastructure</em>:<br />
            <ul>
              <li>
                Coordinated Department-directed gap analysis comparing projected radiation test needs against national infrastructure capacity to ensure the continued ability of NSWC Crane to meet expanding customer demand.
              </li>
              <li>
                Interfaced directly with strategic missile system programs (Navy, Air Force, and MDA), as well as national radiation test facilities such as Texas A&M Cyclotron, Little Mountain Test Facility for prompt dose rate, and White Sands Fast Burst Neutron Reactor.
              </li>
              <li>
                Initiated multimillion-dollar construction project to support future radiation testing of strategic electronic components at NSWC Crane.
              </li>
            </ul>
          </p>
          <p>
            <em> Chair, Strategic Systems Hardware Working Group (SSHWG) </em>:{' '}
            <br />
            <ul>
              <li>
                Lead dynamic, cross-department team of over 15 individuals tasked to interface with NSWC Crane and strategic customers’ S&T/R&D programs and to direct investment of over $7M/year in innovative research projects.
              </li>
              <li>
                Developed and implemented standardized Working Group process to review, score, and stratify yearly IR&amp;D proposals.
              </li>
            </ul>
          </p>
          <p>
            <em>Lead, Modeling and Simulation for Radiation Sciences</em>:{' '}
            <br />
            <ul>
              <li>
                Revitalized high-performance scientific computing capability for NSWC Crane Flight Division, which included classified and unclassified, Linux-based Rocks (CentOS) cluster assets. Expanded user base every year.
              </li>
              <li>
                Coordinated team of scientific, security, and system administration personnel and drove 8x computing resource expansion on unclassified system leading to the ability to perform setup and execution of Monte Carlo simulations in &lt;50% of the usual time.
              </li>
            </ul>
          </p>
          <p>
            <em>
              Responsible Technical Authority, Radiation Survivability SME
            </em>
            : <br />
            <ul>
              <li>
              Provided subject-matter expertise to assess new and emerging technologies as candidates for radiation-hardened applications.
              </li>
              <li>
                Wrote technical requirements and derived contract documentation for $20M/year Basic Ordering Agreement with industrial partner for the sustainment of critical manufacturing capability in support of OSD Title III critical infrastructure investment to ensure national ability to procure rad-hard microelectronics for defense applications.
              </li>
            </ul>
          </p>

          <span className="image main">
            <img src={trident} alt="" />
          </span>
          <h3> Strategic Systems Programs Office </h3>
          <p>
            <u>Title</u>: Engineer, Reentry Branch (SP2804) <br />
            <u>Supervisor</u>: Hal Skoog <br />
            <u>Dates</u>: 09/2007 - 06/2009
            <br />
            <ul>
              <li>
                Engineer supporting Trident II D5 strategic missile warheads, the W-76 and W-88 reentry bodies.
              </li>
              <li>
                Developed and defended budget package for $5M environmental data collection system to better understand and quantify RB Stockpile-to-Target Sequence (STS) 
              </li>
            </ul>
          </p>

          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <span className="image main">
            <img src={AFITlogo} alt="" />
          </span>
          <p>
            <b>Ph.D. Nuclear Engineering</b>, Awarded September 2014 <br />
            <ul>
              <li>
                Dissertation topic:{' '}
                <em>
                <a href="https://apps.dtic.mil/docs/citations/ADA609702" target="_blank" rel="noopener noreferrer">Investigating
                  time and spectral dependence in neutron radiation environments for semiconductor damage studies</a>
                </em>
              </li>
              <li>
                <b>GPA</b>: 3.9 of a maximum 4.0 (72 Quarter Hours)
              </li>
              <li>
                <b>Relevant Coursework:</b> Solid State Physics, Quantum
                Mechanics, Electricity &amp; Magnetism, Computational Techniques
                in Radiation Transport, Electromagnetic Pulse Effects
              </li>
            </ul>
          </p>
          <p>
            <b>M.S. Nuclear Engineering</b>, Awarded March 2011 <br />
            <ul>
              <li>
                Thesis topic:{' '}
                <em>
                <a href="https://apps.dtic.mil/docs/citations/ADA538851" target="_blank" rel="noopener noreferrer">Characterization
                  of the energy spectrum at the Indiana University NREP Neutron Source</a>
                </em>
              </li>
              <li>
                <b>GPA</b>: 3.7 of a maximum 4.0 (36 Quarter Hours)
              </li>
              <li>
                <b>Relevant Coursework:</b> Physics of nuclear explosions,
                Prompt &amp; Delayed Nuclear Weapon Effects, Radiation Effects on
                Electronics (lab), Nuclear Fuel Cycle
              </li>
            </ul>
          </p>
          <span className="image main">
            <img src={PSUlogo} alt="" />
          </span>
          <p>
            <b>Dual Bachelor's in Nuclear &amp; Mechanical Engineering</b>, Awarded May 2007 <br />
            <ul>
              <li>
                <b>GPA</b>: 3.4 of a maximum 4.0 (182 Semester Hours)
              </li>
              <li>
                <b>Minor</b>: Military Sciences
              </li>
              <li>
                <b>Relevant Coursework:</b> Nuclear reactor design, health physics, Air Force ROTC leadership training
              </li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skillset</h2>
          <span className="image main">
            <img src={leadership} alt="" />
          </span>
          <h3>Job Related Training: </h3>
          <ul>
            <li>
              Leading from Within (Crane Division University) -- 2016
            </li>
            <li>
              DAWIA Science &amp; Technology Manager; Level III Certified -- Nov 2016
            </li>
            <li>
              Developing Emerging Leaders for Tomorrow's Challenges -- 2015
            </li>
            <li>
              DAWIA Engineering Level II Certified -- Nov 2014
            </li>
          </ul>
          <span className="image main">
            <img src={keyboard} alt="" />
          </span>
          <h3> Technical Competencies: </h3>
          <ul>
            <li>
              Data analysis tools: MATLAB, MS Excel
            </li>
            <li>
              Radiation Transport: MCNP, GEANT, SRIM
            </li>
            <li>
              OS: <FontAwesomeIcon name='windows' />
            </li>
            <li>
            </li>
          </ul>
          {close}
        </article>

        <article id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : '' }`}
          style={{ display: 'none' }}>
        <div>
        <span className="image main">
          <img src={contactMe} alt="" />
        </span>
        <form
          name="contact"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won't work with JavaScript disabled.</p>
          </noscript>

          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name: <strong>*</strong>
              <br />
              <input type="text" name="name" onChange={this.handleChange} placeholder="Please enter your full name."
                 required="required" data-error="Name is required."/>
            </label>
            <label>
              Your email: <strong>*</strong>
              <br />
              <input type="email" name="email" onChange={this.handleChange} placeholder="Please enter your email address."
                 required="required" data-error="Email is required."/>
            </label>
          </p>
          <p>
            <label for="form_need">Please specify your need: <strong>*</strong></label>
            <select id="form_need" name="need" onChange={this.handleChange} required="required" 
                placeholder="Click for options." data-error="Please specify your need.">
              <option value=""></option>
              <option value="Request contact information">Request contact information.</option>
              <option value="Request references">Request references.</option>
              <option value="Request both">Request contact information & references.</option>
              <option value="Just send a message to me">Just send me a message.</option>
              <option value="Other">Other</option>
            </select>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={this.handleChange} placeholder="Please enter any message you'd like me to see."/>
            </label>
          </p>
          <p><em>Note: Anything with a <strong>*</strong> is a required field.</em></p>
          <span>
          <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
          </span>
        </form>
      </div>
      </article>
    </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
