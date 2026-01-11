let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button onclick="togglejournal()";> X </button
              ">
      <p><br><a href="../gestures/most-loved-of2025.html"><b><i><u>☆☆☆☆☆☆☆New Page! Most Loved Of 2025☆☆☆☆☆☆☆</u></b></i></a><br>
      <video controls width="90%"><source src="../assets/journal/4.mp4" type="video/mp4"></video>
      10/01/2026: god damn this thing is finally live! welcome everyone, thank you to everyone who lent a hand. <br>This is still very much unpolished, especially on mobile, but I'm quite happy with the result ╏]<br>
       We're still at the stage where it's not considered gauche to report on any bug so feel free to do so at junes.dreyfus@gmail.com<br>
       (say anything after that and i kill you).
      <img src="../assets/journal/1.webp" ;>
      <a href="https://youtube.com/playlist?list=OLAK5uy_n8Oj3-IQitRGpSMr2ex1rC6-VopMzdDv8&si=z97Wf7L9n1YfQJ_Y" target="_blank">ANyway you can listen to <b><u>this</u></b> album i like very much.</a>
<br>
      <img src="../assets/journal/2.webp" ;>
      <img src="../assets/journal/3.webp" ;>
      <p>bonus : B12 pills from yakuza5 (girl same)</p>
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
    