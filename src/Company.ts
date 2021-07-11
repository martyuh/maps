import faker from 'faker';

export class Company {
    // typing the properties
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    };
    constructor(){
        //initialize the properties
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location={
            //convert to a number
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
}