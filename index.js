const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    const fareQuintupler = 5
    return fareMultiplier => fare * fareQuintupler
}

const fareDoubler = (fare) => fare * 2

const fareTripler = (fare) => fare * 3

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}
