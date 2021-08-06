import {BusinessModel} from "./model/BusinessModel";
import {Classification} from "./model/Classification";
import {CollaboratorDescription} from "./model/collaborator/CollaboratorDescription";
import {Evolution} from "./model/Evolution";
import {LanguageElement} from "./model/LanguageElement";
import {ModelTrait} from "./model/ModelTrait";

export class DomainDescription {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly classification: Classification,
        readonly businessModel: BusinessModel,
        readonly evolution: Evolution,
        readonly businessDecisions: string[],
        readonly ubiquitousLanguage: LanguageElement[],
        readonly modelTraits: ModelTrait[],
        readonly collaborators: CollaboratorDescription[],
        readonly asIncomplete: boolean
    ) {}
}
