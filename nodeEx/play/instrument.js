var clarinet= require('./clarinet');
var violin= require('./violin');

var listOfData=[...clarinet.data.arrayData,...violin.data.arrayData];
var funObj= {clarinet:clarinet.data.functionData,violin: violin.data.functionData}

module.exports={listOfData:listOfData,functionData:funObj};

