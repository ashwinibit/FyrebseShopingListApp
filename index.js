// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { initializeApp } from '../FyrebseShopingListApp/node_modules/firebase/app';

const appSettings = {
    databseURL: "https://listapp-76645-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
  
const app = initializeApp(appSettings);

console.log("hello")
console.log(app)




const inputFieldDt = document.getElementById("input-field")
const addButtonDt = document.getElementById("add-button")

addButtonDt.addEventListener("click", function(){
    let inputVal = inputFieldDt.value 
    console.log(inputVal)
});

