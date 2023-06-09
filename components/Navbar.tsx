"use client";

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({
  children
}) => {
  return (
    <div>{children}</div>
  )
}

export default Navbar