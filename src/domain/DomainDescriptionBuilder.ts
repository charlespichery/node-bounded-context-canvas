import {DomainDescription} from "./DomainDescription";
import {BusinessModel} from "./model/BusinessModel";
import {Classification} from "./model/Classification";
import {CollaboratorDescription} from "./model/collaborator/CollaboratorDescription";
import {Evolution} from "./model/Evolution";
import {LanguageElement} from "./model/LanguageElement";
import {ModelTrait} from "./model/ModelTrait";

export class DomainDescriptionBuilder {
    private name!: string;
    private description!: string;
    private classification!: Classification;
    private businessModel!: BusinessModel;
    private evolution!: Evolution;
    private businessDecisions: string[] = [];
    private ubiquitousLanguage: LanguageElement[] = [];
    private modelTraits: ModelTrait[] = [];
    private collaborators: CollaboratorDescription[] = [];
    private asIncomplete = false;

    withName(name: string): DomainDescriptionBuilder {
        this.name = name;
        return this;
    }

    withDescription(description: string): DomainDescriptionBuilder {
        this.description = description;
        return this;
    }

    withClassification(classification: Classification): DomainDescriptionBuilder {
        this.classification = classification;
        return this;
    }

    withBusinessModel(businessModel: BusinessModel): DomainDescriptionBuilder {
        this.businessModel = businessModel;
        return this;
    }

    withEvolution(evolution: Evolution): DomainDescriptionBuilder {
        this.evolution = evolution;
        return this;
    }

    addBusinessDecision(decision: string): DomainDescriptionBuilder {
        this.businessDecisions.push(decision);
        return this;
    }

    addLanguageElement(
        domainTerm: string,
        definition: string
    ): DomainDescriptionBuilder {
        this.ubiquitousLanguage.push(new LanguageElement(domainTerm, definition));
        return this;
    }

    addModelTrait(trait: ModelTrait): DomainDescriptionBuilder {
        this.modelTraits.push(trait);
        return this;
    }

    addCollaborator(collaborator: CollaboratorDescription): DomainDescriptionBuilder {
        this.collaborators.push(collaborator);
        return this;
    }

    withCollaborators(collaborators: CollaboratorDescription[]): DomainDescriptionBuilder {
        this.collaborators = this.collaborators.concat(collaborators);
        return this;
    }

    /**
     * Offer the possibility to tag the description as incomplete
     */
    tagAsIncomplete(): DomainDescriptionBuilder {
        this.asIncomplete = true;
        return this;
    }

    build(): DomainDescription {
        return new DomainDescription(
            this.name,
            this.description,
            this.classification,
            this.businessModel,
            this.evolution,
            this.businessDecisions,
            this.ubiquitousLanguage,
            this.modelTraits,
            this.collaborators,
            this.asIncomplete
        );
    }
}
