let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button style="color:black;
              left:0%;
              font-size:20px;
              position: fixed;"
              onclick="togglejournal()";> X </button
              ">
      <p style="width:80%; margin-left: 10%">4th of december 2025 : I feel chilly.<br>
      <video controls width="90%"><source src="../assets/journal/4.mp4" type="video/mp4"></video>
      <img src="../assets/journal/1.webp" style="width:90%";>
      <img src="../assets/journal/2.webp" style="width:90%";>
      <img src="../assets/journal/3.webp" style="width:90%";>
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
    