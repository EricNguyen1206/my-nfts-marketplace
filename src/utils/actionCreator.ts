import { SagaParams } from "models/typings";

export interface SagaActionType<T> {
    request: (payload?: any) => SagaParams<any>;
    success: (payload?: T) => SagaParams<T>;
    fail: SagaParams<any>;
}
/**
 *
 * @param {string} type
 * @param {T} payload the data passing for
 * @return {SagaParams}
 */
export function actionCreator<T>(type: string, payload?: T): SagaParams<T> {
    return {
        type,
        payload,
    };
}

/**
 *
 * @param {string} type
 * @return {SagaActionType}
 */
export function createSagaAction<T>(type: string): SagaActionType<T> {
    const action = {
        request: (payload?: any) => actionCreator(type + "Request", payload),
        success: (payload?: T) => actionCreator(type + "Success", payload),
        fail: actionCreator(type + "Failure"),
    };
    return action;
}
