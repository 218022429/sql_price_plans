function totalPhoneBill(str){
const newArrayList=str.split(",");
let sms=0.65;
let calls=2.75;
let total=0
const cleanArray=[];
for(let i=0;i<newArrayList.length;i++){
  cleanArray.push(newArrayList[i].trim())
  if(cleanArray[i].includes("sms")){
  total+=sms;  
  }
  else if(cleanArray[i].includes("call")){
  total+=calls;
  }
}
return "R"+total.toFixed(2);
}
