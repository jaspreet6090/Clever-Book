import React from 'react'

const Cta = () => {
  return (
    <section className='bg-slate-900 py-20 px-5'>
      <div className='container px-3 sm:mx-auto  bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl '>
        <div className='flex flex-col items-center justify-center py-16 gap-10'>
          <h1 className='text-3xl sm:text-5xl font-bold text-center text-white'>
          You can grow faster than you think!
          </h1>
          <p className='mt-4 text-md sm:text-lg text-center text-white'>
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
          </p>
          <button className='mt-8 px-8 py-3 text-lg font-semibold text-white bg-slate-900 rounded-lg hover:bg-purple-600'>
            Get Started
          </button>
        </div>
      </div>  
    
    </section>
  )
}

export default Cta
