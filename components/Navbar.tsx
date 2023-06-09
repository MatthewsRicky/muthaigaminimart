"use client";

import { AiOutlineSearch } from "react-icons/ai"

import { useRouter } from "next/router";

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({
  children
}) => {

  const router = useRouter()

  return (
    <div>
       <div className="search_icon">
        <AiOutlineSearch 
          size={26}
        />
      </div>
    </div>
   
  )
}

export default Navbar