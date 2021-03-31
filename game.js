var button = [];
for (var i = 1; i<10; i++) button[i] = document.getElementById('canvas'+i);

var ctx = [];
for (var i = 1; i<10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = [];
for (var i = 1; i<10; i++) bDisabled[i] = false;

var isResult = false;
var content = [];

function loop(x)
{

	if(!bDisabled[x])
	{
		bDisabled[x] = true;
		button[x].style.opacity = 0.7;
		content[x] = 'x';

		button[x].style.webkitTransform = "rotateY(180deg)"; 


		

		setTimeout(function()
		{
			ctx[x].lineWidth = 3;
			ctx[x].beginPath();
			ctx[x].moveTo(10,10);
			ctx[x].lineTo(90,90);
			ctx[x].moveTo(90,10);
			ctx[x].lineTo(10,90);
			ctx[x].stroke();
			//ctx[x].strokeStyle = "#FF0000";
			ctx[x].strokeStyle = 'blue';
			ctx[x].closePath();

			checkWinner();

		}, 300);
		
		
	}
}

function computerTurn()
{
	var r = Math.random();

	if(r < 0.1 && !bDisabled[1]) draw0Steps(1); 

	else if(content[1] == '0' && content[2] == '0' && !bDisabled[3]) draw0Steps(3) 
	else if(content[2] == '0' && content[3] == '0' && !bDisabled[1]) draw0Steps(1)
	else if(content[3] == '0' && content[1] == '0' && !bDisabled[2]) draw0Steps(2)
		
	else if(content[4] == '0' && content[5] == '0' && !bDisabled[6]) draw0Steps(6)
	else if(content[5] == '0' && content[6] == '0' && !bDisabled[4]) draw0Steps(4)
	else if(content[6] == '0' && content[4] == '0' && !bDisabled[5]) draw0Steps(5)

	else if(content[7] == '0' && content[8] == '0' && !bDisabled[9]) draw0Steps(9)
	else if(content[8] == '0' && content[9] == '0' && !bDisabled[7]) draw0Steps(7)
	else if(content[9] == '0' && content[7] == '0' && !bDisabled[8]) draw0Steps(8)

	else if(content[1] == '0' && content[4] == '0' && !bDisabled[7]) draw0Steps(7)
	else if(content[1] == '0' && content[7] == '0' && !bDisabled[4]) draw0Steps(4)
	else if(content[7] == '0' && content[4] == '0' && !bDisabled[1]) draw0Steps(1)


	else if(content[2] == '0' && content[5] == '0' && !bDisabled[8]) draw0Steps(8)
	else if(content[5] == '0' && content[8] == '0' && !bDisabled[2]) draw0Steps(2)
	else if(content[2] == '0' && content[8] == '0' && !bDisabled[5]) draw0Steps(5)
			
	else if(content[3] == '0' && content[6] == '0' && !bDisabled[9]) draw0Steps(9)
	else if(content[6] == '0' && content[9] == '0' && !bDisabled[3]) draw0Steps(3)
	else if(content[9] == '0' && content[3] == '0' && !bDisabled[6]) draw0Steps(6)

	else if(content[1] == '0' && content[5] == '0' && !bDisabled[9]) draw0Steps(9)
	else if(content[5] == '0' && content[9] == '0' && !bDisabled[1]) draw0Steps(1)
	else if(content[1] == '0' && content[9] == '0' && !bDisabled[5]) draw0Steps(5)
	
	else if(content[3] == '0' && content[5] == '0' && !bDisabled[7]) draw0Steps(7)
	else if(content[7] == '0' && content[5] == '0' && !bDisabled[3]) draw0Steps(3)
	else if(content[7] == '0' && content[3] == '0' && !bDisabled[5]) draw0Steps(3)


	else if(content[1] == 'x' && content[2] == 'x' && !bDisabled[3]) draw0Steps(3)
	else if(content[2] == 'x' && content[3] == 'x' && !bDisabled[1]) draw0Steps(1)
	else if(content[3] == 'x' && content[1] == 'x' && !bDisabled[2]) draw0Steps(2)
		
	else if(content[4] == 'x' && content[5] == 'x' && !bDisabled[6]) draw0Steps(6)
	else if(content[5] == 'x' && content[6] == 'x' && !bDisabled[4]) draw0Steps(4)
	else if(content[6] == 'x' && content[4] == 'x' && !bDisabled[5]) draw0Steps(5)

	else if(content[7] == 'x' && content[8] == 'x' && !bDisabled[9]) draw0Steps(9)
	else if(content[8] == 'x' && content[9] == 'x' && !bDisabled[7]) draw0Steps(7)
	else if(content[9] == 'x' && content[7] == 'x' && !bDisabled[8]) draw0Steps(8)

	else if(content[1] == 'x' && content[4] == 'x' && !bDisabled[7]) draw0Steps(7)
	else if(content[1] == 'x' && content[7] == 'x' && !bDisabled[4]) draw0Steps(4)
	else if(content[7] == 'x' && content[4] == 'x' && !bDisabled[1]) draw0Steps(1)


	else if(content[2] == 'x' && content[5] == 'x' && !bDisabled[8]) draw0Steps(8)
	else if(content[5] == 'x' && content[8] == 'x' && !bDisabled[2]) draw0Steps(2)
	else if(content[2] == 'x' && content[8] == 'x' && !bDisabled[5]) draw0Steps(5)
			
	else if(content[3] == 'x' && content[6] == 'x' && !bDisabled[9]) draw0Steps(9)
	else if(content[6] == 'x' && content[9] == 'x' && !bDisabled[3]) draw0Steps(3)
	else if(content[9] == 'x' && content[3] == 'x' && !bDisabled[6]) draw0Steps(6)

	else if(content[1] == 'x' && content[5] == 'x' && !bDisabled[9]) draw0Steps(9)
	else if(content[5] == 'x' && content[9] == 'x' && !bDisabled[1]) draw0Steps(1)
	else if(content[1] == 'x' && content[9] == 'x' && !bDisabled[5]) draw0Steps(5)
	
	else if(content[3] == 'x' && content[5] == 'x' && !bDisabled[7]) draw0Steps(7)
	else if(content[7] == 'x' && content[5] == 'x' && !bDisabled[3]) draw0Steps(3)
	else if(content[7] == 'x' && content[3] == 'x' && !bDisabled[5]) draw0Steps(3)


	else if(r < 0.2 && !bDisabled[2]) draw0Steps(2); 
	else if(r < 0.3 && !bDisabled[3]) draw0Steps(3); 
	else if(r < 0.4 && !bDisabled[4]) draw0Steps(4); 
	else if(r < 0.5 && !bDisabled[5]) draw0Steps(5); 
	else if(r < 0.6 && !bDisabled[6]) draw0Steps(6); 
	else if(r < 0.7 && !bDisabled[7]) draw0Steps(7);
	else if(r < 0.8 && !bDisabled[8]) draw0Steps(8);
	else if(r < 0.9 && !bDisabled[9]) draw0Steps(9);

	else computerTurn(); 
}

function draw0Steps(x)
{
	bDisabled[x] = true;
	button[x].style.opacity = 0.7;
	content[x] = '0';
	button[x].style.webkitTransform = "rotate(180deg)";

	setTimeout(function()
	{
		ctx[x].lineWidth = 3;
		ctx[x].beginPath();
		ctx[x].arc(50,50,34,0, Math.PI*2,false);
		ctx[x].stroke();
		ctx[x].closePath();
		checkWinnerCompu();
	}, 1000);
}

function checkWinner(){

	if(content[1] == 'x' && content[2] == 'x' && content[3] == 'x') alert("You won!!");
	else if(content[4] == 'x' && content[5] == 'x' && content[6] == 'x') alert("You won!!");
	else if(content[7] == 'x' && content[8] == 'x' && content[9] == 'x') alert("You won!!");

	else if(content[1] == 'x' && content[4] == 'x' && content[7] == 'x') alert("You won!!");
	else if(content[2] == 'x' && content[5] == 'x' && content[8] == 'x') alert("You won!!");
	else if(content[3] == 'x' && content[6] == 'x' && content[9] == 'x') alert("You won!!");

	else if(content[1] == 'x' && content[5] == 'x' && content[9] == 'x') alert("You won!!");
	else if(content[7] == 'x' && content[5] == 'x' && content[3] == 'x') alert("You won!!");

	else {
		computerTurn();
	}
}

function checkWinnerCompu(){

	if(content[1] == '0' && content[2] == '0' && content[3] == '0') alert("Computer won!!");
	else if(content[4] == '0' && content[5] == '0' && content[6] == '0') alert("Computer won!!");
	else if(content[7] == '0' && content[8] == '0' && content[9] == '0') alert("Computer won!!");

	else if(content[1] == '0' && content[4] == '0' && content[7] == '0') alert("Computer won!!");
	else if(content[2] == '0' && content[5] == '0' && content[8] == '0') alert("Computer won!!");
	else if(content[3] == '0' && content[6] == '0' && content[9] == '0') alert("Computer won!!");

	else if(content[1] == '0' && content[5] == '0' && content[9] == '0') alert("Computer won!!");
	else if(content[7] == '0' && content[5] == '0' && content[3] == '0') alert("Computer won!!");

}