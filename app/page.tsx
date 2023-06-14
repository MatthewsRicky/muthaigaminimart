import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import Hero  from '../components/Hero'
import StoreFeatureCard from '../components/StoreFeatureCard'
import FaqDisplay from '../components/FaqDisplay'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto;

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden overflow-y-auto flex flex-col justify-between h-full'>
     <Hero />
     <StoreFeatureCard />
     <FaqDisplay />
    </div>
  )
}
