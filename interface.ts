interface myInterface{ /* making a rule for the input! */
    name : string;
    surname? : string; /* ? = not necessary */
}

interface mySquare{
    color? : string;
    width? : number;
}

interface stringArray{
    [index: number]: string;
}

function printName(stark : myInterface /* object must be myInterface type */){
    console.log(stark.name);
    if(stark.surname){
        console.log(stark.surname);
    }
    
}

function printIt(string : mySquare) : void{
    console.log(string);
}

printName({name : "Ebu"});

printName({name : "Hello!"});

printName({name : "Name" , surname: "Surname"});

function square(obj: mySquare): {color: string; area: number} {
    let newSquare = { color : "White", area : 100};

    if(obj.color){
        newSquare.color = obj.color;
    }

    if(obj.width){
        newSquare.area = (obj.width * obj.width);
    }

    return newSquare;

}

let mySquareWithoutInfo = square({});

let mySquareWithColor = square({color : "Purple"});

let mySquareWithColorAWidth = square({color: "Blue", width : 5});

printIt(mySquareWithoutInfo);

printIt(mySquareWithColor);

printIt(mySquareWithColorAWidth);

let arr: stringArray;

arr = ["Hello", "Cem", "1"];

printIt(arr);