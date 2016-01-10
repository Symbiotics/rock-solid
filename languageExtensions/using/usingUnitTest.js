import using from './using.js';

describe(`Given the 'using' function has been created`, function() {
    describe(`when 'using' is execute with an array of items and a function`, function() {
        let func, data = [
            {
                input: 'tree',
                expectedResult: '1'
            },
            {
                input: 'butterfly',
                expectedResult: '2'
            },
            {
                input: 'The Dark Lord Sauron',
                expectedResult: '3'
            },
            {
                input: 'tree',
                expectedResult: '4'
            },
            {
                input: 'tree',
                expectedResult: '5'
            }
        ];
        beforeEach(function() {
            func = jasmine.createSpy('func()');
            using(data, func);
        });

        data.forEach(function(dataSet) {
            it(`it should execute the provide function for each dataSet passing in the dataSet as an argument as well as the expectedResult`, function() {
                expect(func).toHaveBeenCalledWith(dataSet.input, dataSet.expectedResult);
            });
        });
    });
})
;