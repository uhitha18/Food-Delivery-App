#parcel
(Read documentation)
-Dev Build
-local server
-HMR(Hot Module replacement)- automatically refreshing the page 
-Parcel uses a file watching algorithm which is written in c++
-Caching-Faster builds
-Image Optimization
-Minification 
-Bundling
-Compress files
-Consistent Hashing
-Code splitting
-Differential Bundling- to support older browsers
-Diagnostics
-Error Handling
-HTTPS
-Tree Shaking -remove unused code

//
//React Element



//JSX- HTML like or XML like syntax
//jsx is converted to react elemenet (babel does this)
//our js engine does not directly understand jsx

//React components

//class based components -OLD WAY
//functional components -NEW WAY
//The above is called component composition (putting a component inside a component)

//above both syntaxes are correct




//Afunction which is returning a piece of jsx is called functional component


/*
*Header
*  -logo
*  -nav-items
*Body
*  -Search
*  -RestaurantContainer
*     -RestaurantCard
*        -Img
*        -Name of Rest,Star Rating,cuisines,delivery time
*Footer
*  -Copyright
*  -Links
*  -Adress
*  -Contact

*/

Two types of export and import
-Default export/import
export default nameofvariable
import nameofvariable from path
-Named export/import
-export const component;
-import {component} from path

//React Hooks
-These are noraml JS utility functions
-Two important react hooks:
  1.useState() -Super powerful State Variables in react
  2.useEffect()


