import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

        test('should return my andrew id', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("aghabara");
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "aghabara"
          ));
    });

    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 7, 79, 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "79"
          ));
    });
    test('should return sum of 86 and 75', () => {
        const query = "What is 86 plus 75?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "161"
          ));
    });

    test('should return sum of 76 and 6', () => {
        const query = "What is 76 plus 6?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "82"
          ));
    });
    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 69, 54, 26?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "69"
          ));
    })

    test('should return sum of 25 and 30', () => {
        const query = "What is 25 plus 30?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "55"
          ));
    });
    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 90, 1, 73?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "90"
          ));
    });
    test('should return sum of 33 and 54', () => {
        const query = "What is 33 plus 54?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "87"
          ));
    });
});