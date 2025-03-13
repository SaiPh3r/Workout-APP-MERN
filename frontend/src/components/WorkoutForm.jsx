import React, { useState } from 'react'

const WorkoutForm = () => {
    const [title,setTitle] = useState("")
    const [reps,setReps] = useState('')
    const[load,setLoad] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const workout = {title,reps,load}

        const response = await fetch("/api/workouts",{
            method:"POST",
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();

        if(!response.ok){
            setError(data.error)
        }
        if(response.ok){
            setError(null)
            setTitle("")
            setReps('')
            setLoad("")
            console.log('new workout added ',data)
        }

    }


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-lg my-4">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Add Title</h3>
        <input 
          type='text' 
          value={title} 
          onChange={(e)=>{setTitle(e.target.value)}} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Exercise name"
        ></input>
        <input 
          type='number' 
          value={reps} 
          onChange={(e)=>{setReps(e.target.value)}} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Number of reps"
        ></input>
        <input 
          type='number' 
          value={load} 
          onChange={(e)=>{setLoad(e.target.value)}} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Load in kg"
        ></input>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg text-sm font-medium transition duration-200">Submit</button>
        {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">{error}</div>}
    </form>
  )
}

export default WorkoutForm