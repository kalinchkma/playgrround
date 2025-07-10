/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Canvas } from '@react-three/fiber';
import Block from './block';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

// const getRandomHexColor = (): string => {
//   const hue = Math.floor(Math.random() * 360);        
//   const saturation = 60 + Math.random() * 20;         
//   const lightness = 75 + Math.random() * 15;       
//   return `hsl(${hue}, ${saturation.toFixed(0)}%, ${lightness.toFixed(0)}%)`;
// };

interface BlockType {
  position: [number, number, number],
  openColor: string,
  closeColor: string,
  open: boolean,
  agent?: boolean,
  goal?: boolean
}

const blockGenerator = (rows: number, cols: number, openColor: string, closeColor: string) => {
  const blocks: BlockType[][] = []
  let y = -1;
  for (let i = 0; i < rows; i++) {
    const row: BlockType[] = []
    let x = -1;
    for (let j = 0; j < cols; j++) {
      const isAgent = j === 0 && i === Math.floor(rows / 2);
      const isOpen = isAgent || Math.random() < 0.7;
      row.push({
        position: [x, y, 0],
        openColor: openColor,
        closeColor: closeColor,
        open: isOpen, 
        agent: isAgent,
        goal: i === rows - 1 && j === cols - 1
      })
      x += 0.2;
    }
    y += 0.2;
    blocks.push(row);
  }

  return blocks
}


const Maze2d = () => {
  const [mapTiles, setMapTiles] = useState<BlockType[][]>();
  const [openColor] = useState<string>("white");
  const [closeColor] = useState<string>("#f92aec");
  const [agentColor] = useState<string>("#3bfc25");
  const [goalColor] = useState<string>("#f4f409");
  // const [openColor] = useState<string>(getRandomHexColor());
  // const [closeColor] = useState<string>(getRandomHexColor());
  useEffect(() => {
    const newMapTiles = blockGenerator(15, 10, openColor, closeColor);
    setMapTiles(newMapTiles);
  },[])
  return (
    <div className='relative w-screen h-screen bg-cover bg-center flex items-center justify-center' style={{backgroundImage: "url('/bg.jpg')"}}>
      <Canvas className=' w-full h-full'>
          <OrbitControls enableZoom={true} />
          {
            mapTiles?.flat().map((block, i) => (
              <Block
               key={i} 
               position={block.position} 
               color={block?.goal ? goalColor : block?.agent ? 
                agentColor : block.open ? block.openColor : block.closeColor} />
            ))
          }
         
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 0, 0]} color="red" />
      </Canvas>
    </div>
  )
}

export default Maze2d