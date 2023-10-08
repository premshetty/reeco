import React, { useState, useEffect } from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { Product, selectProducts, setProducts } from '@/redux/productSlice';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    rowId: number;
};

const EditModal = ({
    open,
    setOpen,
    rowId,
}: Props) => {
    const dispatch = useDispatch();
    const productStore = useSelector(selectProducts);
    const [editProcut, seteditProcut] = useState<Product>({
        brand: '',
        price: '',
        product_name: '',
        quantity: '',
        total: '',
        id: 0,
        status: 'none'
    });

    console.log(editProcut)
    const incrementQuantity = () => {
        if (editProcut?.quantity) {
            seteditProcut({
                ...editProcut,
                quantity: `${Number(editProcut?.quantity) + 1}`,
            });
        }

    };

    const decrementQuantity = () => {
        if (editProcut?.quantity && Number(editProcut?.quantity) > 1) {
            seteditProcut({
                ...editProcut,
                quantity: `${Number(editProcut?.quantity) - 1}`,
            });
        }
    };
    useEffect(() => {
        const filteredProduct = productStore.find((product) => product.id === rowId) ?? editProcut;
        seteditProcut(filteredProduct);
    }, [productStore, rowId]);

    const updateProductInStore = () => {
        if (editProcut) {
            const updatedProducts = productStore.map((product) =>
                product.id === rowId ? { ...product, ...editProcut } : product
            );
            console.log(updatedProducts)
            dispatch(setProducts(updatedProducts));
            setOpen(false);
        }
    };



    return (
        <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${open ? 'block' : 'hidden'}`} id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left 
                overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle
                 sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className='min-h-[200px] w-full py-10 px-10 relative'>
                        <Icon
                            onClick={() => setOpen(false)}
                            className='hover:text-red-500 cursor-pointer absolute top-5 right-5' icon='ph:x-light' height={24} />
                        <h2 className='text-2xl text-black font-bold whitespace-nowrap text-ellipsis overflow-hidden w-[580px]'>
                            {editProcut?.product_name}
                        </h2>
                        <p className='text-lg'>{editProcut?.brand}</p>
                        <div className='flex'>
                            <Image alt={editProcut?.product_name} src={'/Avocado.jpg'}
                                height={200} width={200} />
                            <div className='flex ml-5 mt-5 flex-col gap-5 flex-grow w-full'>
                                <div className='grid grid-cols-2 w-full items-center'>
                                    <p>Price $</p>
                                    <div className='flex items-center gap-2'>
                                        <input className='border  border-gray-300 rounded-lg p-2 w-32'
                                            type='text' value={editProcut?.price}
                                            onChange={(e) => {
                                                if (editProcut?.price) {
                                                    seteditProcut({
                                                        ...editProcut,
                                                        price: e.target.value,
                                                    });
                                                }


                                            }}
                                        />
                                        <p>/6.1LB</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 w-full items-center">
                                    <p>Quantity</p>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={decrementQuantity}
                                            className="h-8 min-w-8 w-8 bg-green-500 text-white rounded-full"
                                        >
                                            -
                                        </button>
                                        <input
                                            className="border border-gray-300 rounded-lg p-2 w-20"
                                            type="text"
                                            onChange={(e) => {
                                                if (editProcut?.quantity) {
                                                    seteditProcut({
                                                        ...editProcut,
                                                        quantity: e.target.value,
                                                    });
                                                }


                                            }}
                                            placeholder={editProcut?.quantity}
                                        />
                                        <button onClick={incrementQuantity} className="h-8 min-w-8 w-8 bg-green-500 text-white rounded-full">
                                            +
                                        </button>
                                        <p>/6.1LB</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 w-full items-center'>
                                    <p>Total</p>
                                    <div className='flex items-center gap-2'>
                                        <input className='border  border-gray-300 rounded-lg p-2 w-32' type='text'
                                            value={editProcut?.total}
                                            onChange={(e) => {
                                                if (editProcut?.total) {
                                                    seteditProcut({
                                                        ...editProcut,
                                                        total: e.target.value,
                                                    });
                                                }


                                            }}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>

                            <h2 className='text-xl text-black font-bold whitespace-nowrap text-ellipsis overflow-hidden '>
                                Choose reason
                            </h2>
                            <p>(Optional)</p>
                        </div>
                        <div className='flex items-center gap-2 mt-3'>

                            <button

                                onClick={() => {
                                    if (editProcut?.status) {
                                        seteditProcut({
                                            ...editProcut,
                                            status: 'Missing',
                                        });
                                    }


                                }
                                }
                                className={`${editProcut?.status === 'Missing' ? 'bg-red-500 text-white' : ''} border px-4 py-2  border-gray-300 rounded-full`}>
                                Missing Product
                            </button>
                            <button
                                onClick={() => {
                                    if (editProcut?.status) {
                                        seteditProcut({
                                            ...editProcut,
                                            status: 'Quality Updated',
                                        });
                                    }


                                }
                                }
                                className={`${editProcut?.status === 'Quality Updated' ? 'bg-red-500 text-white' : ''} border px-4 py-2  border-gray-300 rounded-full`}>
                                Quality is not the same
                            </button>
                            <button
                                onClick={() => {
                                    if (editProcut?.status) {
                                        seteditProcut({
                                            ...editProcut,
                                            status: 'Price Updated',
                                        });
                                    }


                                }
                                }
                                className={`${editProcut?.status === 'Price Updated' ? 'bg-red-500 text-white' : ''} border px-4 py-2  border-gray-300 rounded-full`}>
                                Price is not the same
                            </button>
                            <button className='border px-4 py-2  border-gray-300 rounded-full'>
                                Other
                            </button>
                        </div>
                        <div className='flex justify-end w-full gap-4 mt-10'>
                            <button onClick={() => setOpen(false)} className='text-green-800 font-bold'>
                                Cancel
                            </button>
                            <button onClick={updateProductInStore} className='bg-green-800 text-white px-6 py-2 rounded-full font-bold'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal