class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    dance() {
        console.log(this.name, "is dancing");
    }
}
let bam = new Person('Bam')
bam.dance()


class AwesomePerson extends Person {
    dance() {
        console.log('So Awesome');
        super.dance();
    }
}
let dam = new AwesomePerson('Dam')
dam.dance();