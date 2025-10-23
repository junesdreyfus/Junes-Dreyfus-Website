
let headerContent =`
    <header>
        <a href="/index.html">junes dreyfus</a>
    </header>
      
        <a href="/works.html"><li id="button1">
          works
        </li></a>

       <a href="#"><li id="button2" onclick="journal()">
          journal
       </li> </a>

       <a href="#"><li id="button3" onclick="portfolio()">
          portfolio
       </li> </a>


       <a href="/findme.html"><li id="button4">
         find me!
       </li></a>
      
  `
document.querySelector('.topnav').insertAdjacentHTML('beforeend', headerContent);
