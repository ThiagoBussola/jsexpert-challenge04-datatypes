import { describe, expect, it, jest } from '@jest/globals'
import User from "../../src/entity/User.js";


describe("#User Entity", () => {

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    it("should return a string with User-user.id", () => {

        const id = "UserId-01"
        const newUser = new User({ id });

        expect(String(newUser)).toBe(`id: ${id}`);
    });
});