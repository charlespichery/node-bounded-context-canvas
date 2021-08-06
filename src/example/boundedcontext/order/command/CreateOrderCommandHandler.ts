import {QueryHandler, QueryResponse} from "../../../core/query/QueryHandler";
import {Query} from "../../../core/query/Query";
import {Order} from "../Order";
import {Command} from "../../../core/command/Command";
import {CommandHandler} from "../../../core/command/CommandHandler";

export const CREATE_ORDER = "CREATE_ORDER";

export class CreateOrderCommandHandler extends CommandHandler<CreateOrderCommand> {
    private listOfOrders: Order[];
    constructor(listOfOrders: Order[]) {
        super();
        this.listOfOrders = listOfOrders;
    }

    execute(command: CreateOrderCommand): QueryResponse<any> {
        let order = new Order();
        this.listOfOrders.push(order);
        return order;
    }
}

export class CreateOrderCommand extends Command {
    constructor(readonly id: string) {
        super(CREATE_ORDER);
    }
}
