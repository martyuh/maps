//no type declaration file for faker within typescript so a warning is receiver, so you need to install it manually
//do that by npm @types/faker
// use ctrl and click on faker to access the file. you'll see all the annotations.
import faker from 'faker'
import { Mappable } from './CustomMap';

//class definition
 //implements an interface to ensure that an instance of this class satisfies the interface
 //essentially tells typescript to assist in ensuring that the class is implemented correctly, that the class has all the properties specified by Mappable
 export class User implements Mappable{
     //typing the properties
     //when you initialize a property it needs to be done so on the same line or within the constructor
     name: string
     location:{
         lat:number;
         lng:number;

     }
     color: string='red';

     constructor(){
         //initialize the variables in the constructor 
         //use faker package in npmjs.com to generate random data. use the modules
         this.name=faker.name.firstName();
         //initialize the location object
         this.location={
             //parsefloat converts it to a number for these randomly generated lat and lng
             lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
         }
     }
     //returns a string
     markerContent():string{
        return `User name is : ${this.name}`
     }
 } 