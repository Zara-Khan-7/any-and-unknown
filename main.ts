let num1:any = "18"
let result : string = num1
console.log(result);

let num2:any = 18
let result1 :number = num2
console.log (result1);

// Unknown k sath data type define krna must hai like (num3 as string or number)
let num3 : unknown = "18";
let result3: string = num3 as string
console.log(result3);

// Any k sath data type btana jese (num4 as ..)ye lagana zaruri ni
let num4:any = 18;
let result4 :number = num4
console.log (result4);
