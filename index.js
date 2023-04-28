import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://listapp-76645-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shopingListInDB = ref(database, "shopingList")

console.log(app)

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    if (inputValue.length == 0){
        // alert("Add text")
        inputFieldEl.style.borderColor = "red";
    }

    else{
        push(shopingListInDB, inputValue)
        clearInputFieldEl()
        console.log(`${inputValue} added to database`)
    }

    
})

onValue(shopingListInDB, function(snapshot){
    let itemsArray = Object.entries(snapshot.val())
    clearShoppingListEl()
    for(let i = 0; i< itemsArray.length;i++){
        let currentItem = itemsArray[i]
        // console.log(currentItem)
        appendItemToShoppingListEl(currentItem)
        
    }
    

})

function clearShoppingListEl(){
    shoppingListEl.innerHTML = ''
}

function clearInputFieldEl() {
    inputFieldEl.value = ``
}

function appendItemToShoppingListEl(item) {

    // shoppingListEl.innerHTML += `<li>${ itemValue }</li>`
    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener("click", function(){
        // console.log(itemID)
        let exactLocationOfItemInDB = ref(database, `shopingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })
    shoppingListEl.append(newEl)

}