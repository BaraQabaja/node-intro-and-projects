//Modules 

//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names=require('./2.1-names')
const sayHi=require('./2.2-utils')
const items=require('./2.3-alternative-flavor-for-modules')

//! Note: in the following line we say that the code executes even if we did not assign it to a variable 
require('./2.4-mind-grenade')
//********************************************************************* */
const {bara,peter}=names

console.log(items)
console.log(items.item[0])
console.log(items.item[1])
console.log(items.singlePerson.name)
sayHi('susan')
sayHi(bara)
sayHi(peter)