export class Command {
    constructor(readonly type: string) {
        if (this.constructor === Command) {
            throw new TypeError("Abstract class 'Command' cannot be instantiated directly");
        }
    }
}
