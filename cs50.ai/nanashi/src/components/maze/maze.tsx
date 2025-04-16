'use client'

import { useEffect, useRef } from "react";

type CellType = {
  i: number;
  j: number;
  visited: boolean;
  walls: [boolean, boolean, boolean, boolean];
  draw: (ctx: CanvasRenderingContext2D) => void;
};

type MazeProps = {
  rows?: number;
  cols?: number;
};

const Maze = ({ rows = 20, cols = 20 }: MazeProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cellSize = 600 / cols;

  class Cell implements CellType {
    i: number;
    j: number;
    visited: boolean;
    walls: [boolean, boolean, boolean, boolean];

    constructor(i: number, j: number) {
      this.i = i;
      this.j = j;
      this.visited = false;
      this.walls = [true, true, true, true];
    }

    draw(ctx: CanvasRenderingContext2D) {
      const x = this.i * cellSize;
      const y = this.j * cellSize;

      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;

      if (this.walls[0]) drawLine(ctx, x, y, x + cellSize, y); // top
      if (this.walls[1]) drawLine(ctx, x + cellSize, y, x + cellSize, y + cellSize); // right
      if (this.walls[2]) drawLine(ctx, x + cellSize, y + cellSize, x, y + cellSize); // bottom
      if (this.walls[3]) drawLine(ctx, x, y + cellSize, x, y); // left
    }
  }

  const drawLine = (
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const index = (i: number, j: number): number => {
    if (i < 0 || j < 0 || i >= cols || j >= rows) return -1;
    return i + j * cols;
  };

  const removeWalls = (a: Cell, b: Cell) => {
    const x = a.i - b.i;
    const y = a.j - b.j;

    if (x === 1) {
      a.walls[3] = false;
      b.walls[1] = false;
    } else if (x === -1) {
      a.walls[1] = false;
      b.walls[3] = false;
    }

    if (y === 1) {
      a.walls[0] = false;
      b.walls[2] = false;
    } else if (y === -1) {
      a.walls[2] = false;
      b.walls[0] = false;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const grid: Cell[] = [];
    const stack: Cell[] = [];

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        grid.push(new Cell(i, j));
      }
    }

    let current: Cell = grid[0];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const cell of grid) {
        cell.draw(ctx);
      }

      current.visited = true;

      const neighbors: Cell[] = [];
      const top = grid[index(current.i, current.j - 1)];
      const right = grid[index(current.i + 1, current.j)];
      const bottom = grid[index(current.i, current.j + 1)];
      const left = grid[index(current.i - 1, current.j)];

      [top, right, bottom, left].forEach((neighbor) => {
        if (neighbor && !neighbor.visited) {
          neighbors.push(neighbor);
        }
      });

      if (neighbors.length > 0) {
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        stack.push(current);
        removeWalls(current, next);
        current = next;
      } else if (stack.length > 0) {
        current = stack.pop()!;
      }

      if (stack.length > 0) {
        requestAnimationFrame(draw);
      }
    };

    draw();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cols, rows]);

  return (
    <canvas
        className="w-[300px] h-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        ref={canvasRef}
        width={600}
        height={600}
        style={{ border: "2px solid white", backgroundColor: "black", }}
    />
  );
};

export default Maze;
