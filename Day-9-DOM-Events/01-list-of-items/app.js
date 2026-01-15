function addItem() {
    console.log('TODO:...');

    let text = document.getElementById('newItemText').value;
    let li =document.createElement('li');

    //LAST LI
    li.appendChild(document.createTextNode(text));
    document.getElementById(`items`).appendChild(li)

    //FIRST LI

    // li.prepend(document.createTextNode(text));
    // document.getElementById(`items`).prepend(li)

    document.getElementById('newItemText').value = ""
}