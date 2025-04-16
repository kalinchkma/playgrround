import { NavItem } from '@/types'
import Link from 'next/link'
import React from 'react'

const NavLink = (link: NavItem) => {
  return (
    <Link href={link.href ?? "#"} className='underline text-blue-900 dark:text-blue-400'>{link.title}</Link>
  )
}

export default NavLink