export class Query {
    constructor(readonly type: string) {
        if (this.constructor === Query) {
            throw new TypeError("Abstract class 'Query' cannot be instantiated directly");
        }
    }
}
