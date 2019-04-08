export interface ICompany {
    id?: number;
    name?: string;
    owner?: string;
}

export class Company implements ICompany {
    constructor(public id?: number, public name?: string, public owner?: string) {}
}
