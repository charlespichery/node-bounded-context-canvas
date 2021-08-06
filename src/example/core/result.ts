export interface ErrorHandling {
    error?: boolean;
}

export type Result<T> = T & ErrorHandling;

export const success = <T>(result?: T): Result<T> => {
    if (result === undefined) {
        return {} as Result<null>;
    }
    return result;
};

export const failure = (): Result<any> => ({error: true});
