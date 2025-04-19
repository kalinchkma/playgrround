import React, { FC } from 'react'

interface Props {
    position?: [number, number, number];
    color?: string
}

const Block: FC<Props> = ({position, color}) => {
  return (
    <mesh position={position ?? [0, 0, 0]} rotation={[0, 0, 0]} >
        <boxGeometry args={[0.2, 0.2, 0.2]}  />
        <meshStandardMaterial color={color ?? "#f1f1f1"}  />
    </mesh>
  )
}

export default Block