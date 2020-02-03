var scores, roundScore, activePlayer,isPlaying;
 scores=[0,0];
 roundScore=0;
 activePlayer=0;
 isPlaying=true;

 
 document.getElementById('dice-1').style.display='none'
 document.getElementById('dice-2').style.display='none'

 

 document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isPlaying) {
 //1.get number
 var dice1 = Math.floor(Math.random()*6) +1;
 var dice2 = Math.floor(Math.random()*6) +1;

 // 2. imge display
  document.getElementById('dice-1').style.display='block'
  document.getElementById('dice-2').style.display='block'

 
  document.getElementById('dice-1').src = 'dice-' + dice1 + ".png";
  document.getElementById('dice-2').src = 'dice-' + dice2 + ".png";

 // 3.update ui
 if(dice1 !== 1 && dice2 !==1){
   roundScore+=dice1 + dice2;
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
  var input = document.querySelector('.final-score').value;
  var winningScore;
  if(input){
   winningScore=input;
  }
  else{
      winningScore=20;
  }
  if(scores[activePlayer] >=winningScore){
      document.querySelector('#name-' + activePlayer).textContent='winner!';
      document.getElementById('dice-1').style.display='none'
      document.getElementById('dice-2').style.display='none'
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
    document.getElementById('dice-1').style.display='none'
    document.getElementById('dice-2').style.display='none'
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
     document.querySelector('#name-1').textContent='Player2';
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');

     document.querySelector('.player-0-panel').classList.remove('active');
     
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');



    



     

 })
