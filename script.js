var nameArr = [];
var dateArr = [];
var amountArr = [];
var lengthArr = 0;
var indexArr = 0; 

function addItem(){

    //Storing user inputs into variables 
    var nameInput = document.getElementById("nameInput").value;
    var dateInput = document.getElementById("dateInput").value;
    var amountInput = document.getElementById("amountInput").value;
    const table = document.getElementById("table");

    //Pushing user inputs to seperate arrays
    nameArr.push(nameInput);
    dateArr.push(dateInput);
    amountArr.push(amountInput);

    //Getting length of array
    lengthArr = nameArr.length;

    //Current index of array
    indexArr = lengthArr - 1;

    //Creating table row element and adding attributes
    var tableRow = document.createElement("TR");
    tableRow.setAttribute("id", indexArr);
    document.getElementById("table").appendChild(tableRow);

    //Creating column elements 
    var tableCell1 = document.createElement("TD");
    var tableCell2 = document.createElement("TD");
    var tableCell3 = document.createElement("TD");
    var tableCell4 = document.createElement("TD");

    //
    var textName = document.createTextNode(nameArr[indexArr]);
    var textDate = document.createTextNode(dateArr[indexArr]);
    var textAmount = document.createTextNode(amountArr[indexArr]);
    var removeBtn = document.createElement("BUTTON");


    tableCell1.setAttribute("class", "c" + indexArr);
    tableCell2.setAttribute("class", "c" + indexArr);
    tableCell3.setAttribute("class", "c" + indexArr);
    tableCell4.setAttribute("class", "c" + indexArr);
    removeBtn.innerText = "X";
    removeBtn.setAttribute("id", "b" + indexArr);
    removeBtn.setAttribute("onclick", "removeItem(this.id)");

    tableCell1.appendChild(textName);
    tableCell2.appendChild(textDate);
    tableCell3.appendChild(textAmount);
    tableCell4.appendChild(removeBtn);

    document.getElementById(indexArr).appendChild(tableCell1);
    document.getElementById(indexArr).appendChild(tableCell2);
    document.getElementById(indexArr).appendChild(tableCell3);
    document.getElementById(indexArr).appendChild(tableCell4);
}

function removeItem(clicked_id,lengthArr){
    deleteIndex = clicked_id.slice(-1);
    alert(nameArr[deleteIndex] + " has been removed from your list");
    
    nameArr.splice(deleteIndex, 1);
    dateArr.splice(deleteIndex, 1);
    amountArr.splice(deleteIndex, 1);
    
    var temp = document.getElementsByClassName("c" + deleteIndex);
    
    for(var x=3; x>-1; x--) { 
        console.log("hello");
        temp[x].parentNode.removeChild(temp[x]);
    }   


    
}