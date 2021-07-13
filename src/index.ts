import {User} from './User';
import {Company} from './Company'

// const user = new User();
// const company = new Company();

// console.log(user,company)

//install type definition for global variable from the script tag. In this case for 'google'
// the .maps is the property for the global variable that has a bunch of other properties
//ctrl shift p type fold level 2
//instance of Map()class
// create root element for google map
//pass in a second property
//new instance of a map
const map = new google.maps.Map(document.getElementById('map'),
//object for the second argument that satisfies the the interface for the Map constructor 
{
    //passed in property that satisfies the 
    zoom: 1,
    center:{
        lat:0,
        lng:0 
    }
})