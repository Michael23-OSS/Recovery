export class Student {
    _id?: number;
    id: number;
    name: string;
    lastname: string;
    phone: string;
    email: string;

    constructor(id: number, name: string, lastname: string, phone: string, email: string ){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
}