import { initializeApp } from 'firebase/app';

console.log(add(5,6))

const appDettings = {
    databseURL: "https://listapp-76645-default-rtdb.asia-southeast1.firebasedatabase.app/"
}



const inputFieldDt = document.getElementById("input-field")
const addButtonDt = document.getElementById("add-button")

addButtonDt.addEventListener("click", function(){
    let inputVal = inputFieldDt.value 
    console.log(inputVal)
});

