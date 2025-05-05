import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

function DesignType({ selectedDesignType }) {
    const Designs=[
        {
            name:'Modern',
            image:'/modern.jpg'
        },
        {
            name:'Classic',
            image:'/classic.jpg'
        },
        {
            name:'Minimalist',
            image:'/Minimalist.jpg'
        },
        {
            name:'Traditional',
            image:'/Traditional.png'
            
        },
        {
            name:'Rustic',
            image:'/Rustic.jpg'
            
        },
        {
            name:'Creative Space',
            image:'/creative.jpg'
            
        },
        {
            name:'Compact',
            image:'/compact.jpg'
            
        },
        {
            name:'High Tech',
            image:'/hitech.jpg'
            
        },
    ]

    const [selectedOption,setSelectedOption]=useState('');
    
    return (
        <div className='mt-5'>
            <label className='text-white'>Select Your Interior Design Type</label>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-5'>
                {Designs.map((design,index)=>(
                    <div className='mt-2 flex flex-col items-center' key={index} onClick={()=>{setSelectedOption(design.name);selectedDesignType(design.name)}} > 
                        <Image 
                            src={design.image} 
                            width={100} 
                            height={100} 
                            alt='img' 
                            className={`h-[100px] w-[100px] rounded-lg mb-2  
                            hover:scale-105 transition-all 
                            cursor-pointer   border-4 hover:border-yellow-400 
                            ${design.name === selectedOption && 'rounded-md p-1'}`}
                        />
                        <h2 className="text-white text-center">{design.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesignType
