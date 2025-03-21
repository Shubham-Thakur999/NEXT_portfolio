import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-15 font-Ovo'>I am an experienced Full-stack Web Developer from Gujarat,India with years of experience in the field.</p>

        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-6 my-10'>
        {serviceData.map(({icon,title,description,link},index)=>(
                            <div key={index} className='border border-gray-400 rounded-lg cursor-pointer 
                            px-8 py-12 hover:shadow-black hover:-translate-y-1 duration-500'>
                                <Image src={icon} alt='' className='w-10'/>
                                <h3 className='text-lg my-4 text-white-700 '>{title}</h3>
                                <p className='text-sm text-gray-680 leading-5'>{description}</p>
                                <a href={link}>Read more <Image src={assets.right_arrow} className='w-4' alt=''/></a>
                            </div>
                    ))}
        </div>
    </div>
  )
}

export default Services