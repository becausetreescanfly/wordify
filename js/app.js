// 100 sehr häufige englisch-deutsche Wörter mit Artikel
const vocab = [
  { en: "the man", de: "der Mann" },
  { en: "the woman", de: "die Frau" },
  { en: "the child", de: "das Kind" },
  { en: "the house", de: "das Haus" },
  { en: "the car", de: "das Auto" },
  { en: "the book", de: "das Buch" },
  { en: "the apple", de: "der Apfel" },
  { en: "the bread", de: "das Brot" },
  { en: "the water", de: "das Wasser" },
  { en: "the dog", de: "der Hund" },
  { en: "the cat", de: "die Katze" },
  { en: "the table", de: "der Tisch" },
  { en: "the chair", de: "der Stuhl" },
  { en: "the door", de: "die Tür" },
  { en: "the window", de: "das Fenster" },
  { en: "the school", de: "die Schule" },
  { en: "the teacher", de: "der Lehrer" },
  { en: "the student", de: "der Schüler" },
  { en: "the friend", de: "der Freund" },
  { en: "the mother", de: "die Mutter" },
  { en: "the father", de: "der Vater" },
  { en: "the brother", de: "der Bruder" },
  { en: "the sister", de: "die Schwester" },
  { en: "the city", de: "die Stadt" },
  { en: "the street", de: "die Straße" },
  { en: "the train", de: "der Zug" },
  { en: "the bus", de: "der Bus" },
  { en: "the bicycle", de: "das Fahrrad" },
  { en: "the garden", de: "der Garten" },
  { en: "the flower", de: "die Blume" },
  { en: "the tree", de: "der Baum" },
  { en: "the sun", de: "die Sonne" },
  { en: "the moon", de: "der Mond" },
  { en: "the star", de: "der Stern" },
  { en: "the sky", de: "der Himmel" },
  { en: "the river", de: "der Fluss" },
  { en: "the mountain", de: "der Berg" },
  { en: "the sea", de: "das Meer" },
  { en: "the fish", de: "der Fisch" },
  { en: "the bird", de: "der Vogel" },
  { en: "the egg", de: "das Ei" },
  { en: "the cheese", de: "der Käse" },
  { en: "the meat", de: "das Fleisch" },
  { en: "the soup", de: "die Suppe" },
  { en: "the salad", de: "der Salat" },
  { en: "the potato", de: "die Kartoffel" },
  { en: "the rice", de: "der Reis" },
  { en: "the butter", de: "die Butter" },
  { en: "the salt", de: "das Salz" },
  { en: "the pepper", de: "der Pfeffer" },
  { en: "the sugar", de: "der Zucker" },
  { en: "the coffee", de: "der Kaffee" },
  { en: "the tea", de: "der Tee" },
  { en: "the milk", de: "die Milch" },
  { en: "the juice", de: "der Saft" },
  { en: "the beer", de: "das Bier" },
  { en: "the wine", de: "der Wein" },
  { en: "the glass", de: "das Glas" },
  { en: "the cup", de: "die Tasse" },
  { en: "the plate", de: "der Teller" },
  { en: "the knife", de: "das Messer" },
  { en: "the fork", de: "die Gabel" },
  { en: "the spoon", de: "der Löffel" },
  { en: "the bed", de: "das Bett" },
  { en: "the room", de: "das Zimmer" },
  { en: "the bathroom", de: "das Badezimmer" },
  { en: "the kitchen", de: "die Küche" },
  { en: "the shop", de: "das Geschäft" },
  { en: "the market", de: "der Markt" },
  { en: "the money", de: "das Geld" },
  { en: "the ticket", de: "die Fahrkarte" },
  { en: "the clock", de: "die Uhr" },
  { en: "the time", de: "die Zeit" },
  { en: "the day", de: "der Tag" },
  { en: "the week", de: "die Woche" },
  { en: "the month", de: "der Monat" },
  { en: "the year", de: "das Jahr" },
  { en: "the morning", de: "der Morgen" },
  { en: "the evening", de: "der Abend" },
  { en: "the night", de: "die Nacht" },
  { en: "the family", de: "die Familie" },
  { en: "the work", de: "die Arbeit" },
  { en: "the job", de: "der Beruf" },
  { en: "the holiday", de: "der Urlaub" },
  { en: "the party", de: "die Party" },
  { en: "the music", de: "die Musik" },
  { en: "the movie", de: "der Film" },
  { en: "the picture", de: "das Bild" },
  { en: "the letter", de: "der Brief" },
  { en: "the newspaper", de: "die Zeitung" },
  { en: "the computer", de: "der Computer" },
  { en: "the phone", de: "das Telefon" },
  { en: "the key", de: "der Schlüssel" },
  { en: "the bag", de: "die Tasche" },
  { en: "the shoe", de: "der Schuh" },
  { en: "the coat", de: "der Mantel" },
  { en: "the shirt", de: "das Hemd" },
  { en: "the dress", de: "das Kleid" },
  { en: "the trousers", de: "die Hose" }
];

