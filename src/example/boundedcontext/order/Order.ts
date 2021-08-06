import {Item} from "./Item";
import {v4 as uuid} from "uuid";

export enum OrderStatus {
    CREATED = "created",
    PAID = "paid",
    SHIPPED = "shipped",
    DELIVERED = "delivered"
}

export class Order {
    public id: string;
    public items: Item[];
    public status: string;

    constructor() {
        this.id = uuid();
        this.items = [];
        this.status = OrderStatus.CREATED;
    }

    setShipped(){
        this.status = OrderStatus.SHIPPED;
    }
}