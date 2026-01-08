
let headerContent =`


    <header>
        <a href="/" style="z-index:5000;">junes dreyfus</a>
    </header>

    
      <ul class="topnav">
        <a href="/works.html"><li id="button1">
          works
          <div class="workmenu">
          </div>
        </li></a>

       <a href="#"><li id="button2" onclick="togglejournal()">
          journal
       </li> </a>

       <a href="/gestures.html"><li id="button3">
          gestures
       </li> </a>


       <a href="/findme.html"><li id="button4">
         find me!
       </li></a>
       </ul>
     <div class="journalcontainer">
    </div>
  `
document.querySelector('.topnav').insertAdjacentHTML('beforeend', headerContent);