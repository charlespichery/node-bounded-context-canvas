/**
 * Give a definition of a term within a bounded context
 */
export class LanguageElement {
    constructor(readonly domainTerm: string, readonly definition: string) {}
}
