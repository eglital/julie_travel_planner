const md5 = require("md5");
const secret = process.env.itinerarySecret || "t#he ca>t's paj=amas";

function hashId(id) {
  return `${md5(id + secret)}:${id}`;
}

function checkHash(hash) {
  let arr = hash.split(":");
  console.log(arr);
  if (`${md5(arr[1] + secret)}:${arr[1]}` === hash) {
    return arr[1];
  } else {
    return false;
  }
}

module.exports = { hashId, checkHash };