let current = 0;
let correct = 0;
let questions = [];
let wrongGuesses = []; // Neue Variable für falsche Antworten
const totalQuestions = 10; // Für eine kurze Runde, kann angepasst werden

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function pickRandomChoices(correctDe, allVocab, n = 4) {
  const choices = [correctDe];
  const pool = allVocab.map(v => v.de).filter(de => de !== correctDe);
  shuffle(pool);
  while (choices.length < n && pool.length) {
    choices.push(pool.pop());
  }
  shuffle(choices);
  return choices;
}

function showQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }
  const q = questions[current];
  document.getElementById('english-word').textContent = q.en;
  const choices = pickRandomChoices(q.de, vocab);
  const choicesArea = document.getElementById('choices-area');
  choicesArea.innerHTML = '';
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.className = 'choice-btn';
    btn.onclick = () => {
      if (choice === q.de) {
        correct++;
      } else {
        wrongGuesses.push({
          en: q.en,
          correct: q.de,
          guess: choice
        });
      }
      current++;
      updateProgress();
      showQuestion();
    };
    choicesArea.appendChild(btn);
  });
}

function updateProgress() {
  document.getElementById('progress').textContent = `Frage ${current + 1} von ${questions.length}`;
}

function showResult() {
  document.getElementById('question-area').style.display = 'none';
  document.getElementById('choices-area').style.display = 'none';
  document.getElementById('progress-area').style.display = 'none';
  document.getElementById('result-area').style.display = 'block';
  document.getElementById('score').textContent = `Du hast ${correct} von ${questions.length} richtig!`;

  // Falsche Antworten anzeigen
  const wrongListId = 'wrong-list';
  let wrongList = document.getElementById(wrongListId);
  if (!wrongList) {
    wrongList = document.createElement('div');
    wrongList.id = wrongListId;
    document.getElementById('result-area').appendChild(wrongList);
  }
  if (wrongGuesses.length === 0) {
    wrongList.innerHTML = "<p>Alle Antworten waren richtig! 🎉</p>";
  } else {
    let html = "<h3>Falsch geratene Wörter:</h3><ul>";
    wrongGuesses.forEach(item => {
      html += `<li><strong>${item.en}</strong>: Deine Antwort: <span style="color:#c00">${item.guess}</span>, richtig: <span style="color:#080">${item.correct}</span></li>`;
    });
    html += "</ul>";
    wrongList.innerHTML = html;
  }
}

function restartGame() {
  current = 0;
  correct = 0;
  wrongGuesses = [];
  questions = vocab.slice();
  shuffle(questions);
  questions = questions.slice(0, totalQuestions);
  document.getElementById('question-area').style.display = '';
  document.getElementById('choices-area').style.display = '';
  document.getElementById('progress-area').style.display = '';
  document.getElementById('result-area').style.display = 'none';
  // Falsche Liste zurücksetzen
  const wrongList = document.getElementById('wrong-list');
  if (wrongList) wrongList.innerHTML = '';
  updateProgress();
  showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('restart-btn').onclick = restartGame;
  restartGame();
});
