export interface Hero {
    id: number;
    name: string;
}

export class HeRo {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) {}
}
