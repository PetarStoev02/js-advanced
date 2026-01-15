function deleteByEmail() {
  console.log("TODO:...");

  let email = document.getElementsByName("email")[0].value;

  let secondColum = document.querySelectorAll("#customers tr td:nth-child(2)");

  for (let td of secondColum) {
    if (td.textContent == email) {
      let row = td.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById('result').textContent = "Not found";
      return;
    }
  }
  document.getElementById("result").textContent = "Not found";
}
