$(document).ready(function () {
    getData();
    });
    function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstName").text(studentObj.firstName);
    $("#lastName").text(studentObj.lastName);
    $("#dob").text(studentObj.dob);
    $("#gender").text(studentObj.gender);
    $("#email").text(studentObj.email);
    $("#password").text(studentObj.password);
    $("#conpass").text(studentObj.conpass);
    $("#contactNo").text(studentObj.contactNo);
    }
    
    
    