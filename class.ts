/// <reference path="module.ts" />

import { sayHi } from './module'; /* easy way! */

interface myInter{
    name? : string;
    age? : number; 
}

class myClass{
    name : string = "Ebu";
    static castle : string = "Winterfell!";
    age : number;
    obj : myInter;

    constructor(){
        this.name = myClass.castle;
        this.age = 5;
    }

    sayHi(eye : string) : void{
        console.log(eye);
    }

}

let val = new myClass();

sayHi(val.name);
sayHi(val.age);

val.sayHi("Green");


