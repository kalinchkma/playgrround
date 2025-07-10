"use client"

import React, { FC } from 'react'
import { Icons } from './icons'
import { useRouter } from 'next/navigation'

interface Props {
    title?: string
}

const PageHeaderWithBack: FC<Props> = ({title}) => {
    const router = useRouter();
  return (
    <div className='w-full border-b dark:bg-zinc-800/90 bg-gray-50'>
        <div className='container mx-auto px-4 flex flex-row items-center relative py-2'>
            <button onClick={() => {
                router.back();
            }} className='flex items-center justify-center gap-2 hover:text-blue-400 cursor-pointer'>
                <Icons.leftArrow />
                <span className='font-bold text-sm md:text-xl'>Back</span>
            </button>
            <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold  text-lg md:text-xl lg:text-2xl line-clamp-1'>{title}</h1>
        </div>
    </div>
  )
}

export default PageHeaderWithBack