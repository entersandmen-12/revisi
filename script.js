const message = `halo kak, idk it'll kinda shocking you or not but ihacoy.\nsince we being moots and we communicate intensely i got attraction towards you...\n\ni adore your sweet smile, those pretty eyes, the way you giggled, your voice, your vulnerable self you've been hide perfectly, the warmest soul. I adore everything about you, and fyi i got no interest to other people, kinda pathetic but after that moment i realise i really like you... i often think abt what's your activity and i want became a better person because of you, you're my muse, kak.\n\nI'm so sorry if this letter ruined your mood or making you disgusting over me, but i just want you to know that i've a feeling for you\n\nThank you for being the reason i became happy and smile while we talk even though just for a while, and i'm so sorry for this :(`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}