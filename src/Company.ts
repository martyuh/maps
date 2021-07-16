import faker from 'faker';
import { Mappable } from './CustomMap';
 //implements an interface to ensure that an instance of this class satisfies the interface
 //essentially tells typescript to assist in ensuring that the class is implemented correctly, that the class has all the properties specified by Mappable
export class Company implements Mappable{
    // typing the properties
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    };
    color:string='red'
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
    markerContent():string{
        //content property will convert html
        return `
        <div>
        <h1> Company name is ${this.companyName} </h1>
        <h3>Catchphrase is ${this.catchPhrase}</h3>
        </div>
        `
    }
}