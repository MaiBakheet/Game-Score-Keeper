var count1=0;
var count2=0;
let isgameover=false;
var win=5;
var display1=document.querySelector('#player1');
var display2=document.querySelector('#player2');
const playto=document.querySelector('#selectNumber');
var player1Btn=document.querySelector('#btn1');
var player2Btn=document.querySelector('#btn2');



function increasevalue01(){
    if (!isgameover) {
            count1++;
    }
    if (count1===win){
        isgameover=true;
        player1Btn.disabled = true;
        player2Btn.disabled = true;

    }
   display1.textContent= count1;		

        }

function increasevalue02(){
    if (!isgameover) {
            count2++;
         }
    if (count2===win){
        isgameover=true;
        player1Btn.disabled = true;
        player2Btn.disabled = true;
    }
    display2.textContent = count2;
        }
        playto.addEventListener('change',function()  {
          win=parseInt(this.value);
          reset();

        })
       
function reset() {
            isgameover=false;
            count1=0;
            count2=0;
            display1.textContent=0;
            display2.textContent=0;
            player1Btn.disabled = false;
            player2Btn.disabled = false;
        }


