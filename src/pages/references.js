import React, { Component } from 'react'
import Reactable from 'reactable'
import referencesHeader from '../images/referencesHeader.png'

var Table = Reactable.Table,
  Thead = Reactable.Thead,
  Th = Reactable.Th

//======================
// Define our table's data
// Imagine using information acquired from
// a database, like list of users
//======================
var sgTeams = [
  {
    Name: 'Dr. Sarah Armstrong',
    Employer: 'NSWC Crane',
    Title: 'Customer Advocate, Ballistic Missile Defense Programs',
    Phone: '812-854-2676',
    Email: 'Sarah.Armstrong@navy.mil'
  },
  {
    Name: 'Dr. James Petrosky',
    Employer: 'U.S. Air Force Institute of Technology',
    Title: 'Professor of Nuclear Engineering',
    Phone: '937-255-3636 x4562',
    Email: 'James.Petrosky@afit.edu'
  },
  {
    Name: 'Maj. Mark Demianovich',
    Employer: 'U.S. Air Force',
    Title: 'Student, Air Command & Staff College',
    Phone: '254-931-0978',
    Email: 'Mark.Demianovich@gmail.com'
  },
  {
    Name: 'Mr. Steve Clark',
    Employer: 'Retired',
    Title: 'Former Chief Engineer, Rad Sciences at NSWC Crane',
    Phone: '812-296-1160',
    Email: ''
  },
  {
    Name: 'Mr. Eric Phillips',
    Employer: 'Navy, Strategic Systems Programs',
    Title: 'Deputy Technical Director, SPF',
    Phone: '202-531-7858',
    Email: 'Eric.Phillips@ssp.navy.mil'
  },
]

export default class SgTeamsList extends Component {
  //======================
  // Render the table with all of the
  // options included
  //======================
  renderTable() {
    return (
      <Table
        className="table"
        noDataText="No matching records found"
        itemsPerPage={10}
        currentPage={0}
        sortable={true}
        data={sgTeams}
      >
        <Thead>
          <Th column="Name">Reference's Name</Th>
          <Th column="Employer">Employer</Th>
          <Th column="Title">Title</Th>
          <Th column="Phone">Phone</Th>
          <Th column="Email">Email</Th>
        </Thead>
      </Table>
    )
  }

  //======================
  // Render our component
  //======================

  render() {
    return (
        <span className="image main">
        <a href="/">
            <img src={referencesHeader} alt="" height="250px"/>
        </a>
        {this.renderTable()}
        </span>
    )
  }
}
