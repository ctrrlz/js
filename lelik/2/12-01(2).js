let moveEl = document.querySelector('.move');


document.body.addEventListener('keydown', moveBlock);
document.body.addEventListener('keyup', moveBlock);

let coordX = 0;
let coordY = 0;

function moveBlock(){
    console.log(event.code);
    switch(event.code){
        case 'ArrowRight':
            coordX += 10;
        break;
        case 'ArrowLeft':
            coordX -= 10;
        break;
        case 'ArrowUp':
            coordY -= 10;
        break;
        case 'ArrowDown':
            coordY += 10;
        break;
    }
    moveEl.style.left = `${coordX}px`;
    moveEl.style.top = `${coordY}px`;
}

