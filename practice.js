function nameInfo() {
  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let lastName = document.getElementById("lastName").value;

  let fullName = `${firstName} ${middleName} ${lastName}`;
  document.getElementById("fullName").textContent = fullName;
}
