import Image from 'next/image'
import { Inter } from 'next/font/google'
import About from './aboutus/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden overflow-y-auto flex flex-col bg-teal-200'>
      <About />
    </div>
  )
}
