
export class Name {
    
    sentData(data: string): string{
        return data;
    }
}

export class Cat {
    
    sentData(data: string): string{
        return data;
    }
}

const name = new Name();
const cat = new Cat();

console.log(name.sentData("ddd"));

console.log(cat.sentData("ddd"));