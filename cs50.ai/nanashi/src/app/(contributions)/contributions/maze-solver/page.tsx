

// import Maze2d from '@/components/maze/maze2d'
import dynamic from 'next/dynamic'
import React from 'react'

const Maze2d = dynamic(() => import("@/components/maze/maze2d"))

const MazeSolver = () => {
  return (

    <Maze2d />
 
  )
}

export default MazeSolver