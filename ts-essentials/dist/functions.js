"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExact = exports.noop = exports.assert = exports.UnreachableCaseError = void 0;
class UnreachableCaseError extends Error {
    constructor(value) {
        super(`Unreachable case: ${value}`);
    }
}
exports.UnreachableCaseError = UnreachableCaseError;
function assert(condition, msg = "no additional info provided") {
    if (!condition) {
        throw new Error("Assertion Error: " + msg);
    }
}
exports.assert = assert;
function noop(..._args) { }
exports.noop = noop;
const isExact = () => (x) => {
    return x;
};
exports.isExact = isExact;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLG9CQUFxQixTQUFRLEtBQUs7SUFDN0MsWUFBWSxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxxQkFBcUIsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFKRCxvREFJQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxTQUFjLEVBQUUsTUFBYyw2QkFBNkI7SUFDaEYsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDNUM7QUFDSCxDQUFDO0FBSkQsd0JBSUM7QUFFRCxTQUFnQixJQUFJLENBQUMsR0FBRyxLQUFnQixJQUFTLENBQUM7QUFBbEQsb0JBQWtEO0FBRTNDLE1BQU0sT0FBTyxHQUNsQixHQUFrQixFQUFFLENBQ3BCLENBQWMsQ0FBb0MsRUFBaUIsRUFBRTtJQUNuRSxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUpTLFFBQUEsT0FBTyxXQUloQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4YWN0IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFVucmVhY2hhYmxlQ2FzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbmV2ZXIpIHtcbiAgICBzdXBlcihgVW5yZWFjaGFibGUgY2FzZTogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbjogYW55LCBtc2c6IHN0cmluZyA9IFwibm8gYWRkaXRpb25hbCBpbmZvIHByb3ZpZGVkXCIpOiBhc3NlcnRzIGNvbmRpdGlvbiB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQXNzZXJ0aW9uIEVycm9yOiBcIiArIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoLi4uX2FyZ3M6IHVua25vd25bXSk6IHZvaWQge31cblxuZXhwb3J0IGNvbnN0IGlzRXhhY3QgPVxuICA8RXhwZWN0ZWRTaGFwZT4oKSA9PlxuICA8QWN0dWFsU2hhcGU+KHg6IEV4YWN0PEFjdHVhbFNoYXBlLCBFeHBlY3RlZFNoYXBlPik6IEV4cGVjdGVkU2hhcGUgPT4ge1xuICAgIHJldHVybiB4O1xuICB9O1xuIl19