const button = document.querySelectorAll('button');
const car = document.querySelector('.car');
const cardwidth = document.querySelector('.card').offsetWidth;
// console.log(cardwidth)
// console.log(button)

button.forEach(btn=>{
    const clickBtn = () =>{
        if(btn.id === 'left'){
            car.scrollLeft += cardwidth
        }
        else{
            car.scrollLeft -= cardwidth
        }
    //     car.scrollLeft += 'left' ? +cardwidth : -cardwidth
    // console.log(btn.id)

    } 
    btn.addEventListener('click', clickBtn)
})

let isDragging = false, startX, startScrollLeft
const dragStart = (e) =>{
    isDragging = true;
    car.classList.add('dragging');
    // save the initial position of the cousor and movernment
    startX = e.pageX;
    startScrollLeft = car.scrollLeft;
    
}

const dragging = (e) => {
    if(!isDragging) return;
    car.scrollLeft = startScrollLeft - (e.pageX - startX)
    // car.scrollLeft = e.pageX
}

const stopdrag = () => {
    isDragging = false;
    car.classList.remove('dragging')
}

car.addEventListener('mousedown', dragStart);
car.addEventListener('mousemove', dragging);
car.addEventListener('mouseup', stopdrag)

// for(let i = 0; i < button.length; i++){
//     // console.log(button[i])
//     const clickBtn = () =>{
//     console.log('clicked')
//     }
//    button[i].addEventListener('click', clickBtn)
// }
