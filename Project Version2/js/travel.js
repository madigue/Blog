function setStyleDark(){
    document.getElementById('logo').style.color = "#fff";
    document.getElementById('body').style.backgroundColor = "#000";
      

      document.getElementById('footer').style.backgroundColor = "#fff";
      document.getElementById('p').style.color = "#000";

      

    for(let i = 0; i < document.getElementsByClassName('nav_link').length; i++){
        document.getElementsByClassName('nav_link')[i].style.color = "#f1f1f1";
    }
}

function setStyleLight(){
    document.getElementById('logo').style.color = "#000";
    document.getElementById('body').style.backgroundColor = "#fff";
    
  
    document.getElementById('footer').style.backgroundColor = "#000";
      document.getElementById('p').style.color = "#fff";

    for(let i = 0; i < document.getElementsByClassName('nav_link').length; i++){
        document.getElementsByClassName('nav_link')[i].style.color = "#626262";
    }
}




function dropDown(){
    let navbar = document.getElementById('nav');

    navbar.classList.toggle('visible');

}