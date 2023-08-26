import React from 'react'
import ExpenseTracker from '../assets/portfolio/ExpenseTracker.png';
import MusicVerse from '../assets/portfolio/MusicVerse.png';
import ReactPortfolio from '../assets/portfolio/ReactPortfolio.png'


const Portfolio = () => {

  const projects =[
    {
      id:1,
      src:ExpenseTracker,
      href:"https://github.com/Mayankrsmk/Expense-Tracker",
      href1:"https://exquisite-biscochitos-02bb12.netlify.app/",
    },

    {
      id:2,
      src:MusicVerse,
      href:"https://github.com/Mayankrsmk/MusicVerse",
      href1:"https://fastidious-lily-661f66.netlify.app/",
    },

    {
      id:3,
      src:ReactPortfolio,
      href:"https://github.com/Mayankrsmk/React-Portfolio",
      href1:"",
    },
  ]

  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
        <div className=' pb-8'>
          <p className='font-bold text-4xl border-b-4  border-gray-500 inline'>Portfolio</p>
          <p className='py-6'>Check out my personal projects:-</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {projects.map(({id,src,href,href1})=>(
            <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
            <div className='flex items-center justify-center'>
             <a href={href1} target='_blank' rel='noreferrer'><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a> 
             <a href={href} target='_blank' rel='noreferrer'><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio