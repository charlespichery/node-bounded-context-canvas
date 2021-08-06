import {QueryHandler, QueryResponse} from "../../../core/query/QueryHandler";
import {Query} from "../../../core/query/Query";
import {Order} from "../Order";

export const ORDER = "ORDER";

export class OrderQueryHandler extends QueryHandler<OrderQuery, Order> {
    private listOfOrders: Order[];

    constructor(listOfOrders: Order[]) {
        super();
        this.listOfOrders = listOfOrders;
    }

    execute(query: OrderQuery): QueryResponse<Order> {
        return this.listOfOrders.find(order => order.id === query.id);
    }
}

export class OrderQuery extends Query {
    constructor(readonly id: string) {
        super(ORDER);
    }
}
