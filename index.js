// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}
const returnLastTwoDrivers = (drivers)=>drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function (multiplier) {
//   return function (fare) {
//     return fare * multiplier;
//   };
// };

const createFareMultiplier = (multiplier)=>{
  return (fare) => fare * multiplier
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const  fetchSpecifiedDrivers = function(drivers, callback) {
  return callback(drivers)
};
