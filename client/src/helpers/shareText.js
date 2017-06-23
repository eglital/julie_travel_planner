const shareText = itinerary => {
  let text = '';
  for (let i = 1; i < itinerary.length - 1; i++) {
    text += itinerary[i].name;
    if (i < itinerary.length - 3) {
      text += ', ';
    } else if (i === itinerary.length - 3) {
      text += ', and ';
    }
  }
  return `Checking out ${text} today.`;
};

export default shareText;
