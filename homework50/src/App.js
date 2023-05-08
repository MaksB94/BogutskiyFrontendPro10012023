
import './App.css';

import React, { useState } from 'react';

const SmileyVote = () => {
  // Масив об'єктів, що містить смайлики та лічильники кліків
  const [smileys, setSmileys] = useState([
    { id: 1, emoji: "😊", count: 0 },
    { id: 2, emoji: "😍", count: 0 },
    { id: 3, emoji: "😂", count: 0 },
    { id: 4, emoji: "😎", count: 0 },
    { id: 5, emoji: "🤔", count: 0 },
  ]);

  // Функція, яка збільшує лічильник кліків для вибраного смайлика
  const handleVote = (id) => {
    const updatedSmileys = smileys.map(smiley => {
      if (smiley.id === id) {
        return { ...smiley, count: smiley.count + 1 }
      }
      return smiley;
    });
    setSmileys(updatedSmileys);
  };

  // Функція, яка знаходить смайлик з максимальним лічильником
  const findWinner = () => {
    let maxCount = 0;
    let winner = null;
    smileys.forEach(smiley => {
      if (smiley.count > maxCount) {
        maxCount = smiley.count;
        winner = smiley;
      }
    });
    return winner;
  };

  // Створюємо список смайликів з лічильниками кліків
  const smileyList = smileys.map(smiley => (
    <div key={smiley.id}>
      <span onClick={() => handleVote(smiley.id)}>
        {smiley.emoji}
      </span>
      <span>{smiley.count}</span>
    </div>
  ));

  // Отримуємо переможця та відображаємо його
  const winner = findWinner();
  const winnerEmoji = winner ? winner.emoji : null;
  const winnerCount = winner ? winner.count : null;

  return (
    <div>
      {smileyList}
      <button onClick={findWinner}>Show Results</button>
      {winnerEmoji && <div>The winner is: {winnerEmoji} with {winnerCount} votes!</div>}
    </div>
  );
};

export default SmileyVote;
