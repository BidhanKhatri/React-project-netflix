import React from 'react'
import Navbar from '../components/Navbar';
import HeroBanner from '../assets/hero_banner.jpg';
import HeroTitle from '../assets/hero_title.png';
import PlayIcon from '../assets/play_icon.png';
import InfoIcon from '../assets/info_icon.png';
import TitleCard from '../components/TitleCard';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>

      <Navbar />
      
      <div className='relative'>
        <img src={HeroBanner} alt='bg-image' className='banner-img' />

          <div className=' absolute pl-10 bottom-32 space-y-6 '>
            <img src={HeroTitle} alt='title' className='w-96 max-w-96 mb-10' />
            <p className='max-w-[700px] mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, unde. Totam, exercitationem. Beatae non, accusantium nulla asperiores magnam ab adipisci.</p>
            <div className=' flex space-x-2'>
              <button className='bg-white text-black font-bold flex items-center px-4 py-2 rounded '><img src={PlayIcon} className='w-6 mr-1' /> Play</button>
              <button className='bg-white/40 flex items-center px-4 py-2 rounded'><img src={InfoIcon} className='w-6 mr-1' /> More Info</button>
            </div>

          </div>
        
      </div>

      <div className='my-10 space-y-4'>
        <TitleCard />
        <TitleCard title={"Block-Buster Movies"} category={"popular"} />
        <TitleCard title={"Only On Netflix"} category={"top_rated"}/>
        <TitleCard title={"Up Coming"} category={"upcoming"} />
        <TitleCard title={"Top Choice For You"} />
      </div>

      <Footer />
            
    </div>
  )
}

export default Home
