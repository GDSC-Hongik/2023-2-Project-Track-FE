fib = [1, 1]
for (let i =0; i<51; i++){
  fib.push(fib[i]+fib[i+1])
}
for (let i=0; i<50;i++){
  console.log(fib[i])
}