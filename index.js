function display(btn){
  switch(btn){
    case "1":
      document.querySelector("#display").value += btn;
      break
    case "2":
      document.querySelector("#display").value += btn;
      break
    case "3":
      document.querySelector("#display").value += btn;
      break
    case "4":
      document.querySelector("#display").value += btn;
      break
    case "5":
      document.querySelector("#display").value += btn;
      break
    case "6":
      document.querySelector("#display").value += btn;
      break
    case "7":
      document.querySelector("#display").value += btn;
      break
    case "8":
      document.querySelector("#display").value += btn;
      break
    case "9":
      document.querySelector("#display").value += btn;
      break
    case ")":
      document.querySelector("#display").value += btn;
      break
    case "(":
      document.querySelector("#display").value += btn;
      break
    case "0":
      document.querySelector("#display").value += btn;
      break
    case "+":
      document.querySelector("#display").value += btn;
      break
    case "-":
      document.querySelector("#display").value += btn;
      break
    case "*":
      document.querySelector("#display").value += btn;
      break
    case "/":
      document.querySelector("#display").value += btn;
      break
  
  }
  }
  document.addEventListener('keypress', function(event){
    display(event.key);
  })
  
  for(var i=0; i< document.querySelectorAll('.button').length; i++){  
    document.querySelectorAll('.button')[i].addEventListener('click', function(event){
      var value= this.value
      display(value);  
    })
  }

  function calcul(){
    var ca = eval(document.querySelector("#display").value);
    var res =  ca  ?   document.querySelector("#cal").value = ca : document.querySelector("#cal").value ="Entre the value"  ;
  }
  function remove(){
    document.querySelector("#cal").value=  "";
    document.querySelector("#display").value= "";
    }
  
  