let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button onclick="togglejournal()";> X </button
              ">
      <p>
      <br>26/05/2026<br>
      <img src="../assets/journal/skygreen.webp" ;><br>
      I'm 25 now.<br>
      <img src="../assets/journal/1.webp" ;><br>
      I have a new job now.<br>
      <img src="../assets/journal/2.webp" ;><br>
      It's not as bad as it seems. I have my hands on many things right now. <br>
      <img src="../assets/journal/3.webp" ;><br>
      I finished a new book just now. It was by this author I love.<br>
      <img src="../assets/journal/4.webp" ;><br>
      I love the city but sometimes its grueling. I like my life, I like movies again somehow.<br>
      <img src="../assets/journal/5.webp" ;><br>
      The summer is pretty fucking hot. I don't know how I'll handle things later. At least I don't have to dress business appropriate anymore. The regulars are quite nice to me.<br>
      <img src="../assets/journal/6.webp" ;><br>
      Talk to you again later, okay ? I'll be going now.<br><br>
      <br><br><a href="https://www.youtube.com/watch?v=liVEAManYs4&list=LL&index=1"target="_blank">and I listen to this lately d(-_-)b<br><br><br><br>
      </p>
    </div>`

function togglejournal() {
  const container = document.querySelector('.journalcontainer');
  const existingJournal = document.getElementById('journal');

  if (!journaltoggled) {
    // Add journal content
    container.insertAdjacentHTML('beforeend', journalcontent);
    journaltoggled = true;
  } else {
    // Remove it if it exists
    if (existingJournal) {
      existingJournal.remove();
    }
    journaltoggled = false;
  }
}
    