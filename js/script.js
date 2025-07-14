let wins = 0, losses = 0, ties = 0;
    let autoPlayInterval;

    const emojis = {
      rock: '✊',
      paper: '✋',
      scissors: '✌️'
    };

    function getComputerMove() {
      const moves = ['rock', 'paper', 'scissors'];
      return moves[Math.floor(Math.random() * 3)];
    }

    function getResult(player, computer) {
      if (player === computer) return 'tie';
      if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) return 'win';
      return 'lose';
    }

    function playGame(playerMove) {
      const computerMove = getComputerMove();
      const result = getResult(playerMove, computerMove);

      document.getElementById('moves').textContent =
        `Your move: ${playerMove} ${emojis[playerMove]} | Computer move: ${computerMove} ${emojis[computerMove]}`;

      if (result === 'win') {
        wins++;
        document.getElementById('result').textContent = `You Win! ${playerMove} beats ${computerMove}`;
      } else if (result === 'lose') {
        losses++;
        document.getElementById('result').textContent = `You Lose! ${computerMove} beats ${playerMove}`;
      } else {
        ties++;
        document.getElementById('result').textContent = `It's a Tie! You both chose ${playerMove}`;
      }

      updateScore();
    }

    function updateScore() {
      document.getElementById('wins').textContent = wins;
      document.getElementById('losses').textContent = losses;
      document.getElementById('ties').textContent = ties;
    }

    function startAutoPlay() {
      stopAutoPlay(); // prevent multiple intervals
      autoPlayInterval = setInterval(() => {
        const move = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        playGame(move);
      }, 1000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }