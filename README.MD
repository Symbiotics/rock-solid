##What:
Rock solid is a library that adds data driven testing capabilities to BDD style testing frameworks like Jasmine, Mocha etc

##Install:
`npm install rock-solid`

##Usage:
import the keyword you need

#`using`: 
Used to execute a it or describe block repetitively with different input data
1. `import {using} from 'rock-solid'`
2. Wrap either a `describe` or `it` block in a `using` block:

```javascript 
using([{
    input: 'monkey',
    expectedResult: 'I R Baboon'
}], function(input, expectedResult){
    describe(`when the animal is a ${input} and makeSound() is called`, function() {
        it(`it should make the sound ${expectedResult}`, function() {
            makeSound();
            expect(input).toEqual(expectedResult);
        });
    });
});
```

##Credits:  
1. JP Castro from Lyon, France: The guy that got me started on this with this [blog](http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests)