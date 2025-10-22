let headerContent =`<nav class="topnav">
    <header>
        <a href="index.html">junes dreyfus</a>
    </header>
      
        <li id="button1">
         <a href="works.html">works</a>
        </li>

        <li id="button2">
          <a href="dkhw.html">films</a>
        </li>

       <li id="button3">
          <a href="#">portfolio</a>
       </li> 

       <li id="button4">
         <a href="findme.html">find me!</a>
       </li>`;
document.querySelector('#buttoncontainer').insertAdjacentHTML('beforeend', headerContent);