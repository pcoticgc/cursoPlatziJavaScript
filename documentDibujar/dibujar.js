var canvas = document.getElementById("dibujito");
var lienzo = canvas.getContext("2d");

//Linea 1
lienzo.beginPath();//Empezar trazo
lienzo.strokeStyle = "red";//Color de la linea
lienzo.moveTo(1, 0);//Coordenada del canvas en donde empezara la linea
lienzo.lineTo(1, 299);//Coordenada del canvas en donde acabara la linea
lienzo.stroke();//Asigna el estilo a la linea
lienzo.closePath();//Acaba trazo

//Linea 2
lienzo.beginPath();//Empezar trazo
lienzo.strokeStyle = "blue";//Color de la linea
lienzo.moveTo(0,299);//Coordenada del canvas en donde empezara la linea
lienzo.lineTo(299, 299);//Coordenada del canvas en donde acabara la linea
lienzo.stroke();//Asigna el estilo a la linea
lienzo.closePath();//Acaba trazo
//Linea 3
lienzo.beginPath();//Empezar trazo
lienzo.strokeStyle = "red";//Color de la linea
lienzo.moveTo(299, 299);//Coordenada del canvas en donde empezara la linea
lienzo.lineTo(0, 0);//Coordenada del canvas en donde acabara la linea
lienzo.stroke();//Asigna el estilo a la linea
lienzo.closePath();//Acaba trazo
