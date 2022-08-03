var listOfData=[{name:"violin",use:"music",price:"2500"}];

function play(m){
    var result="playing violin with " + m;
    return result;
}

module.exports.data={arrayData:listOfData,functionData:play};
