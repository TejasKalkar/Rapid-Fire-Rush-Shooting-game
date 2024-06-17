var x=5;
var b = 6;
 var t = 10;
 function hit()
{
    document.getElementById("player").play();

    x--;
    document.getElementById('score_id').innerHTML = x;
    
    b--;
    document.getElementById("bullet_id").innerHTML = b;
    
    if(x==0)
    {
    alert("you win");
    document.getElementById("win").play();
    
    document.getElementById('button').style.display='None';
    document.getElementById('timer_id').innerHTML = "You Win";
    clearInterval(intervalId); 


    
    }
    else if(b==0)
    {
    alert("You lose");
    
    document.getElementById('button').style.display='None';
    document.getElementById('timer_id').innerHTML = "You Lose";
    clearInterval(intervalId); 


    
    }
    }
     function nothit()
{
    document.getElementById("player").play();

    b--;
    document.getElementById("bullet_id").innerHTML = b;
    
    if(b==0)
    {
    alert("You lose");
    
    document.getElementById('button').style.display='None';
    document.getElementById('timer_id').innerHTML = "You Lose";
    clearInterval(intervalId); 


    
    }}
 
  const p = 10;
function time() {
    t--;
    document.getElementById('timer_id').innerHTML = t;
    if (t == 0) {
        alert("you lose");
        document.getElementById('timer_id').innerHTML = "You Lose";
        document.getElementById('button').style.display='None';
        clearInterval(intervalId); 
    }
}

if (t > 0) {
    intervalId = setInterval(time, 1000); 
}
 document.addEventListener('click', function(event) {
        
            if (event.target.id !== 'button') {
                nothit();
            }
        });
