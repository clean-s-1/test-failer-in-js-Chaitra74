const {expect} = require("chai");

let alertFailureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    if(celcius > 200){
        return 500;
    }    
    return 200;
}

function alertInCelcius(farenheit, networkStub) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkStub(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 1;
    }   
}

alertInCelcius(303.6, networkAlertStub);
alertInCelcius(400.5, networkAlertStub);

expect(alertFailureCount).equals(1);

console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
