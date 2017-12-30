const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const displayScreen = document.getElementById('onscreen');
var numberArr = [];
var operatorArr = [];
var numberVal = '';
var total = '';
var totalNum = 0;
var numAndOpp = '';
const calcButtons = document.querySelectorAll('.bttn');


// numButtons.forEach(numButton => {
//   numButton.addEventListener('click',function(event){
//     operations += event.target.dataset.num;
//
//     displayScreen.innerHTML = operations;
//
//   })
// })

buttonListener();

function buttonListener(){
  calcButtons.forEach(calcButton => {
    calcButton.addEventListener('click',function(event){
      if(this.classList.contains('number')){
        numberVal += event.target.dataset.num;

        displayScreen.innerHTML = numAndOpp + numberVal;
      }else if (this.classList.contains('operator')) {
        numberArr.push(numberVal);
        operatorArr.push(this.dataset.opp);
        numberVal = '';
        numAndOpp = '';
        for(var i = 0 ; i<numberArr.length;i++){
          numAndOpp += numberArr[i];
          numAndOpp += operatorArr[i];
        }
        displayScreen.innerHTML = numAndOpp;


      }
      else if (event.target.classList.contains('decimal')) {
        if(numberVal.indexOf('.') == -1){
          numberVal += "."
          displayScreen.innerHTML = numAndOpp + numberVal;

        }


      }
      else if(event.target.classList.contains('equals')) {
        total = '';
         total += numAndOpp;
         total += numberVal;
         numberArr = [];
         operatorArr = [];
         numberVal = eval(total).toString();
        displayScreen.innerHTML = numberVal;
      }else if (this.classList.contains('clear')) {
        clear();

      }
    });
  });
}




function addOperation(){

}

function clear(){
  total = '';
  numberArr = [];
  operatorArr = [];
  NumberVal = '';
  displayScreen.innerHTML = '';
}
