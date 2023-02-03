const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, string){
    let pasword = '';
    for(var i = 0; i < length; i++){
        pasword += characters[parseInt(Math.random() * string.length)];
    }
    return pasword
}
const key = generateKey(16, characters);
console.log(key)
