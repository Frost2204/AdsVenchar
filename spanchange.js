window.addEventListener('DOMContentLoaded', function() {
    var spanElement = document.getElementById('wordSpan');
    var words = ['BOOST', 'AMPLIFY', 'IMPROVE'];
    var currentWordIndex = 0;

    function typeWriter() {
      var currentWord = words[currentWordIndex];
      var wordLength = currentWord.length;
      var typingSpeed = 100; // Speed in milliseconds per character
      var delayAfterTyping = 2000; // Delay in milliseconds after typing

      var i = 0;
      var typeInterval = setInterval(function() {
        if (i < wordLength) {
          spanElement.textContent += currentWord.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(function() {
            deleteCharacters();
          }, delayAfterTyping);
        }
      }, typingSpeed);
    }

    function deleteCharacters() {
      var currentWord = words[currentWordIndex];
      var wordLength = currentWord.length;
      var deletingSpeed = 100; // Speed in milliseconds per character

      var i = wordLength - 1;
      var deleteInterval = setInterval(function() {
        if (i >= 0) {
          spanElement.textContent = spanElement.textContent.slice(0, -1);
          i--;
        } else {
          clearInterval(deleteInterval);
          currentWordIndex = (currentWordIndex + 1) % words.length;
          setTimeout(function() {
            typeWriter();
          }, 500); // Delay before typing the next word
        }
      }, deletingSpeed);
    }

    typeWriter();
  });