// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("walk the dogs");

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}
mondayWork();
mondayWork("code");

function wrapAdjective(highlight = "*") {
    return function(something = "a hard worker") {
        return `You are ${highlight}${something}${highlight}!`
    }
}
wrapAdjective("||")("a dedicated programmer");