"use client"
import {motion} from "framer-motion";

import { personalInfo, siteConfig } from "@/config/site";
// import Link from "next/link"
// import { Icons } from "../common/icons"

import { Avatar, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import NavLink from "../common/nav-link";



function HomeSection() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center flex flex-col px-5 pb-5 max-w-md md:max-w-xl lg:max-w-3xl mx-auto gap-5 "
  >    
    <div className="flex flex-col items-center justify-center lg:flex-row w-full  gap-5">
        {/* logo container */}
        <div className="flex grow items-center justify-center relative">
            <Avatar className="w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
                <AvatarImage src="mrk.png" className="object-cover" />
            </Avatar>
            
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
            {/* description section */}
            <div className="text-zinc-800 dark:text-zinc-100">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">Hi, I&apos;m {personalInfo.name}</h1>
                <p className="text-lg max-w-xl text-center lg:text-left ">
                {personalInfo.description}
                </p>
            </div>
            
            {/* bio */}
            <div className="flex flex-col">
                <h5 className="text-left text-zinc-800 dark:text-zinc-100 text-xl font-bold">Bio</h5>
                <p className="max-w-xl text-left text-zinc-800 dark:text-zinc-100">
                    {personalInfo.bio}
                </p>
            </div>
        </div>
    </div>
    <div className="w-full flex flex-col lg:flex-row gap-5 text-zinc-800 dark:text-zinc-100">
        {/* Email */}
        <div className='flex flex-col items-start w-full'>
            <p className="font-semibold mb-1 text-xl">Email</p>
            <p className="text-zinc-800 font-mono dark:text-zinc-100">{personalInfo.email}</p>
        </div>
        {/* Socials */}
        <div className='flex flex-col items-start w-full'>
            <p className="font-semibold mb-1 text-xl">Connect me</p>
            <div className="flex gap-3 mt-1 items-center">
                {
                    personalInfo.social.map((s, idx) => (
                    
                        <a key={idx} href={s.href} target="_blank" className="hover:text-black dark:hover:text-zinc-300">
                            <s.icon className="w-5 h-5" />
                        </a> 
                    ))
                }
            </div>
        </div>
    </div>
    <Separator className="bg-zinc-400 dark:bg-zinc-700" />
    <div className="flex items-center space-x-4 text-sm h-5">
    {
        siteConfig.mainNav.map((l, idx) => (
            <>
            <NavLink key={idx} {...l} />
            {
                siteConfig.mainNav.length - 1 !== idx && 
                <Separator orientation="vertical" className="bg-zinc-400 dark:bg-zinc-700" />
            }
            </>
        ))
    }
    </div>
  </motion.div>
  )
}

export default HomeSection