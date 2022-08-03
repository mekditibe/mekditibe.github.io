var listOfData=[{name:"clarinet",use:"music",price:"2000"}];

function play(m){
    var result="playing clarinet with " + m;
    return result;
}

module.exports.data={arrayData:listOfData,functionData:play};
