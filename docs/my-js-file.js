function changeBgColor() {
    myList.style.backgroundColor = liHoverColor;
  }
  function revertBgColor() {
    myList.style.backgroundColor = liDefaultColor;
  }
  
  function changeButtonColor() {
    myButton.style.backgroundColor = buttonHoverColor;
  }
  function revertButtonColor() {
    myButton.style.backgroundColor = buttonDefaultColor;
  }
  
  var myText = "Hi there!";
  
  var fixline = document.getElementById("open_line");
  fixline.textContent = "Here is where I will practice coding in :";
  
  var myPic = document.getElementById("myPic");
  myPic.onclick = function () {
    alert(myText);
  };
  
  var myList = document.getElementById("myList");
  var liHoverColor = "#2255ffff";
  var liDefaultColor = "#2255ff7f";
  myList.addEventListener("mouseover", changeBgColor);
  myList.addEventListener("mouseout", revertBgColor);
  myList.style.backgroundColor = liDefaultColor;
  
  var myButton = document.getElementById("myButton");
  var buttonHoverColor = "#ffffffff";
  var buttonDefaultColor = "#aaaaaaff";
  myButton.addEventListener("mouseover", changeButtonColor);
  myButton.addEventListener("mouseout", revertButtonColor);
  myButton.style.backgroundColor = buttonDefaultColor;
  