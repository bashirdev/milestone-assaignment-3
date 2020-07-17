function feetToMile(mile){
    var feet =   mile / 5280; 
    return feet ;
}
// console.log(feetToMile(10560));

//  woodCalculator start here
function woodCalculator(ch,tb,bd){

    var chair = 1 * ch;
    var table = 3 * tb;
    var bed = 5 * bd;
    
   const total= chair + table + bed;
   return total;
}
// console.log(woodCalculator(10,4,20));


// brickCalculator start here
 function brickCalculator(n){

var firstFloor, secondFloor, thirdFloor

if(n <= 10){

  return firstFloor = 15000 * n ;

}else if(n >= 11 && n <= 20 ){

    return secondFloor =  12000 * n ;

}else{
    return thirdFloor =  n * 10000 ;
}
}

// console.log(brickCalculator(10));






// tinyFriend start here
function tinyFriend(numbers){
 
    var tiny =numbers[0];
    for(var i=0; i<numbers.length; i++){
         var fList = numbers[i];
      if(fList.length < tiny.length){
            tiny = fList;
           
        }
    }

return tiny;
}

var friendsList = ['Hellel', 'bashir', 'a', 'monu', 'abc'];

// console.log(tinyFriend(friendsList));