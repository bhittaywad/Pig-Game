/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,isPlaying;
 scores=[0,0];
 roundScore=0;
 activePlayer=0;
 isPlaying=true;

 
 document.querySelector(".dice").style.display='none'

 

 document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isPlaying) {
 //1.get number
 var dice = Math.floor(Math.random()*6) +1;
 // 2. imge display
 var domDice = document.querySelector('.dice');
 domDice.style.display='block';
 domDice.src = 'dice-' + dice + ".png";
 // 3.update ui
 if(dice !== 1){
   roundScore+=dice;
   document.querySelector('#current-' + activePlayer).textContent=roundScore;
 }
 else{
     //next player

     
     nextPlayer();

       }
 //
}
   
 });

 document.querySelector('.btn-hold').addEventListener('click',function(){
   if(isPlaying){
        //1.add current score to global
   scores[activePlayer]+=roundScore;


   //2. update UI
  document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
  //.4 check if player win the game
  if(scores[activePlayer] >=20){
      document.querySelector('#name-' + activePlayer).textContent='winner!';
      document.querySelector('.dice').style.display='none';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      isPlaying=false;

  }
  
  else{
 //3. next player
 nextPlayer();
  } 
   }
   
  
 });
 function nextPlayer(){
    activePlayer === 0? activePlayer=1:activePlayer=0;
    roundScore=0;
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
 };

 document.querySelector('.btn-new').addEventListener('click',function(){
     scores=[0,0];
     roundScore=0;
     activePlayer=0;
     isPlaying=true;
     document.querySelector('#score-0').textContent='0';
     document.querySelector('#score-1').textContent='0';
     document.querySelector('#current-0').textContent='0';
     document.querySelector('#current-1').textContent='0';

     document.querySelector('#name-0').textContent='Player1';
     document.querySelector('#name-0').textContent='Player2';
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');

     document.querySelector('.player-0-panel').classList.remove('active');
     
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');



    



     document.querySelector()

 })


 /* init();






document.querySelector(".btn-roll").addEventListener("click", function(){
   //generate random number
    
  var dice = Math.floor(Math.random() * 6) + 1;
    
    
   // display the result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
    
    
    //update score
    
    if(dice !== 1){
        roundScore+=dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
    else{
        // next player
    nextPlayer(); 
     }
    
    
    
});

// event listener for button hold
document.querySelector(".btn-hold").addEventListener("click",function(){

    //add current score to global score
      scores[activePlayer]+=roundScore;
    //update ui
      document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    // checkif the player won the game
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'winner';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
    }
   
    // next player
   nextPlayer();
});
   
function nextPlayer(){
    // next player
    activePlayer === 0? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";
    
    document.querySelector(".player-0-panel").classList.toggle("active");   
    
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    document.querySelector(".dice").style.display="none";
}

// impliment new calss
document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores =[0,0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector(".dice").style.display = "none";
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
}

//document.querySelector("#current-" + activePlayer).textContent =  dice ;
 //var x = document.querySelector("#score-0").textContent;
//console.log(x);
 */