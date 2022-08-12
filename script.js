function w3_open(){
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("main").style.marginLeft = "25%";
   document.getElementById("navMe").style.display = "none";
}

function w3_close(){
  document.getElementById("mySidebar").style.display = "none";
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("navMe").style.display = "inline-block"; 
}