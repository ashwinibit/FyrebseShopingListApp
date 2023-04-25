import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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

    push(shopingListInDB, inputValue)

    clearInputFieldEl()
    appendItemToShoppingListEl(inputValue)
    
    
    console.log(`${inputValue} added to database`)
})

function clearInputFieldEl() {
    inputFieldEl.value = ``
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${ itemValue }</li>`
}