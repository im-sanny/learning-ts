interface Stark {
    name: string;
    age?: number;
}
function printNames(stark: Stark) {
    console.log(stark.name);
}

printNames({ name: "Demmy" })
printNames({ name: 'Jemmy' })