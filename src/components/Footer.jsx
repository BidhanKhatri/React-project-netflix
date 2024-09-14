import React from 'react'
import FbIcon from '../assets/facebook_icon.png'
import InstaIcon from '../assets/instagram_icon.png'
import TwitterIcon from '../assets/twitter_icon.png'
import YtIcon from '../assets/youtube_icon.png'

export default function Footer() {
  return (
    <footer className='p-10 flex itens-center justify-center gap-12'>

      <div className=' flex flex-col space-y-6 '>
        <div className='flex space-x-4'>
        <img className='w-6' src={FbIcon} alt='' />
        <img className='w-6' src={InstaIcon} alt='' />
        <img className='w-6' src={TwitterIcon} alt='' />
        <img className='w-6' src={YtIcon} alt='' />
        </div>
        <ul className='space-y-2'>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
        </ul>
        <p className='text-white/60'>@ Copyright bidflix - Bidhan</p>
      </div>

      <div>
      <ul className='space-y-2 mt-12'>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
        </ul>
      </div>

      <div>
      <ul className='space-y-2 mt-12'>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
        </ul>
      </div>

      <div>
      <ul className='space-y-2 mt-12'>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
            <li>Audio Description</li>
        </ul>
      </div>

    </footer>
  )
}
