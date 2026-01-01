let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button style="color:black;
              left:0%;
              font-size:20px;
              position: fixed;"
              onclick="togglejournal()";> X </button
              ">
      <p style="width:80%; margin-left: 10%"><a href="/gestures/most-loved-of2025.html"><b><i><u>New Page! Most Loved Of 2025</u></b></i></a><br>
      02/12/2025 : I feel chilly.
      <video controls width="90%"><source src="https://junesdreyfus.github.io/Junes-Dreyfus-Website/assets/journal/4.mp4" type="video/mp4"></video>
      <img src="https://junesdreyfus.github.io/Junes-Dreyfus-Website/assets/journal/1.webp" ;>
      <img src="https://junesdreyfus.github.io/Junes-Dreyfus-Website/assets/journal/2.webp" ;>
      <img src="https://junesdreyfus.github.io/Junes-Dreyfus-Website/assets/journal/3.webp" ;>
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
    