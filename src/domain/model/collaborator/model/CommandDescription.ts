export class CommandDescription<CommandHandler> {
    constructor(readonly id: string, readonly description: string, readonly handler: CommandHandler) {
    }

    toJSON() {
        return {
            id: this.id,
            description: this.description,
        };
    }
}
