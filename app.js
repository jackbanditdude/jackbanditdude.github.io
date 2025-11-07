// import questionData from 'questions.json' assert { type: 'json' };

questionData = {
  "packs": [
    {
      "name": "Memory Lane",
      "color": "#F4A261",
      "questions": [
        "What’s a moment from our early days that still makes you smile?",
        "What did you think our life would look like 10 years ago? How close did we get?",
        "What’s a challenge we overcame together that made us stronger?",
        "What’s a tradition we used to have that you’d love to bring back?"
      ]
    },
    {
      "name": "Fun & Lighthearted",
      "color": "#2A9D8F",
      "questions": [
        "If we could take a spontaneous weekend trip, where would you want to go?",
        "What’s a silly habit I have that secretly makes you laugh?",
        "If our relationship were a movie, what genre would it be—and who would play us?",
        "What’s your favorite inside joke we’ve shared?"
      ]
    },
    {
      "name": "Rediscovery",
      "color": "#E76F51",
      "questions": [
        "What’s something you’ve learned or changed about yourself in the past year?",
        "Is there a dream or goal you’ve been quietly holding onto?",
        "What’s a hobby or interest you’d love to explore together?",
        "What’s something you wish I asked you about more often?"
      ]
    },
    {
      "name": "Emotional Intimacy",
      "color": "#9B5DE5",
      "questions": [
        "When do you feel most emotionally connected to me?",
        "What’s something you’re afraid to say but wish I understood?",
        "What’s a small gesture I do that makes you feel loved?",
        "How do you like to be comforted when you’re upset?",
        "What’s a moment when you felt truly safe with me?"
      ]
    },
    {
      "name": "Values & Beliefs",
      "color": "#F15BB5",
      "questions": [
        "What values do you hope we’re modeling for our kids?",
        "What does “success” mean to you now—and has that changed over time?",
        "What’s a belief you hold strongly that you rarely talk about?",
        "How do you decide what’s worth fighting for?",
        "What’s something you admire about how I handle challenges or decisions?"
      ]
    },
    {
      "name": "Future Dreams",
      "color": "#00BBF9",
      "questions": [
        "What’s a dream you’ve never said out loud?",
        "If we had unlimited time and resources, what would we build or create together?",
        "What kind of life do you imagine for us in 10 years?",
        "What’s something you want to experience before we grow old?",
        "How do you want to be remembered—as a partner, parent, or person?"
      ]
    },
    {
      "name": "Reading & Storytelling",
      "color": "#FDC500",
      "questions": [
        "What book had the biggest impact on you growing up?",
        "If you could live inside the world of any novel, which would it be?",
        "What kind of stories do you wish I asked you about more often?",
        "Is there a character from a book that reminds you of us?",
        "What’s a book you’ve always wanted to read but never got around to?"
      ]
    },
    {
      "name": "Movies & TV",
      "color": "#00F5D4",
      "questions": [
        "What movie do you think best represents our relationship?",
        "Which film or show do you secretly love but think I wouldn’t expect?",
        "If we had a movie night theme, what would you choose—comedy, thriller, romance, or documentary?",
        "What’s a scene from a movie that always makes you emotional?",
        "Who would play you in a biopic—and who would direct it?"
      ]
    },
    {
      "name": "Games & Play",
      "color": "#B5E48C",
      "questions": [
        "What’s your favorite game to play—board, video, or otherwise?",
        "If we designed a game together, what would it be about?",
        "What kind of player are you—competitive, cooperative, chaotic?",
        "What’s a game from childhood you wish we could play again?",
        "If we had a “date night challenge,” what kind of game would you want to try?"
      ]
    },
    {
      "name": "Creative Expression",
      "color": "#FF99C8",
      "questions": [
        "What’s a creative hobby you’ve always wanted to explore?",
        "When do you feel most creatively fulfilled?",
        "If we made something together—art, music, writing—what would it be?",
        "What’s a project you started but never finished that you’d love to revisit?",
        "What’s a compliment you’ve received about your creativity that stuck with you?"
      ]
    },
    {
      "name": "Music & Audio",
      "color": "#FF70A6",
      "questions": [
        "What song instantly takes you back to a specific moment in our relationship?",
        "If we had a couple’s playlist, what would be the first track?",
        "What kind of music do you listen to when you want to feel energized? Calm? Nostalgic?",
        "Is there a concert or performance you wish we’d seen together?",
        "What’s a sound or voice that brings you comfort?"
      ]
    },
    {
      "name": "Travel & Adventure",
      "color": "#3A86FF",
      "questions": [
        "What’s a place you’ve always dreamed of visiting together?",
        "If we could teleport anywhere for dinner tonight, where would we go?",
        "What’s your favorite memory from a trip we took?",
        "Are you more of a “plan every detail” traveler or “go with the flow”?",
        "What kind of vacation would recharge you most right now—quiet retreat, cultural deep dive, or wild adventure?"
      ]
    },
    {
      "name": "Food & Shared Tastes",
      "color": "#8338EC",
      "questions": [
        "What’s a meal that instantly reminds you of home?",
        "If we opened a restaurant together, what would be on the menu?",
        "What’s a dish you’ve always wanted to learn to cook?",
        "What’s your comfort food—and what does it say about you?",
        "If we had a signature couple’s cocktail or dessert, what would it be called?"
      ]
    },
    {
      "name": "Personal Growth",
      "color": "#FB5607",
      "questions": [
        "What’s something you’ve learned about yourself this year?",
        "What’s a fear you’ve overcome—or want to?",
        "If you could take a class or workshop just for fun, what would it be?",
        "What’s a personal goal you’ve been quietly working toward?",
        "How do you recharge when life feels overwhelming?"
      ]
    },
    {
      "name": "Parenting & Partnership",
      "color": "#FF006E",
      "questions": [
        "What’s one parenting moment that made you feel proud of us?",
        "How do you think we’ve changed as individuals since becoming parents?",
        "What’s something you hope our kids learn from watching our relationship?",
        "What’s a parenting challenge that surprised you—and how did we handle it?",
        "What’s one way we can support each other better in the chaos of family life?"
      ]
    }
  ]
};

