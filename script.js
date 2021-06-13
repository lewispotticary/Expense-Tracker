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
    tableRow.setAttribute("class", "row");
    document.getElementById("table").appendChild(tableRow);

    //Creating column elements 
    var tableCell1 = document.createElement("TD");
    var tableCell2 = document.createElement("TD");
    var tableCell3 = document.createElement("TD");
    var tableCell4 = document.createElement("TD");

    //Creating text node that will be appended to columns 
    var textName = document.createTextNode(nameArr[indexArr]);
    var textDate = document.createTextNode(dateArr[indexArr]);
    var textAmount = document.createTextNode(amountArr[indexArr]);
    var removeBtn = document.createElement("BUTTON");

    //Adding attributes to the columns and remove button
    tableCell1.setAttribute("class", "c" + indexArr);
    tableCell2.setAttribute("class", "c" + indexArr);
    tableCell3.setAttribute("class", "c" + indexArr);
    tableCell4.setAttribute("class", "c" + indexArr);
    removeBtn.innerText = "X";
    removeBtn.setAttribute("id", "b" + indexArr);
    removeBtn.setAttribute("onclick", "removeItem(this.id)");

    //Appending text nodes to corresponding column 
    tableCell1.appendChild(textName);
    tableCell2.appendChild(textDate);
    tableCell3.appendChild(textAmount);
    tableCell4.appendChild(removeBtn);

    //Appending the columns to table
    document.getElementById(indexArr).appendChild(tableCell1);
    document.getElementById(indexArr).appendChild(tableCell2);
    document.getElementById(indexArr).appendChild(tableCell3);
    document.getElementById(indexArr).appendChild(tableCell4);
}

function removeItem(clicked_id){

    //Grabbing ID of the button clicked and alerting the item being removed from list
    deleteIndex = clicked_id.slice(-1);
    alert(nameArr[deleteIndex] + " has been removed from your list");
    
    //Removing the item from array
    nameArr.splice(deleteIndex, 1);
    dateArr.splice(deleteIndex, 1);
    amountArr.splice(deleteIndex, 1);

    //Getting the current lenght of array
    var updatedLength = nameArr.length;

    //Grabbing all the rows in the table, returning and storing the amount of rows 
    var row = document.getElementsByClassName("row");
    var rowLength = row.length;

    //Removing all the items in the table
    for(var i=rowLength; i>=1; i--) { 
        console.log("hello");
        table.deleteRow(i);
    }   

        //Appending the updated array with items to the table
    for(var x=0; x<updatedLength; x++) { 

        //Creating table row element and adding attributes
        var tableRow = document.createElement("TR");
        tableRow.setAttribute("id", x);
        tableRow.setAttribute("class", "row");
        document.getElementById("table").appendChild(tableRow);

        //Creating column elements
        var tableCell1 = document.createElement("TD");
        var tableCell2 = document.createElement("TD");
        var tableCell3 = document.createElement("TD");
        var tableCell4 = document.createElement("TD");

        //Creating text node that will be appended to columns 
        var textName = document.createTextNode(nameArr[x]);
        var textDate = document.createTextNode(dateArr[x]);
        var textAmount = document.createTextNode(amountArr[x]);
        var removeBtn = document.createElement("BUTTON");

        //Adding attributes to the columns and remove button
        tableCell1.setAttribute("class", "c" + x);
        tableCell2.setAttribute("class", "c" + x);
        tableCell3.setAttribute("class", "c" + x);
        tableCell4.setAttribute("class", "c" + x);
        removeBtn.innerText = "X";
        removeBtn.setAttribute("id", "b" + x);
        removeBtn.setAttribute("onclick", "removeItem(this.id)");

        //Appending text nodes to corresponding column 
        tableCell1.appendChild(textName);
        tableCell2.appendChild(textDate);
        tableCell3.appendChild(textAmount);
        tableCell4.appendChild(removeBtn);

        //Appending the columns to table
        document.getElementById(x).appendChild(tableCell1);
        document.getElementById(x).appendChild(tableCell2);
        document.getElementById(x).appendChild(tableCell3);
        document.getElementById(x).appendChild(tableCell4);        
    }             
}