/**
 * @param propertyName: String
 * @param subPropertyName [Optional] : String | String[ ] 
 * @param propertyValues: String | String[ ]
 * @returns Symbol | Regular Expression
  */

// Function for easier implementation of Regex
const tinyFy = (propertyName, subPropertyName, propertyValues)=>{
    /* If  property Values Argument not available then it executes */
    if(typeof propertyName!=="string"){
      console.error(new TypeError(`Type of propertyName of ${typeof propertyName} is not allowed`))
    }
    else if(!(typeof subPropertyName==="string"||typeof subPropertyName==="object")){
      console.error(new TypeError(`Type of subPropertyName of ${typeof subPropertyName} is not allowed`))
    }
    else if(typeof propertyName==="string"){
      // When 3rd Argument not used
      if(!propertyValues && subPropertyName){
        // For only single prop
        if(typeof subPropertyName==="string"){
          return `^${propertyName}-${subPropertyName}$`
        }
        // For Multi  Props
        else if(typeof subPropertyName==="object" && subPropertyName.length>1){
          return `^${propertyName}-(${subPropertyName.join("|")})$`
        }
      }
      // If there is a subPropertyName available then use it
      else if(propertyValues && typeof subPropertyName==="object"){
        if(!(typeof propertyValues==="string"||typeof propertyValues==="object")){
          console.error(new TypeError(`Type of propertyValues of ${typeof propertyValues} is not allowed`))
        }
        // For single property values
        else if(typeof propertyValues==="string"){
          return `^${propertyName}-(${subPropertyName.join("|")})-${propertyValues}$`
        }
        // For multi property Values
        else if(typeof propertyValues==="object" && propertyValues.length>1){
          return `^${propertyName}-(${subPropertyName.join("|")})-(${propertyValues.join("|")})$`
        }
      }
    }
  }

  module.exports = tinyFy