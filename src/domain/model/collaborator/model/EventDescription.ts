export class EventDescription<EventHandler> {
    constructor(readonly id: string, readonly description: string, readonly handler: EventHandler) {
    }

    toJSON() {
        return {
            id: this.id,
            description: this.description,
        };
    }
}
