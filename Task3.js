var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);


function displayDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var mobile = document.getElementById("mobile").value;
    if(document.getElementById('gender1').checked == true){
        gender = document.getElementById('gender1').value
    }
    else{
        gender = document.getElementById('gender2').value
    }

    var check_values =''
    var checkboxes = document.querySelectorAll('input[name="check"]:checked')
    for (var checkbox of checkboxes){
        check_values +=  (checkbox.value + ',')
    }
    

    if(!name || !email || !mobile || !age ||  !(gender) || !check_values) {
        alert("Please fill all the fields!");
        return;
    }

   
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
  
    

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = age;
    cell4.innerHTML = mobile;
    cell5.innerHTML = gender;
    cell6.innerHTML = check_values;

    row++;

}