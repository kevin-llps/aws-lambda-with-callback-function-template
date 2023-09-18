import { hello } from "../handler.js";

describe('Handler', () => {
    it('given event should run handler successfully', () => {
        const event = "event";
        const context = { callbackWaitsForEmptyEventLoop : true };
        const callback = jest.fn((err, event) => event);

        hello(event, context, callback);

        expect(context.callbackWaitsForEmptyEventLoop).toBeFalsy();
        expect(callback).toBeCalledWith(null, event);
    });
});