// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakeCounter = 0;

function createPattern(){
  pattern = [];
  const patternLength = Math.floor(Math.random() * Math.floor(10)) + 1;
  for (let i = 0; i < patternLength; i++){
    pattern.push(Math.floor(Math.random() * Math.floor(6)) + 1)
  }
}

function startGame(){
    //initialize game variables
    clueHoldTime = 1000;
    mistakeCounter = 0;
    createPattern();
    console.log(pattern);
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    if (clueHoldTime >= 300) {
      clueHoldTime = .8 * clueHoldTime;
    }
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (btn == pattern[guessCounter]) {
      if (guessCounter == progress) {
        if(progress == pattern.length - 1){
          winGame();
        }
        else {
          progress++;
          playClueSequence();
        }
      }
      else {
        guessCounter++;
      }
  }
  else {
    if (mistakeCounter < 2) {
      mistakeCounter++;
      playClueSequence();
    }
    else {
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 311.6,
  2: 379.6,
  3: 542,
  4: 616.2,
  5: 696.2,
  6: 771.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)