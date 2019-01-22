import React from 'react'
import PropTypes from 'prop-types'

import trident from '../images/trident.jpg'
import integrity from '../images/integrity.jpg'
import craneLogo from '../images/craneLogo.jpg'
import AFITlogo from '../images/AFITlogo.jpg'
import PSUlogo from '../images/PSUlogo.png'
import leadership from '../images/leadership.jpg'
import keyboard from '../images/keyboard.jpg'

class Main extends React.Component {
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
            <img src={trident} alt="" />
          </span>
          <h3> Strategic Systems Programs Office </h3>
          <p>
            <u>Title</u>: Engineer, Reentry Branch (SP2804) <br />
            <u>Supervisor</u>: Hal Skoog, 202-433-5872 <br />
            <u>Dates</u>: 09/2007 - 06/2009
            <br />
            As entry-level engineer, attended numerous training courses to learn
            about packages, sub-systems, and overall system related to the
            Trident II D5 strategic missile. Interfaced with prime contractor on
            various projects.
          </p>

          <span className="image main">
            {' '}
            <img src={craneLogo} alt="" />{' '}
          </span>
          <h3> Naval Surface Warfare Center (NSWC) Crane </h3>
          <p>
            <u>Title</u>: Radiation Sciences Engineer <br />
            <u>Supervisor</u>: Matt Bedel, 812-854-2042 <br />
            <u>Dates</u>: 08/2014 - Present
            <br />
          </p>
          <p>
            <em>Research Engineer:</em> <br />
            Principal Investigator and lead researcher executing two Internal
            Research and Development projects for $350K+. Collaborated with
            multiple internal and external partners. Collected, analyzed, and
            presented findings.{' '}
          </p>
          <p>
            <em>
              Lead, Microelectronics Radiation Survivability Support to Missile
              Defense Agency{' '}
            </em>
            : <br />
            Principal Subject Matter Expert (SME) providing support to Missile
            Defense Agency (MDA) Redesigned Kill Vehicle (RKV) program. Ensured
            constant lines of communication with MDA RKV program, answered data
            calls, and managed proper resourcing. Provided cost estimation for
            radiation testing to extend RKV from Preliminary to Critical Design
            Review stage. Attended unclassified and classified teleconferences
            to provide survivability expertise. Proposed and executed plan to
            obtain local classified (SIPR) terminal access by interfacing with
            division funding, base physical security, and base communications
            security personnel.{' '}
          </p>
          <p>
            <em>Study Manager, Radiation Test Infrastructure</em>:<br />
            Coordinated investigation of NSWC Crane radiation test requirements
            compared against national radiation test infrastructure capacity.
            Result of study was initiation of building critical test facilities
            to support future radiation testing of strategic electronic
            components. Coordinated with strategic missile system programs in
            the U.S. Navy, U.S. Air Force, and MDA to learn program projections
            driving future radiation test needs. Solicited input from national
            radiation test facilities to plan expected facility capacity.
            Learned VBA in Excel to build software to compare demand and
            capacity, called the Crane Radiation Effects Test Infrastructure
            Planning (CRETIP) tool.{' '}
          </p>
          <p>
            <em> Chair, Strategic Systems Hardware Working Group (SSHWG) </em>:{' '}
            <br />
            Provided interface between NSWC Crane and strategic customers’
            research programs. Standardized WG process to review, score, and
            stratify yearly proposals.{' '}
          </p>
          <p>
            <em>Lead, Modeling and Simulation for Radiation Sciences</em>:{' '}
            <br />
            Revitalized high-performance scientific computing capability for
            NSWC Crane Flight Division, which included classified and
            unclassified, Linux-based Rocks (CentOS) cluster assets. Coordinated
            team of scientific, security, and system administration personnel to
            build unclassified system from 3 disconnected machines with 40 cores
            to an HPC cluster with more than 500 cores. Expanded user base every
            year.{' '}
          </p>
          <p>
            <em>
              Responsible Technical Authority, Radiation Survivability SME
            </em>
            : <br />
            Provided subject-matter expertise to assess new and emerging
            technologies as candidates for radiation-hardened applications.
            Wrote and coordinated revision of technical requirements and
            contract documentation for a $20M/year Basic Ordering Agreement with
            industrial partner for the sustainment of Strategic Radiation
            Hardened Microelectronics manufacturing capability. Effort was in
            support of OSD Title III critical infrastructure investment to
            ensure national ability to procure rad-hard microelectronics for
            defense applications. <br />
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
                Dissertation:{' '}
                <em>
                  Investigating time and spectral dependence in neutron
                  radiation environments for. semiconductor damage studies
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
                Thesis:{' '}
                <em>
                  Characterization of the Neutron Spectrum at the Indiana
                  University NREP Neutron Source
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
                <b>Relevant Coursework:</b> Nuclear reactor design, health physics
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
              Leading from Within (Crane Division University) -- 2017
            </li>
            <li>
              DAWIA Science &amp; Technology Manager; Level III Certified -- 2017
            </li>
            <li>
              DAWIA Engineering Level II Certified -- 2015
            </li>
          </ul>
          <span className="image main">
            <img src={keyboard} alt="" />
          </span>
          <h3> Computational Competencies: </h3>
          <ul>
            <li>
              Data analysis tools: MATLAB, Excel
            </li>
            <li>
              Radiation transport: MCNP, GEANT, SRIM
            </li>
            <li>
              OS: Windows, Mac, Linux (Ubuntu, CentOS, RHEL)
            </li>
            <li>
              Programming languages: Python, Fortran, Java
            </li>
          </ul>
          {close}
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
