//class is used to create an instance of an object
//the variable in the import statement can be used to type it as well
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
    //type annotation for the variables
    //googleMap is going to be an instance of the Map class
    //public modifier means anyone outside of the class can access the property
    //private makes it so that you can't access googlemap through an instance of customMap
    private googleMap: google.maps.Map;

    //have it so that the html element root id can be passed into the constructor
    constructor(divId:string){
//install type definition for global variable from the script tag. In this case for 'google'
// the .maps is the property for the global variable that has a bunch of other properties
//ctrl shift p type fold level 2
//instance of Map()class
// create root element for google map
//pass in a second property
//new instance of a map
//hide the google map methods by creatinga custommap class
//this prevents the code from being broken by others engineers down the line.
        this.googleMap=new google.maps.Map(document.getElementById('map'),
        //object for the second argument that satisfies the the interface for the Map constructor 
        {
            //passed in property that satisfies the 
            zoom: 1,
            center:{
                lat:0,
                lng:0 
            }
        })
        

    }

        //receives user which is a User type witha return type of void
        //pass an instance of a User or | a compnany to the mappable parameter
        //typescript analyzes each instance and will allow only shared properties
        //to prevent this, and to prevent having to constantly import classes and listing new parameters for each instance class, you can you an interface
        addMarker(mappable:User|Company):void{
            //instance of the marker
            new google.maps.Marker({
                //markerOptions object map refers to the map that you want the marker on
                //googleMap is created and assigned to the customMap class
                map: this.googleMap,
                position: {
                    //from user|company 
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                }

            })
        }

        // //bad code using two methods that are very similar
        // //receives user which is a User type witha return type of void
        // addUserMarker(user:User):void{
        //     //instance of the marker
        //     new google.maps.Marker({
        //         //markerOptions object map refers to the map that you want the marker on
        //         //googleMap is created and assigned to the customMap class
        //         map: this.googleMap,
        //         position: {
        //             //from user
        //             lat: user.location.lat,
        //             lng: user.location.lng
        //         }

        //     })
        // }
        //bad code
        // addCompanyMarker(company: Company):void{
        //     new google.maps.Marker({
                //markerOptions object map refers to the map that you want the marker on
                //googleMap is created and assigned to the customMap class
                // map: this.googleMap,
                // position: {
                    //from company
                    // lat: company.location.lat,
                    // lng: company.location.lng
        //         }

        //     })
        // }
    
    //initialize the variable
}