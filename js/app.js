for (var i=1; i<=100; i++){
  if (i % 15 == 0){
    console.log('Fizz Buzz');
    document.write('Fizz Buzz');
  }
  else if (i % 5 == 0){
    console.log('Buzz');
    document.write('Buzz');
  }
  else if (i % 3 == 0){
    console.log('Fizz');
    document.write('Fizz');
  }
  else {
    console.log(i);
    document.write(i);
  }
}
