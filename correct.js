// Initialize Firebase
var config = {
  apiKey: "AIzaSyDniYEuYR-g34LMwfqFAPvH8lpHLLvd9FE",
  authDomain: "timesheet-e4371.firebaseapp.com",
  databaseURL: "https://timesheet-e4371.firebaseio.com",
  projectId: "timesheet-e4371",
  storageBucket: "",
  messagingSenderId: "708048646607"
};
firebase.initializeApp(config);

//Button for adding Employees
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");

  // Add each train's data into the table
  $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStart + "</td><td>" + "null" + "</td><td>" + empRate + "</td><td>" + "null" + "</td></tr>");

  database.ref().push({
    empName: empName,
    empRole: empRole,
    empStart: empStart,
    empRate: empRate
  })
});