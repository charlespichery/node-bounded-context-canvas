import {Order} from "../Order";
import {EventHandler} from "../../../core/event/EventHandler";
import {OrderShippedEvent} from "../../shipping/event/OrderShippedEvent";

export class OrderShippedEventHandler extends EventHandler<OrderShippedEvent> {
    private listOfOrders: Order[];

    constructor(listOfOrders: Order[]) {
        super();
        this.listOfOrders = listOfOrders;
    }

    handle(event: OrderShippedEvent) {
        let order = this.listOfOrders.find(order => order.id === event.aggregateId);
        if (order !== undefined)
            order.setShipped();
        return order;
    }
}
