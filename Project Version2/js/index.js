





    function setStyleDark(){
        document.getElementById('logo').style.color = "#fff";
        document.getElementById('body').style.backgroundColor = "#000";
          document.getElementById('header').style.backgroundColor = "#000"

          document.getElementById('footer').style.backgroundColor = "#fff";
          document.getElementById('p').style.color = "#000";

          document.getElementById('PER').style.backgroundColor = "#000";
          document.getElementById('PER').style.color = "#fff";

          document.getElementById('newsletter').style.backgroundColor = '#0b090a';
          document.getElementById('h2').style.color = '#fff';
          document.getElementById('btn').style.color = '#000';
          document.getElementById('btn').style.backgroundColor = '#f1f1f1';


        let links = document.getElementsByClassName('nav_link');
        for(let i = 0; i < links.length; i++){
            links[i].style.color = "#626262";
        }
    }

    function setStyleLight(){
        document.getElementById('logo').style.color = "#000";
        document.getElementById('body').style.backgroundColor = "#fff";
        document.getElementById('header').style.backgroundColor = "#fff"

        document.getElementById('footer').style.backgroundColor = "#000";
          document.getElementById('p').style.color = "#fff";

          document.getElementById('PER').style.backgroundColor = "#fff";
          document.getElementById('PER').style.color = "#000";

          document.getElementById('newsletter').style.backgroundColor = '#f0f0f0';
          document.getElementById('h2').style.color = '#000';
          document.getElementById('btn').style.color = '#fff';
          document.getElementById('btn').style.backgroundColor = '#000';

          let links = document.getElementsByClassName('nav_link');
          for(let i = 0; i < links.length; i++){
              links[i].style.color = "#626262";
          }
    }


    
    
    function dropDown(){
        let navbar = document.getElementById('nav');

        navbar.classList.toggle('visible');

    }







