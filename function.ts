function addTwoNumber(a:number,b:number){
    return a+b
}

// console.log(addTwoNumber(2,2));

function upperCase(str:string){
    return str.toUpperCase()
}


// console.log(upperCase('hello'));

const removeSpace = (str:string):string =>{
    let result:string = '';
    const strArray = str.split('');
    strArray.forEach((str:string)=>{
        if(str !== ' '){
            result = result+str
        }
    })
    return result
}
// console.log(removeSpace('hello world'));
export{}