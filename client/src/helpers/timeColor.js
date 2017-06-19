let evenDepartureStyle = {
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  color: '#C17DBF'
};

let oddDepartureStyle = {
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  color: 'rgb(97, 91, 99)'
};

let evenArrivalStyle = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  color: '#C17DBF'
};

let oddArrivalStyle = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  color: 'rgb(97, 91, 99)'
};

let evenCardStyle = {
  height: '75px',
  borderColor: '#C17DBF'
};

let oddCardStyle = {
  height: '75px',
  borderColor: 'rgb(97, 91, 99)'
};

const determineColor = counter => {
  if (counter % 2 === 0) {
    return [evenArrivalStyle, evenDepartureStyle, evenCardStyle];
  } else {
    return [oddArrivalStyle, oddDepartureStyle, oddCardStyle];
  }
};

export default determineColor;
