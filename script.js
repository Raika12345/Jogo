body {
  background-color: #d6ecfa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h1 {
  color: #3b3b6d;
  margin-bottom: 10px;
}

#scoreboard {
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
  font-size: 1.2em;
}

#board {
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(4, 80px);
  gap: 10px;
}

.cell {
  width: 80px;
  height: 80px;
  background-color: #a7d6f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.2s;
}

.cell:hover {
  background-color: #c2e6fb;
}

.cell.played {
  animation: pop 0.3s ease;
}

@keyframes pop {
  0% { transform: scale(0.8); }
  100% { transform: scale(1); }
}

#message {
  margin-top: 20px;
  font-size: 1.4em;
  color: #3b3b6d;
}

#reset {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #3b3b6d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#reset:hover {
  background-color: #2a2a5d;
}
