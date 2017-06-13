/**
 * Create an itinerary object for



*/
import moment from 'moment';
const ItineraryHelper = {};

ItineraryHelper.createItineraryObj = function createItineraryObj(itineraryId) {
    let endOfDay = moment().endOf('day');
    return {
        id: itineraryId,
        expirationDate: endOfDay
    };
};

ItineraryHelper.setItineraryObj = function setItineraryObj(itineraryId) {
    localStorage.setItem('itinerary', JSON.stringify(ItineraryHelper.createItineraryObj(itineraryId)));
};

ItineraryHelper.getItineraryObj = function getItineraryObj(){
    return JSON.parse(localStorage.getItem('itinerary'));
};

ItineraryHelper.isExpired = function isExpired() {
    let itineraryObj = ItineraryHelper.getItineraryObj();
    return (moment() >= moment(itineraryObj.expirationDate));
};



export default ItineraryHelper;