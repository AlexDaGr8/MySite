import { circle, line, rect } from './context.js';

const container = document.getElementById('container');
const contBBox = () => container.getBoundingClientRect();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const twoPI = Math.PI * 2;
const toCoord = (r,theta) => ({
    x: r * Math.sin(theta) + width / 2,
    y: r * Math.cos(theta) + height / 2
})

let bbox = contBBox();
let width = bbox.width;
let height = bbox.height;

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

const dotRadius = 2;
const dotSpace = ((height - 40) / 2) / (42);

let rotation = -1;

const dots = Array.from(
    { length: 42 * 6 },
    (_,i) => {
        if (i % 42 === 0) rotation++;

        const ang = twoPI * (rotation / 6);
        const coords = toCoord((dotSpace * (i % 42)) + 10, ang);
        const hue = (360 / 42)

        return {
            rotation: rotation,
            x: coords.x,
            y: coords.y,
            r: dotRadius,
            color: 'black'
            // color: `hsl(${hue * i}, 100%, 50%)`
        }
    }
)

// window.onresize = () => {
//     ctx.clearRect(0,0,width,height);

//     console.log('bbox', bbox)

//     bbox = contBBox();
//     width = bbox.width;
//     height = bbox.height;

//     canvas.setAttribute('width', width);
//     canvas.setAttribute('height', height);

//     draw();
// }

draw();

function draw() {
    rect(ctx, 0,0,width, height, '#777', 'blue', 4);

    for (let dot of dots) {
        circle(ctx, dot.x, dot.y, dot.r, dot.color)
    }

    for (const i of Array.from({length: 6 }, (_,i) => i)) {
        let plusOne = i === 5 ? 0 : i + 1;
        let setOne = dots.filter(d => d.rotation === i).slice();
        let setTwo = dots.filter(d => d.rotation === plusOne).slice().reverse();
    
        console.log(plusOne)

        for (const idx in setOne) {
            setTimeout(() => {
                line(ctx,setOne[idx],setTwo[idx])
            }, 100 * idx * i)
        }
    }
}