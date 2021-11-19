let element = document.querySelector('#root');



// Creates a 16X16 grid. Will be dynamic later. 
for (let i = 0; i < 16; i++) {
    let grid = document.createElement('div');
    element.appendChild(grid);
    grid.classList.toggle('grid');
    for (let i = 0; i < 16; i++) {
        let child = document.createElement('div');
        child.classList.toggle('child');
        grid.appendChild(child);
    };
};

// Adds a event listener to see if the user hovers over one of the element
let child = document.querySelectorAll('.child');
console.log(child);
child.forEach((sketch) => {
    sketch.addEventListener("mouseover", function(event) {
        event.target.style['background-color'] = 'black';
    });
});

const clearAll = () => {
    child.forEach((sketch) => {
        sketch.style['background-color'] = 'white';
    })
}