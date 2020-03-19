// Your code goes here!
// Select color input

var color = "";

/* JavaScript function to create the grid when the submit button is clicked.
 * It takes in whole number height and whole number width of the grid from the
 * html form and creates the grid on the table canvas element in html page
 * based on the users input.
 */

var sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    var heightElement = document.getElementById("inputHeight");
    var widthElement = document.getElementById("inputWidth");
    var height = heightElement.value;
    var width = widthElement.value;
    makeGrid(height, width);
})
// Table grid creation code :
function makeGrid(h, w) {
    var x = 1;
    var t = "table" + x;
    var row = document.getElementById(t);
    while (row !== null) {
        row.remove();
        x = ++x;
        t = "table" + x;
        row = document.getElementById(t);
    }

// Each cell should have an event listener that sets the background color of
// the cell to the selected color.

    var table = document.querySelector("#pixelCanvas");
    for (var i = 1; i <= h; i++) {
        table.insertAdjacentHTML("afterbegin","<tr id=table" + i + "></tr>");
        var line = document.querySelector("#table" + i);
        for (var j = 1; j <= w; j++) {
            line.insertAdjacentHTML("afterbegin","<td id=cell" + i+j+"></td>");
        }
    }

    document.getElementById("pixelCanvas").addEventListener("click", function ()
    {
        var colorElement = document.getElementById("colorPicker");
        var color = colorElement.value;
        var click = event.target.id;
        var elem = document.getElementById(click);
        var attrib = elem.hasAttribute("style");
        if (attrib === true) {
            elem.removeAttribute("style");
        } else {
            elem.style.backgroundColor = color;
        }
    })
}
// special thanks to examples and walk throughs on github, Code Pen, stack overflow, and code.sololearn.
