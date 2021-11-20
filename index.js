let element = document.querySelector('#root');
let radioCheck = document.getElementsByName('select');
let color = 'black';
let grid_ = 16;
let rainb = false;

// Creates a 16X16 grid. Will be dynamic later. 

const createGrid = () => {
    for (let i = 0; i < grid_; i++) {
        let grid = document.createElement('div');
        element.appendChild(grid);
        grid.classList.toggle('grid');
        for (let i = 0; i < grid_; i++) {
            let child = document.createElement('div');
            child.classList.toggle('child');
            grid.appendChild(child);
        };
    };
};

// Adds a event listener to see if the user hovers over one of the element

const bgChange = () => {
    let child = document.querySelectorAll('.child');
    child.forEach((sketch) => {
        sketch.addEventListener("mouseover", function(event) {
            event.target.style['background-color'] = color;
        });
    });
};

const removeInterval = () => {
    if (window.myInterval != undefined && window.myInterval != 'undefined') {
        window.clearInterval(window.myInterval);
    }
};

removeInterval();
createGrid();
bgChange();

const removeGrid = () => {
    let grid = document.querySelectorAll('.grid');
    let child = document.querySelectorAll('.child');

    grid.forEach((element) => element.remove());
    child.forEach((element) => element.remove())
}

const changeGrid = (p) => {
    removeGrid();
    grid_ = p;
    createGrid();
    bgChange();
    console.log()
}



function random_rgba() {
    removeInterval()
    var o = Math.round,
        r = Math.random,
        s = 255;
    color = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

const rainbow = () => {
    window.myInterval = setInterval(
        function() {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            color = "#" + randomColor;
        }, 1000);
}





const clearAll = () => {
    let child = document.querySelectorAll('.child');
    child.forEach((sketch) => {
        sketch.style['background-color'] = '#f8eedb'
    })
};

let color_picker = document.getElementById("colorssss");
color_picker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    console.log(event.target.value)
    color = event.target.value;
};