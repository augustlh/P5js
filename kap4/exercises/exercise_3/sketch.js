function setup() {
  console.log(2 == 2 && 2 == '2');  //true
  console.log(2 == 2 && 2 == '2' && 2 === '2'); //false
  console.log(2 == 2 && 2 == '2' || 2!=2);  //true
  console.log('hello' != 'Hello' && 'hello' !== 'Hello'); //true
  console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo'); //true
  console.log(2 === 2 || 2!=3 ); //trye
  console.log(2 === 2 || 2!='2' && (true || false)); //true
}

function draw() {
  background(220);
}
