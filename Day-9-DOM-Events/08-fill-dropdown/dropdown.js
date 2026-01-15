function addItem() {
    let text= document.getElementById("newItemText");
    let values= document.getElementById("newItemValue");
    let menu= document.getElementById("menu")

    let option= document.createElement("option")
    option.textContent = text.value;
    option.value = values.value;
    
    menu.appendChild(option)
    
    text.value = ""
    values.value = ''
}