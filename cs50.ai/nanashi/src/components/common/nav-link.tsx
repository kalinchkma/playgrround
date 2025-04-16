import { cn } from '@/lib/utils'
import { NavItem } from '@/types'
import Link from 'next/link'
import React from 'react'

interface Props extends NavItem {
  className?: string
}

const NavLink = (props: Props) => {
  return (
    <Link href={props.href ?? "#"} className={cn('underline hover:underline text-blue-900 dark:text-blue-400', props?.className)}>
      {props?.title}
    </Link>
  )
}

export default NavLink