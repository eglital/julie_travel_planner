

const apiResponseHelper = {};


apiResponseHelper.responseChecker = function responseChecker(response) {
    if (!response.ok) {
        return new Error(response.status);
    }
    return response;
};

apiResponseHelper.parseToJSON = function parseToJSON(response) {
    return response.json();
};



export default apiResponseHelper;