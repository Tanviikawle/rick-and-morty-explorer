import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='container text-center my-5'>Welcome to Ricky & Morty Explorer</h1>
      <div className='container text-center mb-5' style={{width: "60%"}}>
      <p>
      Rick and Morty Explorer This project is a React-based application that utilizes the Rick and Morty API to display character data. Users can browse through various characters from the popular show, view their details, and explore the world of Rick and Morty. The project showcases API integration and dynamic rendering, providing an interactive user experience. Built as a test project for Archstore.
      </p></div>
      <div className='container d-flex justify-content-center'>
      <div className='row' style={{width: "60%"}}>
        <div className='col-lg-6 col-12 mb-4 text-center'>
          <Link to='/characters' className='btn btn-success fs-4'>Go to Characters</Link>
        </div>
        <div className='col-lg-6 col-12 mb-4 text-center'>
          <Link to='/episodes' className='btn btn-success fs-4'>Go to Episodes</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
