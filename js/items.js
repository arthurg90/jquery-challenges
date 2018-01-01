const cols = 4;
let items = $(".item");

let row = index => Math.floor(index / cols) + 1;
let col = index => (index % cols) + 1;

items.each((index, el) => {
    let item = $(el);

    item.addClass("col-" + col(index))
        .addClass("row-" + row(index));
});



// // Math.ceil() rounds up
// Math.ceil(2.3); // 3
// Math.ceil(2.7); // 3

// // Math.floor() round down
// Math.floor(2.3); // 2
// Math.floor(2.7); // 2

//photos whiteboard for working out the grid formulas