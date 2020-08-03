class fizzBuzz {
  run() {
    var counter = 1;
    var result = [];
    while(counter<=100) {
      if (counter % 3 === 0 && counter % 5 === 0) {
        result.push('fizzbuzz');
      } else if (counter % 3 === 0) {
        result.push('fizz');
      } else if (counter % 5 === 0) {
        result.push('buzz');
      } else {
        result.push(counter);
      }
      counter++;
    };
    return result
  }
}
