const returnFirstTwoDrivers= (array) => {
    let sliced = array.slice(0,2)
     return sliced;
    }

const returnLastTwoDrivers= (array) => {
        let sliced = array.slice(-2)
         return sliced;
        }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    let mult = function(price) {
        return price * num1
    }
    return mult;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}