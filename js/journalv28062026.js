let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button onclick="togglejournal()";> X </button
              ">
      <p>
      <br>28/06/2026<br>
      Hello !── .✦<br>
      Feeling good, feeling hopeful, terrible cani-cula I admit. I finished my master's degree like one passes a kidney stone, though a fruitbearing one. But oh at least 'tis over.<br>☆彡<br>..✺<br>
       I got to spend a couple of weeks at a friend's, in Nice, tying up loose ends, tracing back on 2 year old footsteps. Now I'm ready to move forward with my life. It was surprisingly peaceful. <br><br>ᯓ★<br>
       It looks like ill be working all summer but I'm excited for what this routine brings. I have a lot of forms I want to create. And now aside from a couple of upcoming shows it seems like I'm free of all earthly commitments.<br>
       ❉<br>⚘<br>I'll post more pretty soon but in the meantime enjoy this phone photography. I might make a neocities for it at some point.𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟<br>
      <video controls width="90%"><source src="../assets/journal/skingrafting.mp4" type="video/mp4"></video>
      <p> my good friend <a href="https://www.instagram.com/hydrolyne/" target="_blank">hippolyne</a> checking out one of my instruments. You can play a slightly broken version of it in the /gesture tab
      <img src="../assets/journal/7.webp" ;><br>
      <img src="../assets/journal/8.webp" ;><br>
      <img src="../assets/journal/9.webp" ;><br>
      <img src="../assets/journal/10.webp" ;><br>
      <br><br><a href="https://youtu.be/rEeezkQczFc?si=wDJzKIiJGDQerzb6"target="_blank">~~~(m-_-)m and I listen to this lately ~~~(m-_-)m<br><br><br><br>
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
    