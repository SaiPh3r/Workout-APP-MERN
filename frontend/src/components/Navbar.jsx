import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/">Workout Buddy</Link>
        </h1>
      </div>
    </nav>
  )
}

export default Navbar
