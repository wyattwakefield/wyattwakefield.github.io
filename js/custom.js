function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "") {
    x.innerHTML = "<audio controls class=\"w-100\"><source src=\"./media/kette/jedwedes.ogg\" type=\"audio/ogg\"/></audio>";
  } else {
    x.innerHTML = "";
  }
};


document.getElementById('stopButton').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el => el.pause());
});
