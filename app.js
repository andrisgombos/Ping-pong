const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


const canvasHeight = 500;
const canvasWidth = 600;
const radius = 10;
const paddleWidth = 20;
const paddleHeight = 50;

let paddleX = canvasHeight / 2
let paddleZ = canvasHeight / 2
let x = 40;
let y = 40;
const speed = 5;
let directionX = +1;
let directionY = +1;
let isMovingX = true;

const fillingBackground = function() {
    context.fillStyle = 'black';
    context.fillRect(0,0,canvasWidth,canvasHeight);
}

let renderBall = function(x, y) {
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI, false);
    context.fillStyle = "yellow";
    context.fill();

}

let renderLeftPaddle = function(y) {
    const padding = 15;
    context.fillStyle = "white";
    context.fillRect(padding, y, paddleWidth, paddleHeight);

    
}
    
let renderRightPaddle = function(y) {
    const postionX = canvasWidth - 30;
    context.fillStyle = "white";
    context.fillRect(postionX, y, paddleWidth, paddleHeight)

}


setInterval(() => {
    fillingBackground();
    renderBall(x,y);
    renderLeftPaddle(paddleX);
    renderRightPaddle(paddleZ);

    x += directionX * speed;
    y += directionY * speed;

    if ((x + radius) == canvasWidth - 40 && ((x + radius)) == paddleHeight) {
        directionX = -1 * directionX; 
    }
    if ((x + radius) == canvasWidth || (x - radius) == 0)  {
        directionX = -1 * directionX; 
    };
    if ((y + radius) == canvasHeight || (y - radius) == 0) {
        directionY = -1 * directionY;
    };
    
}, 17);




document.addEventListener('keypress', (keybind) => {
    if (keybind.key === "l") {
        paddleX += 15;
        if (paddleX + paddleHeight > canvasHeight) {
            paddleX = canvasHeight - paddleHeight
        }
    }
    else if (keybind.key === "o") {
        paddleX -= 15;
        if (paddleX < 0) {
            paddleX = 0
        }
    }
} )

document.addEventListener('keypress', (keybind) => {
    if (keybind.key === "5") {
        paddleZ += 15;
        if (paddleZ + paddleHeight > canvasHeight) {
            paddleZ = canvasHeight - paddleHeight
        }
    }
    else if (keybind.key === "8") {
        paddleZ -= 15;
        if (paddleZ < 0) {
            paddleZ = 0
        }
    }
} )