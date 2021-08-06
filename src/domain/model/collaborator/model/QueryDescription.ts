export class QueryDescription<QueryHandler> {
    constructor(readonly id: string, readonly description: string, readonly handler: QueryHandler) {}

    toJSON() {
        return {
            id: this.id,
            description: this.description,
        };
    }
}
