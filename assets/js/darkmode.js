let icon=document.getElementById("micon");
icon.onclick=function(){
  document.body.classList.toggle("dark-verson");
  if( document.body.classList.contains("dark-verson")){
    icon.src="assets/img/sun.png";
  }else{
    icon.src="assets/img/moon.png";
  }
}