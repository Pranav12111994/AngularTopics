import { createReducer, on, Action } from "@ngrx/store";
import * as CounterAction from './counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(CounterAction.increment, state => state + 1),
    on(CounterAction.decrement, state => state - 1),
    on(CounterAction.reset, state => 0)
);

export function counterReducer(state : number | undefined, action: Action) {
    return _counterReducer(state, action);
}