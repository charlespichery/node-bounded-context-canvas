import {Event} from "./Event";
import {EventHandler} from "./EventHandler";

interface EventHandlers {
    [type: string]: EventHandler<any>[];
}

export interface EventBus {
    subscribe(type: string, subscriber: EventHandler<any>): void;
    dispatch(event: Event): void;
}

export class BasicEventBus implements EventBus {
    constructor(private eventHandlersByType: EventHandlers = {}) {}

    subscribe(type: string, subscriber: EventHandler<any>) {
        if (this.eventHandlersByType[type] === undefined) {
            this.eventHandlersByType[type] = [];
        }
        this.eventHandlersByType[type].push(subscriber);
    }

    dispatch(event: Event) {
        const subscribers = this.eventHandlersByType[event.type];
        if (subscribers !== undefined && Array.isArray(subscribers)) {
            subscribers.forEach(subscriber => {
                try {
                    subscriber.handle(event);
                } catch (error) {
                    console.log({
                        message: "Error while handling event",
                        event,
                        error,
                    });
                }
            });
        }
    }
}
