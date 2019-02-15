var isLoggedIn = false;
var employeeTable = document.getElementById('allEmployees');

function checkAndLogin() {
    var user = document.getElementById("usernameInput");
    var password = document.getElementById("passwordInput");
    var adminDash = document.getElementById("adminControls");

    if (!isLoggedIn) {
        if (user.value == "Admin" && password.value == "Admin") {
            user.value = '';
            password.value = '';
            window.alert("You are now logged in!");
            isLoggedIn = true;
            adminDash.style.visibility = "visible";
            document.getElementById("loginButton").innerHTML = "Logout";
        }
        else {
            window.alert("You have entered the wrong credentials. Try Again.");
        }
    }
    else if (isLoggedIn) {
        isLoggedIn = false;
        window.alert("You have logged off");
        document.getElementById("loginButton").innerHTML = "Login";
    }
}

function addEmployee() {
    var fName = document.getElementById('employeeFName');
    var lName = document.getElementById('employeeLName');
    var pay = document.getElementById('payRate');

    data = {
        fname: fName.value,
        lname: lName.value,
        payRate: parseFloat(pay.value)
    }
    fetch('http://localhost:8080/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(function (response) {
        window.alert("Employee Profile Created")
        return response.json();
    }).then(function (data) {

    });
}

window.onload = function () {
    setTimeout(function () {
        fetch('http://localhost:8080/employees', {
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var row = document.getElementById('allEmployees').insertRow(i+1);
                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);
                
                cell0.innerHTML = i+1;
                cell1.innerHTML = data[i].fname;
                cell2.innerHTML = data[i].lname;
                cell3.innerHTML = '';
                cell4.innerHTML = '';
            }

        })
    }, 2000);

}