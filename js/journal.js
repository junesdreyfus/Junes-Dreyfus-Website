let journaltoggled=false;
let journalcontent =`
    <div id="journal">
      <p style="width:80%; margin-left: 10%">
        24/10/2025 14:55
        <br><br>Yesterday I realized that structurally, the library building I spend
        most of my time working at (the Alcazar library in marseille, which I love,
        especially the name even though they don't have toilet paper which is psychotic)
        structurally resembles my previous den and free-time-black-hole A.K.A. the 
        Concordia building in Montréal (don't remember which one sorry.)
        <br><br>Both buildings are O shaped and have some amount of verticality. I like 
        that the one in Marseille has some banner hanging at each floors to say which 
        section is there, it makes me think of giant bookmarks. <br><br>
        <i>d(- -)b listening to uru uru Golden Child DJ E edit d(- -)b\</i><br><br>
      </p>
      <img src="/assets/image.gif" alt="image of me">
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
    