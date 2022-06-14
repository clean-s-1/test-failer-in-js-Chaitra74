export class NetworkAlerter{
    alertFailureCount = 0;

    convertFahrenheitToCelcius(farenheit){
        return (farenheit - 32) * 5 / 9;
    }
    alertInCelcius(farenheit, networkStub) {
        const celcius = this.convertFahrenheitToCelcius(farenheit);
        const returnCode = networkStub(celcius);
        if (returnCode != 200) {       
            this.alertFailureCount += 1;
        }   
    }
}

