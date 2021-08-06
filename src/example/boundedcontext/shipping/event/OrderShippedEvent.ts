import {Event} from "../../../core/event/Event";

export const ORDER_SHIPPED = "ORDER_SHIPPED";

export class OrderShippedEvent extends Event {
    constructor(id: string) {
        super(ORDER_SHIPPED, id);
    }
}