interface UserInterface {
    id: number;
    name: string;
    age?: number;
}


const User: UserInterface = {
    id: 2,
    name: 'pedro',
    age: 22,
}

console.log(User.age);