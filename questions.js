//what does func mean and how does it work in this loop below???

//function doAllMath(a,b,mathFuncs){
    //for (let func of mathFuncs){
      //  console.log(func(a,b));
    //}
//}

// for each 
const colors= ['teal', 'cyan', 'peach','purple'];

//colors.forEach(function);


//I dont know what this does 

//const colors = ['teal', 'cyan', 'peach', 'purple'];

//function yell (val, i) {
    //const caps = val.toUpperCase();
    //console.log(`At index ${i}, ${caps}`);
//}

//colors.forEach(yell);

// in the video all it does is put At index infront of all the colors 



// Now we are trying to get the total for 

//const prices = [30.99, 19.99, 2.5, 99.0];

//let total = 0; 

//prices.forEach(function(price) {
    //total += price; 
//});

//console.log(total);



//function forEach(arr,callback){
    //for(let i = 0; i < arr.length; i++) {
      //  callback(arr[i]);
   // }
//}

//forEach(colors, function(color, i){
    //console.log(color.toUpperCase(), 'at index of:', i);
//});

let numbers = [1,2,3];

numbers.map(function(value,index,array){
return value * 10;
console.log(value);
});