function rect(ctx, x, y, w, h, fill, stroke, strokeWidth = 2) {
    ctx.beginPath();

    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    ctx.fillStyle = fill;
    ctx.rect(x,y,w,h);

    if (stroke) ctx.stroke();
    if (fill) ctx.fill();

    ctx.closePath();
}

function circle(ctx, cx, cy, r, fill, stroke, strokeWidth = 4) {
    ctx.beginPath();

    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    ctx.fillStyle = fill;
    ctx.arc(cx,cy,r,0,2*Math.PI);

    if (stroke) ctx.stroke();
    if (fill) ctx.fill();

    ctx.closePath();
}

function line(ctx, p1, p2, stroke = 'black', strokeWidth = 1) {
    ctx.beginPath();

    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    ctx.moveTo(p1.x,p1.y);
    ctx.lineTo(p2.x,p2.y);
    ctx.stroke();

    ctx.closePath();
}

export {
    rect,
    circle,
    line
}