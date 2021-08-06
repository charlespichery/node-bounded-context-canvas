import {DomainDescription} from "../../domain/DomainDescription";
import {CommandBus} from "../core/command/CommandBus";
import {QueryBus} from "../core/query/QueryBus";
import {EventBus} from "../core/event/EventBus";
import {CollaboratorDescription} from "../../domain/model/collaborator/CollaboratorDescription";

export const registerDomains = (
    domains: DomainDescription[],
    commandBus: CommandBus,
    queryBus: QueryBus,
    eventBus: EventBus
): void => {
    domains.forEach(domain => {
        domain?.collaborators.forEach(collaborator => {
            registerCommandHandlers(collaborator, commandBus);
            registerQueryHandlers(collaborator, queryBus);
            registerEventHandlers(collaborator, eventBus);
        });
    });
};

const registerCommandHandlers = (collaborator: CollaboratorDescription, commandBus: CommandBus): void => {
    collaborator.commands.forEach(command => {
        //TO ADAPT TO YOUR IMPLEM
        commandBus.subscribe(command.id, command.handler);
    });
};

const registerQueryHandlers = (collaborator: CollaboratorDescription, queryBus: QueryBus): void => {
    collaborator.queries.forEach(query => {
        //TO ADAPT TO YOUR IMPLEM
        queryBus.subscribe(query.id, query.handler);
    });
};

const registerEventHandlers = (collaborator: CollaboratorDescription, eventBus: EventBus): void => {
    collaborator.events.forEach(event => {
        //TO ADAPT TO YOUR IMPLEM
        eventBus.subscribe(event.id, event.handler);
    });
};
