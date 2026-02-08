let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button onclick="togglejournal()";> X </button
              ">
      <p><br><a href="../gestures/most-loved-of2025.html"><b><i><u>☆☆☆☆☆☆☆New Page! Most Loved Of 2025☆☆☆☆☆☆☆</u></b></i></a><br>
      
      <video controls width="90%"><source src="../assets/journal/5.mp4" type="video/mp4"></video>

      <br>07/02/2026<br>
      february sucks ass man haha. One of the upside of commuting a very long time for my job is that by the end of the bus ride, the city is completely unrecognizable. 
      My anxious heart can't stand to take a bus that's not 50 minutes early so I've been appreciating spontaneous dawn hikes through the marseilles industrial area. 
      Taking in the sights, and almost constantly tricking myself into being in a way better mood than is expected of me in my line of work.
      <br><br>Oh well.
      <video controls width="90%"><source src="../assets/journal/aview.mp4" type="video/mp4"></video>
      
      <img src="../assets/journal/ahighway.webp" ;>
      <img src="../assets/journal/apack.webp" ;>
      <img src="../assets/journal/athing.webp" ;>
      <img src="../assets/journal/abuildingnight.webp" ;>
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
    