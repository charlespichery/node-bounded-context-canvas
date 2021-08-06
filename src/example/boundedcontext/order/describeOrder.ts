import {QueryBus} from "../../core/query/QueryBus";
import {DomainDescription} from "../../../domain/DomainDescription";
import {CommandBus} from "../../core/command/CommandBus";
import {DomainDescriptionBuilder} from "../../../domain/DomainDescriptionBuilder";
import {Classification} from "../../../domain/model/Classification";
import {BusinessModel} from "../../../domain/model/BusinessModel";
import {Evolution} from "../../../domain/model/Evolution";
import {ModelTrait} from "../../../domain/model/ModelTrait";
import {CollaboratorDescriptionBuilder} from "../../../domain/model/collaborator/CollaboratorDescriptionBuilder";
import {CollaboratorType} from "../../../domain/model/collaborator/CollaboratorType";
import {ORDER, OrderQueryHandler} from "./query/OrderQueryHandler";
import {CREATE_ORDER, CreateOrderCommand, CreateOrderCommandHandler} from "./command/CreateOrderCommandHandler";
import {Order} from "./Order";
import {ORDER_SHIPPED} from "../shipping/event/OrderShippedEvent";
import {OrderShippedEventHandler} from "./event/OrderShippedEventHandler";

export const describeOrder = (queryBus: QueryBus, commandBus: CommandBus): DomainDescription => {
    const listOfOrders: Order[] = [];
    return new DomainDescriptionBuilder()
        .withName("order")
        .withDescription("Manage orders lifecycle")
        .withClassification(Classification.CORE)
        .withBusinessModel(BusinessModel.REVENUE_GENERATOR)
        .withEvolution(Evolution.CUSTOM_BUILT)
        .addModelTrait(ModelTrait.ENGAGEMENT_CONTEXT)
        .addBusinessDecision("An user can create an order.")
        .addBusinessDecision("An user can add an item to an order.")
        .addBusinessDecision("An user can pay for an order.")
        .addBusinessDecision("An order can be canceled.")
        .addBusinessDecision("An order has a status.")
        .addLanguageElement(
            "order",
            "The representation of an order, containing the list of items in the order and a status."
        )
        .addLanguageElement(
            "order status",
            "either created, paid, shipped or delivered"
        )
        .addCollaborator(
            new CollaboratorDescriptionBuilder()
                .withName("E-retail website")
                .withType(CollaboratorType.FRONTEND)
                .addCommand(
                    CREATE_ORDER,
                    "Creates an order",
                    new CreateOrderCommandHandler(listOfOrders),
                )
                .addQuery(
                    ORDER,
                    "Returns an existing order",
                    new OrderQueryHandler(listOfOrders)
                )
                .build()
        )
        .addCollaborator(
            new CollaboratorDescriptionBuilder()
                .withName("shipping")
                .withType(CollaboratorType.BOUNDED_CONTEXT)
                .addEvent(
                    ORDER_SHIPPED,
                    "Change the state of order depending on the event that order was shipped",
                    new OrderShippedEventHandler(listOfOrders)
                )
                .build()
        )
        .build();
};
