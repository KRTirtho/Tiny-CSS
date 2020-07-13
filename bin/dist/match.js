// The classes got from the provided HTML File 
const htmlClasses = require("./readfile")
// All the classes that Tiny has with a regular expression
const {staticUtility} = require("./classes")

/**
 * TODO: Have to split the html classes and take out only the text not 'class=""' 
  */

// Now Mapping through the array of classes and removing the class="" using split("=") 

const removedClassText = htmlClasses.map(classes=>{
    return classes.split("=")[1]
})

// Removing the quotes & before and after space from strings
const removedQuoteAndSpace = removedClassText.map(classes=>{
   for(let i = 0; i < classes.length; i++){
        if(classes[i]==="\""){
            return classes.split('"').join("")
        }
        else if(classes[i]==="'"){
            return classes.split("'").join("")
        }
    }
}).join(" ").split(" ");

// Now only keeping the elements which aren't a " " (empty string)
const removedEmptyString = [];
removedQuoteAndSpace.map(classes=>{
    if(classes!==" " && classes !==""){
        removedEmptyString.push(classes)
    }
})

//  Now only the unique ones should remain

const uniqueClasses = []  
new Set(removedEmptyString).forEach(classes=>{
    if(classes)uniqueClasses.push(classes)
})

// classes that only belong to TinyCSS
const onlyTinyClasses = [];

uniqueClasses.forEach(classes=>{
    // First Checking for staticUtility Classes for this
    if(staticUtility.test(classes)){
        onlyTinyClasses.push(classes)
    }
})

module.exports = onlyTinyClasses