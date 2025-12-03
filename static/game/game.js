(function () {
  const target = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  const input = document.getElementById('guess-input');
  const guessBtn = document.getElementById('guess-btn');
  const resetBtn = document.getElementById('reset-btn');
  const feedback = document.getElementById('feedback');
  const attemptsLabel = document.getElementById('attempts');

  function updateAttempts() {
    attemptsLabel.textContent = attempts ? `Attempts: ${attempts}` : '';
  }

  function handleGuess() {
    const value = Number(input.value);
    if (!value || value < 1 || value > 100) {
      feedback.textContent = 'Enter a number between 1 and 100.';
      return;
    }
    attempts += 1;
    if (value === target) {
      feedback.textContent = `Correct! The number was ${target}.`;
    } else if (value < target) {
      feedback.textContent = 'Too low, try a higher number.';
    } else {
      feedback.textContent = 'Too high, try a lower number.';
    }
    updateAttempts();
  }

  function resetGame() {
    window.location.reload();
  }

  guessBtn.addEventListener('click', handleGuess);
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleGuess();
  });
  resetBtn.addEventListener('click', resetGame);
})();
