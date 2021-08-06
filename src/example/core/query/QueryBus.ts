import {Query} from "./Query";
import {QueryHandler, QueryResponse} from "./QueryHandler";

export interface QueryHandlers {
    [type: string]: QueryHandler<Query, any>;
}

export class QueryBus {
    constructor(private handlers: QueryHandlers = {}) {}

    subscribe(type: string, handler: QueryHandler<Query, any>): void {
        this.handlers[type] = handler;
    }

    dispatch(query: Query): QueryResponse<any> {
        return this.handlers[query.type]?.execute(query);
    }
}
