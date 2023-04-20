const date = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const printDate=function(){
    console.log("Current date is: ",date);
}
const printMonth = function(){
    const month= date.getMonth();
    console.log("Current month is: ", months[month]);
}
const getBatchInfo = function(batch, weekDay, topic){
    console.log(`${batch}, ${weekDay}, the topic for today is ${topic}`);
}
module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;