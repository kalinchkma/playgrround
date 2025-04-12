import React from 'react'
import { Icons } from '../common/icons'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 py-5 text-center text-sm text-gray-100 w-full bg-zinc-800/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6">
        
        <div className="flex flex-col md:flex-row gap-12">
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

        {/* Right side info */}
        <div className="text-right text-gray-100 flex items-end">
          <p>© {new Date().getFullYear()} Kalin Chakma. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer