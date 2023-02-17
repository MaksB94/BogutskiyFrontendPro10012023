1
let timer = 0;
function greetings(name,delayStr){
    let delay = 0;
    clearTimeout(timer)
    if(delayStr.includes('hour')){
       delay = parseInt(delayStr) * 1000 * 60 * 60
    }else if(delayStr.includes('minut')){
       delay = parseInt(delayStr) * 1000 * 60;
    }else{
       delay = parseInt(delayStr) * 1000;
    }
    timer = setTimeout(function(){
        alert(`Привет ${name}`)
    },delay);
}
greetings("Maks",'5 seconds')
2
function serializeOrDesirealize(str){
    try {
       return JSON.parse(str);
    } catch (e) {
       return JSON.stringify(str);
    }
}
serializeOrDesirealize('{ "name": "Maks", "age": "28" }');
3
function ckeckIsJson(str){
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
ckeckIsJson('{ "name": "Maks", "age": "28" }');