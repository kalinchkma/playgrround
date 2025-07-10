import React from 'react'
import NavLink from '../common/nav-link'

const ContributionCard = () => {
  return (
    <div className='flex flex-col gap-2 bg-zinc-50 dark:bg-zinc-800 px-4 py-2.5 rounded-md shadow border'>
        <h4 className='text-xl font-semibold'>Maze Solver</h4>
        <p className='text-sm line-clamp-3'>Solving simple maze with Artificial Intelligence. It describe simple ways to solve problem with traditional AI method</p>
        {/* categories */}
        <div className='flex flex-col gap-2'>
            <h5 className='text-sm font-bold'>Categories</h5>
            <div className='text-sm text-zinc-700 dark:text-zinc-300 flex flex-row flex-wrap gap-x-4 gap-y-2'>
                <span>Artificial Intellegence</span>
                <span>Searching</span>
                <span>Algorithm</span>
            </div>
        </div>
        {/* actions box */}
        <div className='flex flex-wrap gap-4'>
            <NavLink title='Play with it' href='/contributions/maze-solver'  />
            <NavLink title='Source' href='#' />
        </div>
    </div>
  )
}

export default ContributionCard