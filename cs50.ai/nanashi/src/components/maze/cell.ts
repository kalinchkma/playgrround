export interface CellType {
    i: number;
    j: number;
    visited: boolean;
    walls: number[];
    draw: (ctx: CanvasRenderingContext2D) => void;
    size: number;
  };

export class Cell implements CellType {
    i: number;
    j: number;
    visited: boolean;
    walls: number[];
    size: number;

    constructor(i: number, j: number, size: number, walls: number[] = [1, 1, 1, 1]) {
        this.i = i;
        this.j = j;
        this.visited = false;
        this.walls = walls;
        this.size = size;
    }

    draw(ctx: CanvasRenderingContext2D):  void {
        const x = this.i * this.size;
        const y = this.j * this.size;

        ctx.strokeStyle = "#882ccd";
        ctx.lineWidth = 2;

        if (this.walls[0]) this.drawLine(ctx, x, y, x + this.size, y); // top
        if (this.walls[1]) this.drawLine(ctx, x + this.size, y, x + this.size, y+this.size)// right
        if (this.walls[2]) this.drawLine(ctx, x + this.size, y + this.size, x, y + this.size); // bottom
        if (this.walls[3]) this.drawLine(ctx, x, y + this.size, x, y); // left

    };

    drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
        ctx.beginPath();
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.fillStyle = "red"
        ctx.fillRect(x1, y1, x2, y2)
        ctx.stroke()
    }
}