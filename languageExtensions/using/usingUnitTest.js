import using from './using.js';

describe(`Given the 'using' function has been created`, function() {
    describe(`when 'using' is execute with an array of items and a function`, function() {
        let func, argumentsArray = ['tree', 'butterfly', 'rainbows', 'The Dark Lord Sauron', 'bunnies'];
        beforeEach(function() {
            func = jasmine.createSpy('func()');
            using(argumentsArray, func);
        });

        argumentsArray.forEach(function(item){
            it(`it should execute the provide function for each item passing in the item as an argument`, function() {
                expect(func).toHaveBeenCalledWith(item);
            });
        })
    });
});