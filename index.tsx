
/*     function draw() {
        let text = '{ "fruits" : [' +
'{ "name":"Strawberry" , "quantity":"15", "color":"red" },' +
'{ "name":"Peach" , "quantity":"10", "color":"orange" },'
'{ "name":"Banana" , "quantity":"25", "color":"yellow" },'
'{ "name":"Pear" , "quantity":"10", "color":"green" },'
'{ "name":"Grape" , "quantity":"20", "color":"purple"  } ]}'; */
anychart.onDocumentReady(function() {
    var data = {
    header: ["Name", "Quantity"],
    rows: [
      ["Strawberry", 25],
      ["Peach", 10],
      ["Banana", 25],
      ["Pear", 10],
      ["Grape", 20],
  ]}

var chart = anychart.bar();
chart.data(data);
chart.container("container");
});
       /*  chart.draw();
    var a = JSON.parse(text);


        let canvas = document.getElementById("mycanvas");
        let context = canvas.getContext("2d");
        //this creates the background of the canvas
        context.fillStyle = "cyan";
        context.fillRect(0, 0, canvas.width, canvas.height);
        //draws the the square section of the home
        for (var i = 0; i < a.length; i++) {
        context.fillStyle = a.fruits.color[i];
        context.beginPath();
        context.moveTo(500, 250);
        context.lineTo(500, 250);
        context.lineTo(500, 450);
        context.lineTo(300, 450);
        context.fill();
   
    }

document.addEventListener('DOMContentLoaded', draw); */