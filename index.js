function findMatching(names, personName){
    const nameMatch = names.filter(function(item){
        let lowerCaseitem = item.toLowerCase();
        let personLowerCase = personName.toLowerCase();
        return lowerCaseitem === personLowerCase
    })
    return nameMatch
}




function fuzzyMatch(nameArray, pattern){
     let weirdCase = nameArray.filter(function(name){  
       return name.startsWith(pattern)})
    return weirdCase    
}
// function fuzzyMatch(nameArray, pattern){
//    return nameArray.filter(function(name){  
//         return name.startsWith(pattern)})
//      }

function matchName(driverArray,personName){
    let personValue = driverArray.filter(function(user){
        return user.name === personName
    })
    return personValue
}