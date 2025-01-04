import React from 'react'
import img1 from './assets/images/image-retro-pcs.jpg'
import img2 from './assets/images/image-top-laptops.jpg'
import img3 from './assets/images/image-gaming-growth.jpg'

const Card = () => {
  return (
    <section className='grid md:grid-cols-3 mb-6 gap-6'>
        <div className='h-[150px] flex gap-6'>
            <img src={img1} alt="card image" className='object-cover w-32 h-full' />

            <div className='flex flex-col justify-between'>
            <span className='text-4xl font-semibold text-primary'>01</span>
                <h1 className='font-semibold text-xl'>Reviving Retro PCs</h1>
                <p className='text-zinc-500 text-base'>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className='h-[150px] flex gap-6'>
            <img src={img2} alt="card image" className='object-cover w-32 h-full' />

            <div className='flex flex-col justify-between'>
            <span className='text-4xl font-semibold text-primary'>02</span>
                <h1 className='font-semibold text-xl'>Reviving Retro PCs</h1>
                <p className='text-zinc-500'>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className='h-[150px] flex gap-6'>
            <img src={img3} alt="card image" className='object-cover w-32 h-full' />

            <div className='flex flex-col justify-between'>
            <span className='text-4xl font-semibold text-primary'>03</span>
                <h1 className='font-semibold text-xl'>Reviving Retro PCs</h1>
                <p className='text-zinc-500'>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
    </section>
  )
}

export default Card