import {NetworkAlerter} from './NetworkAlerter.js';

class NetworkAlerterTester{
    networkAlertStub(celcius) { 
        if(celcius > 200){
            console.log(`Alert! Temperature is ${celcius} degrees`);
            return 500;
        }    
        return 200;
    }

    networkAlerterTest(){
        var networkAlerter = new NetworkAlerter();
        networkAlerter.alertInCelcius(303.6, this.networkAlertStub);
        console.assert(networkAlerter.alertFailureCount == 0);

        networkAlerter.alertInCelcius(400.5, this.networkAlertStub);
        console.assert(networkAlerter.alertFailureCount == 1);
    }    
}

var nwTester = new NetworkAlerterTester();
nwTester.networkAlerterTest();