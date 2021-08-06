import {Command} from "../../../command/Command";
import {CommandHandler} from "../../../command/CommandHandler";
import {Event} from "../../../event/Event";
import {EventHandler} from "../../../event/EventHandler";
import {Query} from "../../../query/Query";
import {QueryHandler} from "../../../query/QueryHandler";
import {CollaborationType} from "./CollaborationType";
import {CollaboratorDescription} from "./CollaboratorDescription";
import {CollaboratorType} from "./CollaboratorType";
import {CommandDescription} from "./model/CommandDescription";
import {EventDescription} from "./model/EventDescription";
import {QueryDescription} from "./model/QueryDescription";

export class CollaboratorDescriptionBuilder {
    private name!: string;
    private type!: CollaboratorType;
    private collaborationType!: CollaborationType;
    private commands: CommandDescription[] = [];
    private queries: QueryDescription[] = [];
    private events: EventDescription[] = [];

    withName(name: string): CollaboratorDescriptionBuilder {
        this.name = name;
        return this;
    }

    withType(type: CollaboratorType): CollaboratorDescriptionBuilder {
        this.type = type;
        return this;
    }

    withCollaborationType(collaborationType: CollaborationType): CollaboratorDescriptionBuilder {
        this.collaborationType = collaborationType;
        return this;
    }

    addCommand(
        id: string,
        description: string,
        commandHandler: CommandHandler<Command>
    ): CollaboratorDescriptionBuilder {
        this.commands.push(new CommandDescription(id, description, commandHandler));
        return this;
    }

    addQuery(id: string, description: string, queryHandler: QueryHandler<Query, any>): CollaboratorDescriptionBuilder {
        this.queries.push(new QueryDescription(id, description, queryHandler));
        return this;
    }

    addEvent(id: string, description: string, eventHandler: EventHandler<Event>): CollaboratorDescriptionBuilder {
        this.events.push(new EventDescription(id, description, eventHandler));
        return this;
    }

    build(): CollaboratorDescription {
        return new CollaboratorDescription(
            this.name,
            this.type,
            this.collaborationType,
            this.commands,
            this.queries,
            this.events
        );
    }
}
