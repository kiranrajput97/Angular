export class Hero
{
    // anemic model  ()
    constructor(public id: number, public name: string, public power: string, public alterEgo?: string)    // '?' -> Elvis operator
    { }
}
