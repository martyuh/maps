

//class is used to create an instance of an object
//the variable in the import statement can be used to type it as well
//these imports can be removed when you use an interface
// import { User } from "./User";
// import { Company } from "./Company";

//instructions on how to be an addMarker argument for the classes
//every class can reference this interface to determine how to show up on the map. it must have a location property and lat and lng that are numbers, and markerContent function that returns a string
//this can done by using interfaces
//export into other files to use as a type
export interface Mappable{
    location:{
        lat:number;
        lng:number;
    }
    // function that has to return a string 
    markerContent():string
    color:string;
}

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

        //receives mappable interface type return type of void
        //pass an instance of a User or | a compnany to the mappable parameter
        //or better pass an object that satisfies the Mappable interface 
        //typescript analyzes each instance and will allow only shared properties
        //to prevent this, and to prevent having to constantly import classes and listing new parameters for each instance class, you can you an interface
        addMarker(mappable:Mappable):void{
            //instance of the marker
            const marker = new google.maps.Marker({
                //markerOptions object map refers to the map that you want the marker on
                //googleMap is created and assigned to the customMap class
                map: this.googleMap,
                position: {
                    //from user|company 
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                }

            });

            //create an info window
            marker.addListener('click',()=>{
                const infoWindow = new google.maps.InfoWindow({
                    //pass in the options object
                    //in this case the object can have a content property
                    //call the markercontent method to render the html
                    content:mappable.markerContent()
                })
                //open the indow when the eventlistener is clicked and pass in a reference to the map and the marker
                infoWindow.open(this.googleMap,marker)
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