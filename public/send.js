let name = document.getElementById('321s').innerHTML;
let size = "xs"
console.log(name);

function onclick(e){
  size = e.target.value;
}

for (let i = 0; i < sizeForm.radio.length; i++) {
  sizeForm.radio[i].addEventListener("click",onclick);
 }

function buyItem(){
  for (let i = 0; i < sizeForm.radio.length; i++) {
    if (sizeForm.radio[i].checked) {
      let size = sizeForm.radio[i].value;
    }
    
  }
  console.log(name + " " + size)
  
  tel = prompt("Введите номер телефона", "+7");

  sendReq();
}

function sendReq(){
  let data = JSON.stringify({phone:tel,clothesName:name, clothesSize:size});
  let request = new XMLHttpRequest();
  request.open("POST", "/user", true);
  request.setRequestHeader("Content-Type", "application/json");
  // request.addEventListener("load", function(){
  //   let receivedUser = JSON.parse(request.response);
  //   console.log()
  // })
  request.send(data);
}