const categoryButtons = document.getElementById('category-buttons');
const questionCard = document.getElementById('question-card');
const questionText = document.getElementById('question-text');
const closeCard = document.getElementById('close-card');
const resetSession = document.getElementById('reset-session');

let shownQuestions = JSON.parse(localStorage.getItem('shownQuestions')) || {};

function saveShownQuestions() {
  localStorage.setItem('shownQuestions', JSON.stringify(shownQuestions));
}

questionData.packs.forEach(pack => {
  const btn = document.createElement('button');
  btn.className = 'category';
  btn.style.backgroundColor = pack.color;
  btn.textContent = pack.name;
  btn.onclick = () => showRandomQuestion(pack);
  categoryButtons.appendChild(btn);
});

function showRandomQuestion(pack) {
  const seen = shownQuestions[pack.name] || [];
  const remaining = pack.questions.filter(q => !seen.includes(q));

  if (remaining.length === 0) {
    alert('You’ve seen all the questions in this category!');
    return;
  }

  const question = remaining[Math.floor(Math.random() * remaining.length)];
  shownQuestions[pack.name] = [...seen, question];
  saveShownQuestions();

  questionText.textContent = question;
  questionCard.classList.add('visible');
  questionCard.classList.remove('hidden');
}

closeCard.onclick = () => {
  questionCard.classList.remove('visible');
  questionCard.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

resetSession.onclick = () => {
  localStorage.removeItem('shownQuestions');
  shownQuestions = {};
  alert('Session reset! You can now revisit all questions.');
  location.reload();
};

// Swipe-to-close gesture
let touchStartX = 0;
questionCard.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

questionCard.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchEndX - touchStartX > 100) {
    closeCard.click();
  }
});