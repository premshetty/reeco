import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const InfoCard = () => {
    return (
        <div className='px-20 py-2 mt-5'>
            <div className='w-full rounded-xl border flex border-gray-300 p-5 h-[130px]'>
                <div className='w-[200px]   ml-5'>
                    <h3 className='text-sm font-semibold  text-gray-500 mb-2'>Supplier</h3>
                    <p className='text-base font-bold'>East coast fruits & vegetables</p>
                </div>
                <div className='h-full border border-gray-300 w-[1px] mx-6'></div>
                <div className='w-[150px]   ml-5'>
                    <h3 className='text-sm font-semibold whitespace-nowrap text-gray-500 mb-2'>Shipping Date</h3>
                    <p className='text-base font-bold'>Thu,Feb 10</p>
                </div>
                <div className='h-full border border-gray-300 w-[1px] mx-6'></div>
                <div className='w-[150px]   ml-5'>
                    <h3 className='text-sm font-semibold  text-gray-500 mb-2'>Total</h3>
                    <p className='text-base font-bold'>$ 15,028.3</p>
                </div>
                <div className='h-full border border-gray-300 w-[1px] mx-6'></div>
                <div className='w-[150px]   ml-5'>
                    <h3 className='text-sm font-semibold  text-gray-500 mb-2'>Category</h3>
                    <div className='grid grid-cols-4 gap-3 '>
                        <Icon color='#6b7280' icon="pepicons-pop:soft-drink-circle" />
                        <Icon color='#6b7280' icon="game-icons:wine-bottle" />
                        <Icon color='#6b7280' icon="streamline:interface-weather-snow-flake-winter-freeze-snow-freezing-ice-cold-weather-snowflake" />
                        <Icon color='#6b7280' icon="lucide:car-front" />

                        <Icon color='#6b7280' icon="pepicons-pop:soft-drink-circle" />
                        <Icon color='#6b7280' icon="game-icons:wine-bottle" />
                        <Icon color='#6b7280' icon="streamline:interface-weather-snow-flake-winter-freeze-snow-freezing-ice-cold-weather-snowflake" />
                        <Icon color='#6b7280' icon="lucide:car-front" />

                    </div>
                </div>
                <div className='h-full border border-gray-300 w-[1px] mx-6'></div>
                <div className='w-[150px]   ml-5'>
                    <h3 className='text-sm font-semibold  text-gray-500 mb-2'>Department</h3>
                    <p className='text-base font-bold'>300-444-678</p>
                </div>
                <div className='h-full border border-gray-300 w-[1px] mx-6'></div>
                <div className='w-[200px]   ml-5'>
                    <h3 className='text-sm font-semibold  text-gray-500 mb-2'>Status</h3>
                    <p className='text-base font-bold'>Awaiting Your Approval</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard