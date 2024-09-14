import React, { useEffect, useState } from 'react'
import BackArrow from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

function Player() {

  const [apiData,SetApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  }) 

  const { id } = useParams();

  const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjg3ODg5N2NmMzdhOGUxMTdmNGJkNzBlNTE5NTkxOSIsInN1YiI6IjY2NGVkM2M4NTg3NzE3NjY3OTlhZmEyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hy-QNCZ5epTSV_Cz2FaAnn5yEQW8M3s3JnU6CouHHAY'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
    .then(response => response.json())
    .then(response => SetApiData(response.results[0]))
    .catch(err => console.error(err));
    
  },[])
  
  


  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      <img src={BackArrow} className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer' onClick={()=>{navigate("/")}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen className='rounded'></iframe>
      <div className='w-[90%] flex justify-between items-center'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
