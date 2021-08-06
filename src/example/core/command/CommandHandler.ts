import {Command} from "./Command";
import {CommandResponse} from "./CommandResponse";

export class CommandHandler<C extends Command> {
    /**
     * Abstract class "CommandHandler" cannot be instantiated directly
     */
    constructor() {
        if (this.constructor === CommandHandler)
            throw new TypeError("Abstract class 'CommandHandler' cannot be instantiated directly");

        if (this.execute === CommandHandler.prototype.execute)
            throw new TypeError("You must implement 'execute' function");
    }

    /**
     * You must implement this function
     * @param {Command} command
     * @returns CommandResponse
     */
    execute(command: C): CommandResponse {
        throw new Error("You must not call this function");
    }
}
