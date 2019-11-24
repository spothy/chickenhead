var correct = document.getElementById('passwd');
correct.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
});

var becky = [
  "good call u lovely pigeon!",
  "remember, I'm not a poquito genius",
  "here shall everything be about u",
  "read moore and maybe then love me moore",
  "I would kick a dog into the sun for u",
];

var background = document.getElementById('back-trans');
var title = document.getElementById('hola-b');
var posts = document.getElementById('posts');
var main = document.getElementById('back-list');
var arrow = document.getElementById('back');
var body = document.getElementById('cuerpo');
var mero = document.getElementById('mero');

var postitle = document.getElementsByClassName(".list");

function password(e) {
  var key = e.keyCode;
  if (key === 13) {
     e.preventDefault();
    if (correct === '')
      {
      console.log('heellooo');
      } else
      {
        if (correct.value !== 'pijaloca')
        {
          console.log('meh')

        } else
          {
            background.style.height = "10vh";
            correct.style.display="none";
            title.innerHTML = "hola chickenhead";
            title.style.fontSize = "1.2rem";
            title.style.color = "#007fff";
            posts.style.display = "none";
            main.style.display = "block";


          }
      }
    return true;
  } else {
    console.log('not working');
  }
}

// El background baja y sube haciendo la transicion
//

function transition(){
  var text = becky[Math.floor(Math.random() * becky.length )];
  title.innerHTML = text;
  background.style.height = "100vh";
  setTimeout(transition2, 2000);
}

function transition2(){
  background.style.height = "0vh";
  posts.style.display ="block";
  posts.style.height = "100vh";
  main.style.display = "none";
  title.style.display = "none";
  arrow.style.display =" block";
  cuerpo.style.overflowY = "auto";
  mero.style.overflowY = "auto";

}

function back1(){
  background.style.height =" 100vh";
  posts.style.height = "0vh";
  setTimeout(back2, 2000);
}

function back2(){
  background.style.height ="10vh";
  posts.style.display = "none";
  title.style.display = "block";
  title.innerHTML = "fancy more shitty writing my lady?"
  main.style.display = "block";
  arrow.style.display = "none";
}

// display and block the posts
//add event listeners to the titles at main sections
var headline1 = document.getElementById('click1');
var headline2 = document.getElementById('click2');
var headline3 = document.getElementById('click3');

headline1.addEventListener("click", displayPost1);
headline2.addEventListener("click", displayPost2);
headline3.addEventListener("click", displayPost3);

// select the posts
var write1 = document.getElementById('post1');
var write2 = document.getElementById('post2');
var write3 = document.getElementById('post3');

//display and hide functions.

function displayPost1(){
  write1.style.display = "block";
  write2.style.display = "none";
  write3.style.display = "none";
}

function displayPost2(){
  write1.style.display = "none";
  write2.style.display = "block";
  write3.style.display = "none";
}

function displayPost3(){
  write1.style.display = "none";
  write2.style.display = "none";
  write3.style.display = "block";
}
