import {Command} from "./Command";
import {CommandHandler} from "./CommandHandler";
import {CommandResponse} from "./CommandResponse";

interface CommandHandlers {
    [type: string]: CommandHandler<any>;
}

export class CommandBus {
    constructor(private handlers: CommandHandlers = {}) {}

    subscribe(type: string, handler: CommandHandler<any>): void {
        this.handlers[type] = handler;
    }

    dispatch(command: Command): CommandResponse {
        return this.handlers[command.type]?.execute(command);
    }
}
