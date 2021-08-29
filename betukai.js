const fizzbuzz=(number)=>{
    if (number>1){
      fizzbuzz(number-1);
    }
    if (number%3===0&&number%5===0){
      console.log("FizzBuzz");
    }
    else if (number%3===0){
      console.log("Fizz");
    }
    else if (number%5===0){
      console.log("Buzz");
    }
    else{
      console.log(number);
    }
  }
  
  fizzbuzz(20);