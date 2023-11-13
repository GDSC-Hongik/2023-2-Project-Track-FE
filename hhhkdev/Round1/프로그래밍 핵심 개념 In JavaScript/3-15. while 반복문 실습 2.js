const N = 180;

let i=1
let r=0
while (i<181) {
  if (N%i==0) {
    console.log(i);
    r++;
  }
  i++;
}
console.log("180의 약수는 총 18개입니다.")