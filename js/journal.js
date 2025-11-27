let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button style="color:black;
              margin-left:28%;
              font-size:20px;
              position: fixed;"
              onclick="togglejournal()";> X </button
              ">
      <p style="width:80%; margin-left: 10%">

      Remembered about this today. Yet to find a home for it so it'll go here.

      <iframe src="https://ckut.ca/archive-player/?id=23225" width="100%" height="190" frameborder="0" allowfullscreen></iframe>

        <b>14/11/2025<br><br></b>
        I've been avoiding this specific street for the past few days, as I deemed not to be dressed well enough to see them. I've been in job-hunting mode thus
        my wardrobe has been restricting to a couple of ill-fitting work pants, androgynous as can be in the hope to counterbalance my face and hair and body which very much isn't. I felt today that I could however use 
        a bit of that courage that seeing the women of that street, the working women, gives me. It's very hilly, almost in a looney-toon's kind of way, the road
        unfurling with the faces of my sisters. I saw C. who told me that if I still couldn't find anything I could probably count on my "déesses", my goddesses.
        I laughed and said that I was indeed considering it, unsure if she meant what I thought she was saying. She then humiliated some poor guy, and so I left and giggled
        my way to the Alcazar.<br><br>
        <i>d(- -)b listening to a whole lot of mount eerie d(- -)b</i><br><br>
        <b>31/10/2025 16.11</b><br><br>

        <span style="color:orange">happy halloween</span>my neighbor is so loud.<br>
        I had to use mspaint for the placeholder (in the works section, very visible.)
         Those tools are wayy too refined for what they are while still lacking the most basic thing. I can't wait to have photoshop again.<br>
        <b>28/10/2025 16.11</b><br><br>
        these updates are getting too long. I'm sitting on the hotel bed, with my outside clothes still on.<br><br>
         I convinced my mom to do a hiking trip with me as I'm her funniest daughter. We've been in Stresa for about 3 days, and the charging
         holes are somehow too small to fit my computer's so I'm on limited time here.<br><br>
         <i>d(- -)b not listening to much but I've been reading crying of lot 49 by Pynchon. I left a bunch of flowers in there to dry but it's still fairly legible. d(- -)b</i><br><br>

        24/10/2025 14:55
        <br><br>Yesterday I realized that structurally, the library building I spend
        most of my time working at (the Alcazar library in marseille, which I love,
        especially the name even though they don't have toilet paper which is psychotic)
        structurally resembles my previous den and free-time-black-hole A.K.A. the 
        Concordia building in Montréal (don't remember which one sorry.)
        <br><br>Both buildings are O shaped and have some amount of verticality. I like 
        that the one in Marseille has some banner hanging at each floors to say which 
        section is there, it makes me think of giant bookmarks. <br><br>
        <i>d(- -)b listening to you got time and i got money by smerz d(- -)b\</i><br><br>
      </p>
      <img src="/assets/image.webp" alt="image of me">

      <p style="width:80%; margin-left: 10%">23/10/2025 15:28 <br><br>ADDED NOTHING OF VALUE.
        <br><br>Aujourd'hui comme tous les jours depuis que je n'ai plus de studio je suis allée à la bibliothèque de l'Alcazar.
        <br>J'ai demandé à une fille de garder mon ordinateur pendant que je faisais pipi.
        <br><br>Elle avait l'air hyper contente que je lui parle<br><br>
        <i>d(- -)b listening to uru uru Golden Child DJ E edit d(- -)b\</i><br><br>
        THIS WILL BE IN ITS OWN LITTLE SCROLLABLE DIALOG BOX (that way I can better format/add images:>)<br><br>
        I Might need to keep a 'FILM' button somewhere if i want it to remain in focus:7
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
    