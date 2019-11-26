var readlineSync = require('readline-sync');
const MAX= Number.MAX_SAFE_INTEGER
const MIN= Number.MIN_SAFE_INTEGER
let temp=0
let temptwo=0
let temperature=0
let sum=0
let counter=0
let scaleone="hello"
 do{
   scaleone =(readlineSync.question("Enter an origin scale: "))
   if(scaleone==C||scaleone==c){temp=1}
   if (scaleone==F||scaleone==f){temp=2}
   if(scaleone==K||scaleone==k){temp=3}
} while(temp==0);
do{
  scaletwo =(readlineSync.question("Enter a destination scale: "))
  if(scaletwo==C||scaletwo==c){temptwo=1}
  if (scaletwo==F||scaletwo==f){temptwo=2}
  if(scaletwo==K||scaletwo==k){temptwo=3}
} while(temptwo==0);
do{
  temperature=Number(readlineSync.question("Enter a temperature: "))

}while(temperature<MIN||temperature>MAX||Number.isNan(temperature))
if(temp==temptwo){console.log(temperature+scaleone)}
if(temp==1&&temptwo==2)
{
  temperature=tempature*9/5;
  temperature=temperature+32;
  temperature=tempature*9/5;
  temperature=temperature+32;
  console.log(temperature+"F")
}
if (temp==3&&temptwo==2)
{
  temperature=temperature-273.15;
  temperature=tempature*9/5;
  temperature=temperature+32;
  console.log(temperature+"F")
}
if(temp==2&&temptwo==1)
{
  
}
