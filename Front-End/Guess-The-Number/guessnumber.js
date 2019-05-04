var btn = document.querySelector('.btn');

// 取得4位亂數
// var number = Math.floor(Math.random()* 9000) + 1000;

var number = 1000;
function uniq(number) {
  var newArr = [];
  number.forEach(function(element){
    if (newArr.indexOf(element) === -1) {
      newArr.push(element);
    }
  });
  return newArr;
}

//當目前亂數轉字串劈開後代入 uniq 的結果長度不為 4
while(uniq(number.toString().split('')).length != 4) {
 // 就再取一次亂數
  number = Math.floor(Math.random()* 9000) + 1000;
}


btn.addEventListener('click',function(){
  var userInput = document.querySelector('.user-input');
  var inputValue = userInput.value;
  var userNumber = Number(inputValue);
  var numberArr = String(number);
  var anwserNumberArr = numberArr.split('');
  var inputNumberArr = inputValue.split('');
  var temArrA = [];
  var temArrB = [];
  
  for (var i = 0, j = 0; i<anwserNumberArr.length, j<inputNumberArr.length;i++, j++){
  //數字跟位置都一樣給A
    if (anwserNumberArr[i] === inputNumberArr[j]){
      temArrA.push('A');
    }
    
  //數字一樣位置不一樣給B
    if (inputNumberArr.indexOf(anwserNumberArr[i]) !== -1 & anwserNumberArr[i] !== inputNumberArr[j]){
      temArrB.push('B');
    }  
  }
    
  var resultArr = temArrA.length+'A'+temArrB.length+'B';
  if(resultArr === '4A0B'){
    alert('恭喜你猜對了');
  }
  else alert(resultArr);
  
 
  console.log(anwserNumberArr);
  console.log(inputNumberArr);
  console.log(temArrA);
  console.log(temArrB);
  console.log(resultArr);
  
});
