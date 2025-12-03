let journaltoggled=false;
let journalcontent =`
    <div id="journal">
    
    <button style="color:black;
              left:0%;
              font-size:20px;
              position: fixed;"
              onclick="togglejournal()";> X </button
              ">
      <p style="width:80%; margin-left: 10%">
      Remembered about this today. Yet to find a home for it so it'll go here.

      <iframe src="https://ckut.ca/archive-player/?id=23225" width="100%" height="190" frameborder="0" allowfullscreen></iframe>
    </p><pre>

      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⣠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣐⣴⣶⣷⣾⣿⣿⣿⣿⣿⣷⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠘⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣾⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣽⣿⣿⣿⣿⡿⠋⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠐⢿⣿⣿⣿⣿⣿⣿⡈⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠄⣾⣿⣿⣿⣿⣿⠷⠶⢤⡀⠀⢠⡴⠶⠛⢿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣿⡿⠿⠟⢑⠀⠀⠀⠐⠟⠝⠁⢸⣿⣿⣿⣿⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠑⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣟⣿⣿⣿⣿⣿⠀⠀⠀⢰⠶⠖⠀⠀⠀⠠⣸⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡄⠘⣲⠨⠈⢈⠜⠃⠀⣰⣿⣿⣿⣿⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠐⣛⣿⣿⣿⣿⣿⣿⡱⠖⠀⠘⢒⠀⡦⢊⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢙⢿⣿⣿⣻⣿⣷⠀⠘⠀⠈⠀⠰⢺⣿⣿⣿⣿⣿⣷⢄⡀⢀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⢤⢴⣶⣤⣶⣾⣿⣿⣿⣿⡇⠀⠆⢈⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣻⣿⣻⡿⢖⢀⠀⠀⠀⠀
⠀⠀⠀⡀⣛⣷⣯⣿⣿⣿⣿⣿⣿⢿⣯⣇⣄⡀⠐⡇⢀⢠⣽⠿⣿⣿⣿⣿⣿⣟⣿⣿⣿⡷⠠⠀⠀⠀⠀
  ⢀⢂⣹⣿⣿⣿⣿⣿⣿⣿⣿⣽⣍⠭⣽<b>I'm not sure about this</b>⣿⣿⡿⠃⢀
  ⠄⣷⣾⣭⡿⣿⣿⡿⣿⣿⣿⡿⣿⣿⣧⣻⡿<b>journal thing</b>⡿⣿⣿⣿⡿⠇⢵⠾⣆
 ⠨⣆⠶⣿⣿⣿⣿⣿⣯⣿⣿⣿⡇⡫⡿⢿⣾⣼⣿⣷<b>anymore....</b>⣿⣯⣿⣿⣽⣿⣿⣷⣠⠶⠀⠀
⠀⢨⣥⣿⣿⣿⣿⣿⣿⣿⣿⣿⢣⣾⣵⣴⣑⡭⣫⣿⣿⣿⣿⣿⣏⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⠷⠚⡖⠀
⠀⣼⣿⣙⣿⣿⣿⣿⣿⣿⣿⣇⠞⣽⣳⣡⢵⣿⣿⣿⣿⣿⢻⣿⢿⣿⡣⣿⣷⣿⣿⣿⣿⣿⣿⣾⣿⣶⡀
⠀⢿⠾⣿⣿⣽⣿⣿⣿⢟⣷⣷⣿⣾⣷⣿⣺⣿⣿⣿⣿⣿⣿⣿⣹⣿⣾⣯⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀
⡀⣿⣿⣿⣿⣿⣿⣿⢏⣯⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⡿⠇⣿⣽⣿⣿⡿⣿⡟⣿⣿⠀
⢠⣿⣿⢿⣟⣿⢏⣵⣫⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣳⣿⣿⣿⣿⣿⡿⠀
⢠⣾⣽⣿⢿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣽⣿⣿⠀
⠘⣿⣾⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡷⠀
</pre>
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
    