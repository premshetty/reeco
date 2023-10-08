import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

const BreadCrums = () => {
    return (
        <div className='shadow-lg px-20 py-2'>
            <div className='flex gap-4  items-center'>
                <Link href={'#'} className='text-sm'> Orders</Link>
                <Icon icon="uiw:right" height={12} />
                <p className='underline underline-offset-2 text-sm'>Order 32457ABC</p>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <h2 className='text-xl font-bold'>Order 32457ABC</h2>
                <div className='flex items-center gap-4 '>

                    <button className='h-9 rounded-full border-2 border-[#1e633f] 
              text-[#1e633f] px-6'>Back</button>
                    <button className='h-9 rounded-full bg-[#1e633f] 
              text-white px-6'>Approve Order</button>
                </div>

            </div>
        </div>
    )
}

export default BreadCrums