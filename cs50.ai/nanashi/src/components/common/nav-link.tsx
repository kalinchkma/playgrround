import { NavItem } from '@/types'
import Link from 'next/link'
import React from 'react'

const NavLink = (link: NavItem) => {
  return (
    <Link href={link.href ?? "#"} className='text-zinc-100'>{link.title}</Link>
  )
}

export default NavLink