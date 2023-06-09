import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full absolute">
        <div>
          <Navbar />
        </div>
      </div>
    </main>
  )
}
