const list = [
  "Now is the time to try something new.",
  "Say hello to others. You will have a happier day.",
  "Time and patience are called for many surprises await you!",
  "here’s no such thing as an ordinary cat.",
  "Welcome” is a powerful word.",
  "Wish you happiness.",
  "Man is born to live and not prepared to live.",
  "Love lights up the world.",
  "It’s time to get moving. Your spirits will lift accordingly.",
  "Nature, time and patience are the three great physicians.",
  "No one can walk backwards into the future.",
  "It's not the number of breaths we take, but the number of moments that take our breath away.",
  "Life is what happens to you while you're busy making other plans.",
  "Live, laugh, love.",
  "Yesterday is history, tomorrow a mystery and today is a gift. That's why we call it the present.",
  "Live every day like it's your last.",
  "It takes more muscles to frown than it does to smile.",
  "Dream as if you'll live forever. Live as if you'll die today.",
  "You miss 100% of the shots you don't take.",
  "YOLO.",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "Always do your best. What you plant now, you will harvest later.",
  "Become the person who would attract the results you seek.",
  "Don't watch the clock; do what it does. Keep going.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "The secret of getting ahead is getting started.",
  "Quality performance starts with a positive attitude.",
  "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
  "Setting goals is the first step in turning the invisible into the visible.",
  "The harder the conflict, the more glorious the triumph.",
  "Motivation will almost always beat mere talent.",
  "There is always room at the top.",
  "It ain't over 'til it's over.",
  "A goal is a dream with a deadline.",
  "Big shots are only little shots who keep shooting.",
  "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on."
];

function pickRandomTip() {
  return list[Math.floor(Math.random() * list.length)];
}

module.exports = { pickRandomTip };
