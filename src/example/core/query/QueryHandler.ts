import {Query} from "./Query";
import {Result} from "../result";

export type QueryResponse<T> = Result<T>;

export class QueryHandler<Q extends Query, R> {
    /**
     * Abstract class "QueryHandler" cannot be instantiated directly
     */
    constructor() {
        if (this.constructor === QueryHandler)
            throw new TypeError("Abstract class 'QueryHandler' cannot be instantiated directly");

        if (this.execute === QueryHandler.prototype.execute)
            throw new TypeError("You must implement 'execute' function");
    }

    /**
     * You must implement this function
     * @param {Q extends Query} data
     */
    execute(data: Q): QueryResponse<R> {
        throw new Error("You must not call this function");
    }
}
