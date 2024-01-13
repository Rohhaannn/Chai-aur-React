import React from 'react'
// import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Rohan-Shingade')
  //     .then(res =>res.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])

  //after writing 'githubInfoLoader' method below we commented above useEffect hook which stopped reeceving data below (data.followers). So we are importing a hook called useLoaderData an writing it here.

  const data = useLoaderData()
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      Github Name : {data.name} &nbsp;&nbsp;
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Profile Pic" width={280}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Rohan-Shingade')
  return response.json()
}
