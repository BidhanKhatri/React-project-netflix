import React, { useEffect, useState } from 'react';
import CardsData from '../assets/cards/Cards_data';
import {Link} from 'react-router-dom';

export default function TitleCard({title,category}) {

  const[apiData, SetApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjg3ODg5N2NmMzdhOGUxMTdmNGJkNzBlNTE5NTkxOSIsInN1YiI6IjY2NGVkM2M4NTg3NzE3NjY3OTlhZmEyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hy-QNCZ5epTSV_Cz2FaAnn5yEQW8M3s3JnU6CouHHAY'
    }
  };
  
  

    useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}`, options)
    .then(response => response.json())
    .then(response => SetApiData(response.results))
    .catch(err => console.error(err));
    
    },[])

  return (
    <div className="overflow-hidden pl-10 py-4 space-y-4 ">
      <h1 className='font-bold text-2xl'>{title ? title : "Top shows of Netflix"}</h1>
      <div className="cardList flex gap-4 overflow-x-scroll ">
        {apiData.map((items, index) => {
          return <div key={index} className="flex flex-col space-y-4">
            <Link to={`player/${items.id}`} className="w-56">
              <img src={`https://image.tmdb.org/t/p/w500`+items.backdrop_path} className="w-full" />
            </Link>
            <p>{items.original_title}</p>
          </div>
        })}
      </div>
    </div>
  );
}
