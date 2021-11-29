/*
var avrJohn = (89+120+103)/3;
var avrMike = (116+94+123)/3;

if(avrMike > avrJohn){
  console.log('Mike\'s team wins, arerage score : ' + avrMike);
}
else if(avrJohn > avrMike ){
  console.log('John\'s team wins, arerage score : ' + avrJohn);
}
else{
  console.log('It\'s a draw');
}

*/



/*
var restaurant1= 124;
var restaurant2 = 48;
var restaurant3 = 268;

var Tipcalculator= function(bill){
  if ( bill<50 ) {
    tip=bill*0.2;
  }
  else if(bill >50 && bill<200){
    tip=bill*0.15;
  }
  else {
    tip=bill*0.1;
  }
  return tip;
}
console.log(Tipcalculator(48));

*/

var onlytips=[];
var tipandbill=[];
var Tipcalculator = function(bill){
switch(true){
    case (bill <50):
         return bill*0.2;
    case (bill > 50 && bill<200):
         return bill*0.15;
    default:
         return bill*0.1;
  }
}
var Tipandbillcalculator = function(bill){
  return Tipcalculator(bill)+bill;
}


onlytips.push(Tipcalculator(48));
onlytips.push(Tipcalculator(124));
onlytips.push(Tipcalculator(268));
console.log(onlytips);
tipandbill.push(Tipandbillcalculator(48));
tipandbill.push(Tipandbillcalculator(124));
tipandbill.push(Tipandbillcalculator(268));
console.log(tipandbill);


//console.log(Tipcalculator(48));



/*
function calculateMoney(spentMoney = []){
  var tips = [];
  var totalCost = [];
  for (var i = 0; i < spentMoney.length; i++){
    if (spentMoney[i] < 50){
      tips.push(spentMoney[i] * 0.2);
      totalCost.push((spentMoney[i] * 0.2) + spentMoney[i]);
    } 
    else if (spentMoney[i] <= 100){
      tips.push(spentMoney[i] * 0.15);
      totalCost.push((spentMoney[i] * 0.15) + spentMoney[i]);
    }
    else {
      tips.push(spentMoney[i] * 0.1);
      totalCost.push((spentMoney[i] * 0.1) + spentMoney[i]);
    }
  }
  console.log(tips);
  console.log(totalCost);
}

calculateMoney(spentTatoMoney = [45, 85, 150, 215]);
*/