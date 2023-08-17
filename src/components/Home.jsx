import React from 'react'
import HeroImage from '../assets/heroImage.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex  h-full flex-col items-center justify-center px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a MERN Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>I have a good experience as a web developer.
            I love to work on web applications using technologies like 
            React Js, Tailwind CSS, Node Js and Mongo DB.
          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='hover:rotate-90 duration-200'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt='my profile' className=' rounded-2xl mx-auto w-2/3 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Home