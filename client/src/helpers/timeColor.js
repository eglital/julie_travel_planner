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
  color: '#929292'
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
  color: '#929292'
};

let evenCardStyle = {
  width: '98%',
  height: '75px',
  borderColor: '#C17DBF'
};

let oddCardStyle = {
  width: '98%',
  height: '75px',
  borderColor: '#929292'
};

const determineColor = counter => {
  if (counter % 2 === 0) {
    return [evenArrivalStyle, evenDepartureStyle, evenCardStyle];
  } else {
    return [oddArrivalStyle, oddDepartureStyle, oddCardStyle];
  }
};

export default determineColor;
