"use client"
import {motion} from "framer-motion";

import { personalInfo } from "@/config/site";
// import Link from "next/link"
// import { Icons } from "../common/icons"

import { Avatar, AvatarImage } from "../ui/avatar";


function HomeSection() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center  w-full md:max-w-3xl mx-auto "
  >    
    <div className="flex flex-row w-full items-center justify-center gap-5">
        {/* logo container */}
        <div className="flex grow">
            <Avatar className="w-[350px] h-[350px]">
                <AvatarImage src="mrk.png" />
            </Avatar>
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
            {/* description section */}
            <div className="text-zinc-100">
                <h1 className="text-4xl font-bold mb-4 text-left">Hello, I&apos;m {personalInfo.name}</h1>
                <p className="text-lg max-w-xl text-left">
                {personalInfo.description}
                </p>
            </div>
            {/* bio */}
            <div className="flex flex-col">
                <h5 className="text-left text-zinc-50 text-xl font-bold">Bio</h5>
                <p className="max-w-xl text-left text-zinc-100">
                    {personalInfo.bio}
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-12 text-zinc-100">
                {/* Email */}
                <div className='flex flex-col items-start'>
                    <p className="font-semibold mb-1 text-xl">Email</p>
                    <p>{personalInfo.email}</p>
                </div>
                {/* Socials */}
                <div className='flex flex-col items-start'>
                    <p className="font-semibold mb-1 text-xl">Connect me</p>
                    <div className="flex gap-3 mt-1 items-center">
                        {/* <a href="https://linkedin.com" target="_blank" className="hover:text-black">
                        <Icons.gitHub className='w-6 h-6' />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="hover:text-black">
                        <Icons.x className='w-5 h-5'/>
                        </a> */}
                        {
                            personalInfo.social.map((s, idx) => (
                                <a key={idx} href={s.href} target="_blank" className="hover:text-black">
                                    <s.icon className="w-5 h-5" />
                                {/* <Icons.x className='w-5 h-5'/> */}
                                </a> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

  </motion.div>
  )
}

export default HomeSection