import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import InfoCard from '@/components/InfoCard'
import TableComponent from '@/components/TableComponent'
import BreadCrums from '@/components/BreadCrums'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <main className='text-black'>
        <BreadCrums />
        <InfoCard />
        <TableComponent />
      </main>
    </div>
  )
}
