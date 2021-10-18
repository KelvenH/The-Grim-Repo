// global variables

// play background audio
const current_page = window.location.pathname;
const local = window.location.hostname;
console.log(current_page);

let main_image = document.querySelector('.main-scene-image');

let audio = document.getElementById('audio');
audio.volume = 0.25;

let isPlaying = false;

switch(current_page) {
  case '/':
      audio.setAttribute('src', 'assets/audio final/intro or outro/accompaniment epona-[AudioTrimmer.com]-extreme.mp3');
      break;
  case '/index.html':
      audio.setAttribute('src', 'assets/audio final/intro or outro/accompaniment epona-[AudioTrimmer.com]-extreme.mp3');
      break;
  case '/scene1.html':
      audio.setAttribute('src', 'assets/audio/Scene1_background_audio.m4a');
      if(local === '127.0.0.1' || local === 'localhost') {
          main_image.style.backgroundImage = "url(assets/images/beds.jpg)";
      } else {
          main_image.style.backgroundImage = "url(../images/beds.jpg)";
      }
      break;
  case '/scene2.html':
      audio.setAttribute('src', 'assets/audio/Hallway.mp3');
      if(local === '127.0.0.1' || local === 'localhost') {
          main_image.style.backgroundImage = "url(assets/images/hallways.jpeg)";
      } else {
          main_image.style.backgroundImage = "url(../images/hallways.jpeg)";
      }
      break;
  case '/scene2-extra.html':
      audio.setAttribute('src', 'assets/audio/Ritual.mp3');
      if(local === '127.0.0.1' || local === 'localhost') {
          main_image.style.backgroundImage = "url(assets/images/ritual.jpeg)";
      } else {
          main_image.style.backgroundImage = "url(../images/ritual.jpeg)";
      }
      break;
  case '/scene3.html':
      audio.setAttribute('src', 'assets/audio/Scene3 - background-audio.m4a');
      if(local === '127.0.0.1' || local === 'localhost') {
          main_image.style.backgroundImage = "url(assets/images/office.jpeg)";
      } else {
          main_image.style.backgroundImage = "url(../images/office.jpeg)";
      }
      break;
  case '/end.html':
      audio.setAttribute('src', 'assets/audio final/intro or outro/Kawir - (Hymn to Apollo)-[AudioTrimmer.com] long version.mp3');
      if(local === '127.0.0.1' || local === 'localhost') {
          main_image.style.backgroundImage = "url(assets/images/esp-1.jpg)";
      } else {
          main_image.style.backgroundImage = "url(../images/esp.jpg)";
      }
      break;
  default:
      break;
}

function togglePlay() {
  isPlaying ? audio.pause() : audio.play();
}

audio.onplaying = function () {
  isPlaying = true;
}
audio.onpause = function () {
  isPlaying = false;
}

// Scene 2 Routes
function Scene2() {
  window.location.href = '/scene2.html';
}

function Scene2_Extra() {
  window.location.href = '/scene2-extra.html';
};

function Scene3() {
  window.location.href = '/scene3.html';
}

function phoneOn() {
  let myModalEl = document.getElementById('Modal-office');
  let modal = bootstrap.Modal.getInstance(myModalEl)
  modal.hide();
  
  
  //remove black image overlay
  //document.getElementById("s3-img-overlay").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("s3-img-overlay").style.display = "none";

  //activate torchlight effect over main image
  document.getElementById("office-img").className += " torch";


  function update(e){
    let image = document.querySelector("div.s3-main-img");

    let rect = image.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  
}

// Replay Context of Scene 1
function replayContext() {
  let context = document.getElementById('Story-detail')
  let Paragraph = document.createElement('p')

  context.appendChild(Paragraph)

  // Replay Scene 1
  Paragraph.innerText = `My eyes open, I can't see at first, but gradually my vision comes into focus. Where the hell am I? Seems to be some form of medical room, but that smell... it's so rotten! How did I even get here? I feel like I must have been out for sometime.`

  // Replay Scene 2 - Extended
  if (context.classList.contains('scene2-extra')) {
    Paragraph.innerText = `I can hear someone's footsteps... It's getting louder, closer. They're headed towards me. There's a sign on the wall. A relic? A symbol? What does it mean? A fragment of my memory returns to me - I remember... a ritual. I remember... prayer, laughter, pain. I was... sacrificed? Why am I here?`
  }

  // Replay Scene 2
  if (context.classList.contains('scene2')) {
    Paragraph.innerText = `I can hear someone's footsteps... It's getting louder, closer. They're headed towards me. In another direction, towards the other end of the hall, there is a door... What do I do? Where should I go?`
  }

  Paragraph.classList.add('paragraph-position')
}
