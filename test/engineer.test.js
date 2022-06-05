const Engineer = require('../employee');

describe('Engineer', () => {
    it('should create an object with a name, id, email, github, and role', () => {
        const engineer = new Engineer('Ryan, 2, ryan@gmail.com, yeeyee18, engineer');

        expect(engineer.name).toEqual('Ryan');
        expect(engineer.id).toEqual('2');
        expect(engineer.email).toEqual('ryan@gmail.com');
        expect(engineer.github).toEqual('yeeyee18')
        expect(engineer.role).toEqual('engineer');
    })

    it('should throw an error if nothing is entered for their name, email, and role', () => {
        const a = new Engineer('');
        const err = new Error ('Name, email, and role need to be provided')

        expect(a).toThrowError(err);
    })

    it('should throw an error if no number or a negative number is entered for the id', () => {
        const b = new Employee('Leo,-1,leo@gmail.com,manager');
        const err = new Error ('Positive integer needed for id')

        expect(b).toThrowError(err);
    })
})