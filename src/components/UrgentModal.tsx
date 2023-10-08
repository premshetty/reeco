import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Status } from './TableRow'



type Props = {
    open: boolean
    setOpen: (open: boolean) => void
    setStatus: (status: Status) => void
}
const UrgentModal = ({ open, setOpen, setStatus }: Props) => {
    return (
        <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${open ? 'block' : 'hidden'}`} id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left 
                overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle 
              " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className='h-[200px] pt-10 px-10'>
                        <div className='w-full flex justify-between'>

                            <h2 className='text-xl font-bold'>Missing Product</h2>
                            <Icon
                                onClick={() => setOpen(false)}
                                className='hover:text-red-500 cursor-pointer' icon='ph:x-light' height={24} />
                        </div>
                        <p className='my-4'>Is {`'Chicken Breast Fillets, Boneless...'`} urgent?</p>
                        <div className='flex w-full justify-end mt-8 gap-8'>
                            <button onClick={() => {
                                setOpen(false)
                                setStatus('Missing')
                            }} className='text-xl font-bold mr-6'>No</button>
                            <button onClick={() => {
                                setOpen(false)
                                setStatus('Missing-urgent')
                            }} className='text-xl font-bold '>yes</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UrgentModal