var rand  = function (min,max){
	k = Math.floor(Math.random() * (max - min) + min);
	return (Math.round( k / s ) * s);}
	var newApple = function () {
	a = [rand(0, innerWidth),rand(0, innerHeight)];}
	var newSnake = function () {
	sBody1 = [{x: 0,y: 0}];}
	
	var myScore = 0 
	var graphics = document.getElementById("graphics")
	var g = graphics.getContext("2d")
	var sBody1 = null
	var direction1 = 1 //Направление 1 змейки 1 - право, 2 - низ, 3 - лево, 4 - вверх//
	var a = null
	var s = 30; newSnake(); newApple(); // s - Размер змейки//
	
	
	graphics.width = innerWidth;
	graphics.height = innerHeight;
	
	setInterval (function(){
		if (a[0] + s >= graphics.width|| a[1] + s >= graphics.height) newApple();
		g.clearRect(0,0, graphics.width, graphics.height);
		g.fillStyle = "#CC1111";
		g.fillRect( ...a, s, s);
		g.fillStyle = "green";
		
	sBody1.forEach(function(elem1, i1){
		if (elem1.x == sBody1[sBody1.length - 1].x && elem1.y ==
		sBody1[sBody1.length - 1].y && i1 < sBody1.length - 1)
		sBody1.splice(0,sBody1.length - 1),
		sBody1 = [{x:0,y:0}],
		myScore = 0,
		document.getElementById("player1").innerHTML = myScore,
		direction1 = 1;
	});
	
	var h1 = sBody1[0], head1 = {x: h1.x,y: h1.y}, tail1 = sBody1[sBody1.length - 1];
	if (direction1 == 1) head1.x = tail1.x + s,head1.y = Math.round(tail1.y / s) * s;
	if (direction1 == 2) head1.y = tail1.y + s,head1.x = Math.round(tail1.x / s) * s;
	if (direction1 == 3) head1.x = tail1.x - s,head1.y = Math.round(tail1.y / s) * s;
	if (direction1 == 4) head1.y = tail1.y - s,head1.x = Math.round(tail1.x / s) * s;
	sBody1.push(head1);
	sBody1.splice(0,1);
	
	sBody1.forEach(function(pob1, i1){
	if (direction1 == 1)
	if (pob1.x > Math.round(graphics.width / s) * s-10) pob1.x = 0;
	if (direction1 == 2)
	if (pob1.y > Math.round(graphics.height / s) * s-10) pob1.y = 0;
	if (direction1 == 3)
	if (pob1.x < 0) pob1.x = Math.round(graphics.width /s) *s;
	if (direction1 == 4)
	if (pob1.y < 0) pob1.y = Math.round(graphics.height /s) *s;
	
	if (pob1.x == a[0] && pob1.y == a[1]) {
	myScore++;
	document.getElementById("player1").innerHTML = myScore;
	newApple();
	sBody1.unshift({x: head1.x - s, y:tail1.y});
	}
	
	g.fillRect(pob1.x, pob1.y, s, s); // s - это ширина и высоты нашего "квадрата"
	});
	
	}, 60); // s - скорость змейки//
	
	
	onkeydown = function (e) {
	var k = e.keyCode;
	if ([38, 39, 40, 37, 68, 83, 65, 87].indexOf(k) >= 0)
		e.preventDefault();
	if (k == 39 && direction1 !=3) direction1 = 1 ;
	if (k == 40 && direction1 !=4) direction1 = 2 ;
	if (k == 37 && direction1 !=1) direction1 = 3 ;
	if (k == 38 && direction1 !=2) direction1 = 4 ;
	}
