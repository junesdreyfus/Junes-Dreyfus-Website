let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button onclick="togglejournal()";> X </button
              ">
      <p style="width:80%; margin-left: 10%"><a href="../gestures/most-loved-of2025.html"><b><i><u>New Page! Most Loved Of 2025</u></b></i></a><br>
      7/01/2026:
      <video controls width="90%"><source src="../assets/journal/4.mp4" type="video/mp4"></video>
      <img src="../assets/journal/1.webp" ;>
      <img src="../assets/journal/2.webp" ;>
      <img src="../assets/journal/3.webp" ;>
      <p style="width:80%; margin-left: 10%">bonus : B12 pills from yakuza5 (girl same)</p>
      <img src="../assets/journal/4.webp" ;>
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
    