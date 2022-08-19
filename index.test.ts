import {foo} from "./index";

test("foo", () => {
    expect(foo()).toEqual(3);
})