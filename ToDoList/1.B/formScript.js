$(document).ready(function () {
    $("#btnAddStudent").click(function () {
    //collect user data from createUser form
    function getStudentData() {
    let date = new Date($("#dob").val());
    day = date.getDate();
    month = date.getMonth() + 1; //jan - 0, feb-1, ...dec-11
    year = date.getFullYear();
    let dob = [day, month, year].join("/"); //28/01/2022
    let selectedDate = new Date($("#registrationDate").val());
    day = selectedDate.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    let registrationDate = [day, month, year].join("/");
    let student = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    dob: dob,
    gender: $("input[name='gender']:checked").val(),
    email: $("#email").val(),
    password: $("#password").val(),
    conpass: $("#conpass").val(),
    contactNo: $("#contactNo").val(),
    };
    $("#studentForm")[0].reset();
    return student;
    }
    //store student data to localStorage
    function storeDataToLocalStorage() {
    if (!localStorage.getItem("student")) {
    localStorage.setItem("student", JSON.stringify(getStudentData()));
    } else {
    localStorage.removeItem("student");
    localStorage.setItem("student", JSON.stringify(getStudentData()));
    }
    }
    //send data to server with AJAX request
    function sendData() {
    let xhr = new XMLHttpRequest();
    let data = JSON.stringify(getStudentData());
    xhr.open("POST", "http://localhost:4000/storedata", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    }
    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
    // sendData();
    window.location.href = "display-data.html"
    });
    });
    