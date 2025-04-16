import Maze from '@/components/maze/maze'
import React from 'react'

const MazeSolver = () => {
  return (
    <div className='container mx-auto px-2'>
        <div className='w-full pt-5 flex items-center justify-center'>
            <Maze rows={20} cols={20} />
        </div>
    </div>
  )
}

export default MazeSolver