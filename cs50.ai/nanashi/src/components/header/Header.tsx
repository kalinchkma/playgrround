'use client'

import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-zinc-800/10 backdrop-blur-md z-50">
        <Navbar />
    </header>
  )
}

export default Header