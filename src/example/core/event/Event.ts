export class Event {
    constructor(readonly type: string, readonly aggregateId: string, readonly payload: any = {}) {}
}
