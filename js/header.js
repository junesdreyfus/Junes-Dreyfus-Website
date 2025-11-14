
let headerContent =`


    <header>
        <a href="/Junes-Dreyfus-Website/" style="z-index:5000;">junes dreyfus</a>
    </header>

    
      <ul>
        <a href="/Junes-Dreyfus-Website/works.html"><li id="button1">
          works
        </li></a>

       <a href="#"><li id="button2" onclick="togglejournal()">
          journal
       </li> </a>

       <a href="#"><li id="button3" onclick="portfolio()">
          portfolio
       </li> </a>


       <a href="/Junes-Dreyfus-Website/findme.html"><li id="button4">
         find me!
       </li></a>
       </ul>
     <div class="journalcontainer">
    </div>
  `
document.querySelector('.topnav').insertAdjacentHTML('beforeend', headerContent);