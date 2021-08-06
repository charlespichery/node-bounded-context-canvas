import {Event} from "../event/Event";
import {Result} from "../result";

export type CommandResponse = Result<{event?: Event; id?: string}>;
