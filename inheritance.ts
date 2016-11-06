class Person{
    name : string;

    constructor(name? : string){
        this.name = name;
    }

    dance(){
        console.log(this.name + " is dancing...");
    }


};

class AwesomePerson extends Person{

    name : string;
    constructor(name? : string){
        super();
        this.name = name;
    }

    dance(){
        console.log("AWESOME DANCER !" + this.name);
        super.dance();
    }
}

var bob = new AwesomePerson("bob");

bob.dance();