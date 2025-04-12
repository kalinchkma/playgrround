"use client"
import {motion} from "framer-motion";

// import Link from "next/link"
// import { Icons } from "../common/icons"
import Image from "next/image"
import { Icons } from "../common/icons";

function HeroSection() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center flex flex-col w-full items-center justify-center"
  >    
    <div className="flex flex-row w-full items-center justify-center gap-5">
        {/* logo container */}
        <div className="flex items-center justify-center border p-1 rounded-full overflow-hidden w-80 h-80">
            <Image
                src={'/mrk.png'} 
                width={300} 
                height={300}
                alt="kalin chakma" 
                className="w-full h-full object-cover" 
            />
        </div>
        <div className="flex flex-col items-start justify-start">
            {/* description section */}
            <div className="text-zinc-100">
                <h1 className="text-4xl font-bold mb-4 text-left">Hello, I&apos;m Kalin Chakma</h1>
                <p className="text-lg max-w-xl mb-6 text-left">
                Software Engineer | Passionate about making electronic circuits into intelligence being
                </p>
            </div>
            {/* bio */}
            <div className="flex flex-col">
                <h5 className="text-left text-zinc-50 text-xl font-bold">Bio</h5>
                <p className="max-w-xl text-left text-zinc-100">
                I am just a human species with complex molecules and other energy or particle simulations stuck on a binary system in augmented reality
                </p>
            </div>
        </div>
    </div>
    <div className=" flex flex-col md:flex-row gap-12 text-zinc-100">
        {/* Email */}
        <div className='flex flex-col items-start'>
            <p className="font-semibold mb-1 text-xl">Email</p>
            <p>info@mysite.com</p>
        </div>

        {/* Socials */}
        <div className='flex flex-col items-start'>
            <p className="font-semibold mb-1 text-xl">Social</p>
            <div className="flex gap-3 mt-1">
                <a href="https://linkedin.com" target="_blank" className="hover:text-black">
                <Icons.gitHub className='w-5 h-5' />
                </a>
                <a href="https://twitter.com" target="_blank" className="hover:text-black">
                <Icons.x className='w-5 h-5'/>
                </a>
            </div>
        </div>
    </div>
  </motion.div>
  )
}

export default HeroSection