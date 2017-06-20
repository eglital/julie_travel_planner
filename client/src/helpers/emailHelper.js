import "isomorphic-fetch";
import ApiResponseHelper from "./apiResponseHelper";

export function shareByEmail(form) {
  return dispatch => {
    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });
    const options = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(form)
    };
    return fetch("/api/service/email", options)
      .then(ApiResponseHelper.responseChecker)
      .then(ApiResponseHelper.parseToJSON)
      .then(data => {
        console.log("email", data);
      })
      .catch(err => {
        console.log("sending email failure", err);
      });
  };
}
