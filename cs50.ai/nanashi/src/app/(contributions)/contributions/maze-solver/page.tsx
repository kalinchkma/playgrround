

// import Maze2d from '@/components/maze/maze2d'
import dynamic from 'next/dynamic'
import React from 'react'

const Maze2d = dynamic(() => import("@/components/maze/maze2d"))

const MazeSolver = () => {
  return (
    <div className='container mx-auto px-2'>
        <div className='w-full pt-5 flex items-center justify-center'>
            {/* <Maze rows={10} cols={10} /> */}
            <Maze2d />
        </div>
    </div>
  )
}

export default MazeSolver