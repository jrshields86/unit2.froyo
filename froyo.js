
const inputFroyo = window.prompt('Please enter a list of froyo flavors separated by commas', 'vanilla, vanilla, vanilla, strawberry, coffee, coffee');
const froyoArray = inputFroyo.split(',');
const stats = {

};

for(let i = 0; i < froyoArray.length; i++){
    const flavor = froyoArray[i];
    if(stats[flavor] === undefined){
        stats[flavor] = 0;
    }
    stats[flavor] = stats[flavor] + 1;
}
console.log(stats);