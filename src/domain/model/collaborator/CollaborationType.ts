export enum CollaborationType {
    /**
     * A Bounded Context offers a defined set of services that expose functionality for other systems.
     * Any downstream system can then implement their own integration.
     * This is especially useful for integration requirements with many others systems.
     * Example: Public APIs
     */
    OPEN_HOST_SERVICE = "Open / Host Service",

    /**
     * The downstream team conforms to the model of the upstream team.
     * There is no translation of models.
     * Couples the Conformist's domain model to another bounded context's model.
     */
    CONFORMIST = "Conformist",

    /**
     * The anticorruption layer is a layer that isolates a client's
     * model from another system's model by translation.
     * Only couples the integration layer (or adapter) to another
     * bounded context's model but not the domain model itself.
     */
    ANTI_CORRUPTION_LAYER = "Anti-corruption layer",

    /**
     * Two teams share a subset of the domain model including code
     * and maybe the database.
     * Typical examples= shared JARS, DLLs or a shared database schema.
     * Teams with a Shared Kernel are often mutually dependent
     * and should form a Partnership.
     */
    SHARED_KERNEL = "Shared kernel",

    /**
     * A Published Language is a well documented shared language between
     * Bounded Context which can translate in and out from that language.
     * Typical examples are iCalendar or vCard.
     */
    PUBLISHED_LANGUAGE = "Published language",

    /**
     * Published Language is often combined with Open Host service.
     */
    OPEN_HOST_SERVICE_WITH_PUBLISHED_LANGUAGE = "Open / Host Service with published language",

    /**
     * Bounded Contexts and their corresponding teams have no connections because
     * integration is sometimes too expensive or it takes very long to implement.
     * The teams chose to go separate ways in order to focus on their specific solutions.
     */
    SEPARATED_WAYS = "Separated ways",
}
