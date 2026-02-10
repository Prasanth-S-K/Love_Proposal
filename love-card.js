let noCount = 0;
let step = 0;
let noRun = 0;
let secondChanceShown = false;
let heartInterval;
let heartSpeed = 300;

const questionVideos = {
  0: "./assests/one/avan_unnai_padaithan.mp4",
  1: "./assests/two/pushpa.mp4",
  2: "./assests/three/SENJITALEY.mp4",
  3: "./assests/four/valithunaiae.mp4",
  4: "./assests/five/sidu.mp4",
  5: "./assests/six/marakavillaiae.mp4",
  6: "./assests/seven/vilambara idaivelai.mp4",
  7: "./assests/four/Vaa senthazhinii❤--  tag yours---- Subscribe for more-- like potrugaa marakaama --------(720P_HD).mp4",
  8: "./assests/five/dheema.mp4",
  9: "./assests/one/AZHAGIYE MARRY ME😍❤_4K 2160p_ _whatsappstatus 😇⚡_OWN EDIT💕(720P_HD).mp4",
  Final_message: "./assests/Final_message/promise.mp4",
  Final_final: "./assests/Final_final/marriage.mp4",
};

function updateVideo(key) {
  const video = document.getElementById("questionVideo");
  if (!video || !questionVideos[key]) return;
  video.src = questionVideos[key];
  video.load();
  video.play();
}

window.onload = () => {
  updateVideo(0);
  startHearts(300);
};

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize =
    (heartSpeed <= 100 ? 24 : 14) + Math.random() * 20 + "px";

  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
function startHearts(speed) {
  clearInterval(heartInterval);
  heartInterval = setInterval(createHeart, speed);
}

function enableAudio() {
  const video = document.getElementById("questionVideo");
  if (!video) return;

  video.muted = false;
  video.volume = 1;
}
function toggleMute() {
  const video = document.getElementById("questionVideo");
  const btn = document.getElementById("muteBtn");

  if (!video) return;

  video.muted = !video.muted;
  btn.innerText = video.muted ? "🔇" : "🔊";
}

function handleYes() {
  enableAudio();
  showFinalLoveMessage();
}

function handleNo() {
  enableAudio();
  noCount++;
  step++;

  const q = document.getElementById("question");

  if (step <= 9) {
    updateVideo(step);
  }

  if (step === 1) {
    q.innerText = "Heyyy 😳 that NO felt illegal… try again?";
  } else if (step === 2) {
    q.innerText = "Come on 😌 you didn’t even think for 2 seconds!";
  } else if (step === 3) {
    q.innerText = "Ouch 💔 my heart just skipped a beat… want to fix it?";
  } else if (step === 4) {
    q.innerText = "Are you testing my patience 😏 or just teasing me?";
  } else if (step === 5) {
    q.innerText = "Be honest 😜 your finger is hovering over YES, right?";
  } else if (step === 6) {
    q.innerText = "Okay now I’m blushing 🫣 why are you still saying NO?";
  } else if (step === 7) {
    q.innerText = "I’ll stop asking… if you stop being this cute 😌❤️";
  } else if (step === 8) {
    q.innerText = "Last warning ⚠️ I might fall harder if you click NO again";
  } else {
    q.innerText =
      "Alright enough drama 😤 we both know the truth… Will you marry me? 💍❤️";

    document.getElementById("buttons").innerHTML = `
    <button class="yes" onclick="showFinalLoveMessage()">Yes 😍</button>
    <button class="yes" onclick="showFinalLoveMessage()">YES ❤️</button>
  `;
  }
}

function showFinalLoveMessage() {
  startHearts(100);
  document.body.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";

  let extraPrompt = "";

  if (noCount > 1 && noRun === 0 && !secondChanceShown) {
    extraPrompt = `
      <p><strong>Still want to reject me? 💔</strong></p>
      <button class="yes" onclick="enableNoRun()">Give me a second chance</button>
      <br><br>
    `;
    secondChanceShown = true;
  }

  document.getElementById("card").innerHTML = `
    <video id="questionVideo" autoplay loop playsinline></video>
    <h2>💍 Hurray, I know you love me.</h2>
    <p>I am blessed to have you.</p>
    <p>I wanna live the rest of my life with you.</p>
    <p><strong>I love you ❤️</strong></p>
    ${extraPrompt}
    <button class="yes" onclick="shareLove()">Share this ❤️</button>
  `;

  updateVideo("Final_message");
  startConfetti();
}

function showNoRunFinalMessage() {
  startHearts(60);

  document.body.style.background = "linear-gradient(135deg, #ffdde1, #ee9ca7)";

  document.getElementById("card").innerHTML = `
    <video id="questionVideo" autoplay loop playsinline></video>
    <h2>❤️ I know you can’t reject me 😌</h2>
    <p>I know you love me.</p>
    <p>I wanna be yours forever.</p>
    <p><strong>I love you ❤️</strong></p>
    <button class="yes" onclick="shareLove()">Share this ❤️</button>
  `;

  updateVideo("Final_final");
  startConfetti();
}

function enableNoRun() {
  noRun = 1;

  document.getElementById("card").innerHTML = `
    <video id="questionVideo" autoplay loop playsinline></video>
    <h2>I bet you can't reject me 😏 Try if you can!</h2>
    <div id="buttons">
      <button class="yes" onclick="showNoRunFinalMessage()">Yes</button>
      <button class="no" id="runNo">No</button>
    </div>
  `;

  updateVideo("Final_message");

  const noBtn = document.getElementById("runNo");
  noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 350 + "px";
    noBtn.style.top = Math.random() * 250 + "px";
  });
}

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    setTimeout(createHeart, i * 100);
  }
}

function shareLove() {
  const text =
    "I said YES!\n\n" + "I am blessed,\n" + "Loved,\n" + "And forever taken";
  const url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}
