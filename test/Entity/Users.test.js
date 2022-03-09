import { expect, describe, it, jest, beforeEach } from "@jest/globals";
import User from "../../src/entity/User.js";
import Users from "../../src/entity/Users.js";

describe("#Users Entity", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    it("should start with an empty set of users", () => {
        // inicia um [Symbol(kData)]: Set(0) {}
        const users = new Users()
        // deve iniciar vazio e não deve ter usuários, para verificar isso é só usar o hasUsers
        expect([...users]).toStrictEqual([]);
        expect(users.hasUsers()).toBeFalsy();
        
    });

    it("should add an user to the set", () => {

        const users = new Users()

        const newUser = { id: "user-01" };

        users.add(newUser);
        
        const expected = [new User(newUser)];

        expect([...users]).toStrictEqual(expected);
        expect(users.hasUsers()).toBeTruthy();
        
    });

    it("should delete a user to the set", () => {

        const users = new Users()

        const newUser = { id: "user-02" };

        users.deleteUser(newUser);
        
        expect(users.hasUsers()).toBeFalsy();
        
    });
});