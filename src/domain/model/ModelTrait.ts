/**
 * @see https://github.com/ddd-crew/bounded-context-canvas/blob/master/resources/model-traits-worksheet.md
 */
export enum ModelTrait {
    /**
     * Produces a document describing a job/request that needs to be performed
     */
    SPECIFICATION_MODEL = "Specification Model",

    /**
     * Performs or tracks a job. Example: Advertising Campaign Engine
     */
    EXECUTION_MODEL = "Execution Model",

    /**
     * Monitors the execution. Example: Advertising Campaign Analyser
     */
    AUDIT_MODEL = "Audit Model",

    /**
     * Receives requests and determines if they should progress
     * to the next step of the process.
     * Example: Fraud Check
     */
    APPROVER = "Approver",

    /**
     * Ensures that other contexts carry out certain operations.
     * Example: GDPR Context (ensures other contexts delete all of a user's data)
     */
    ENFORCER = "Enforcer",

    /**
     * Ensures that multiple/all contexts in the system all comply with a standard rule.
     * Example: GDPR Context (as above)
     */
    OCTOPUS_ENFORCER = "Octopus Enforcer",

    /**
     * Translates between multiple ubiquitous languages.
     */
    INTERCHANGER = "Interchanger",

    /**
     * Sits at the edge of a system and manages inbound and/or outbound communication.
     * Example: IoT Message Gateway
     */
    GATEWAY = "Gateway",

    /**
     * The combination of a gateway and an interchange.
     */
    GATEWAY_INTERCHANGE = "Gateway Interchange",

    /**
     * Simulates the customer experience of using the core bounded contexts.
     * Example: Whitelabel music store
     */
    DOGFOOD_CONTEXT = "Dogfood Context",

    /**
     * Sits in-front of legacy contexts providing a new,
     * cleaner model while legacy contexts are being replaced.
     */
    BUBBLE_CONTEXT = "Bubble Context",

    /**
     * Bubble context which has its own data store and
     * synchronises data asynchronously with the legacy contexts.
     */
    AUTONOMOUS_BUBBLE = "Autonomous Bubble",

    /**
     * Contains a large number of important rules and many other contexts depend on it.
     * Example: rules engine containing all the domain rules
     * Tips: ikely anti-pattern
     */
    BRAIN_CONTEXT = "Brain Context",

    /**
     * Receives documents from multiple upstream contexts and passes
     * them to a single downstream context in a standard format
     * (after applying its own rules).
     */
    FUNNEL_CONTEXT = "Funnel Context",

    /**
     * Provides key features which attract users to keep using the product.
     * Example: Free Financial Advice Context
     */
    ENGAGEMENT_CONTEXT = "Engagement Context",
}
