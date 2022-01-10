// Author: Mitch Allen
// File: app.js

import { weightedCoinFlip } from './weighted-coinflip.js';

let canvas = document.getElementById("canvas");
const SCREEN_SIZE = 300;
const DIM = 10;
const CELL_SIZE = SCREEN_SIZE / DIM;
const WEIGHT = 0.1;
const BORDER = 1;
const NEON_PURPLE = "#B026FF";
// create an array filled with coin flip results
const arr = Array.from({ length: DIM * DIM }, () => weightedCoinFlip( WEIGHT ));
console.log(arr);
// draw canvas
let ctx = canvas.getContext('2d');
if (ctx) {
    // draw background
    ctx.clearRect(0, 0, SCREEN_SIZE, SCREEN_SIZE);
    ctx.fillStyle = "#444444";
    ctx.fillRect(0, 0, SCREEN_SIZE, SCREEN_SIZE);
    // draw cells
    let cursor = 0;
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            ctx.fillStyle = arr[cursor++] ? NEON_PURPLE : "black";
            ctx.fillRect(
                i * CELL_SIZE + BORDER,
                j * CELL_SIZE + BORDER,
                CELL_SIZE - BORDER * 2,
                CELL_SIZE - BORDER * 2
            );
        }
    }
}