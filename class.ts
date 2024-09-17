class Stark {
    name: string = "Brandon";
    static castle: string = 'Winterfell'
    saying: string;
    constructor() {
        this.saying = Stark.castle;
    }
    hello(person: string) {
        console.log('Hello, ' + person);
    }
}

let ned = new Stark();
ned.saying = 'Winter is coming';
ned.hello('Bob')