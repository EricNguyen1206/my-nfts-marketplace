export type SagaParams<T> = {
    type: string;
    payload?: T;
};
export interface Model<T> {
    data: T | null;
    isFetching: boolean;
    error: boolean;
}
