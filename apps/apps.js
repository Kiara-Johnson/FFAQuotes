let quotes = [
    `Where's my skirt!?`,
    `The calf's heading towards the corn! Someone get in front of it!`,
    `The bunny took my backpack!`,
    `We're one big crazy family.`,
    `It's a fairy pig!`,
    `Don't mind me, I'm just walking the lamb.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote generator
    const randomQuote = function() {
    const button = document.getElementById('quote-btn');
    button.addEventListener('click', () => {
        console.log("button click");
        document.querySelector('#quote').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    })
    };
    randomQuote();
   
  });