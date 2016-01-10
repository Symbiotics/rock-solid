export default function(data, func){
    data.forEach(function(item) {
        func.call(null, item.input, item.expectedResult);
    });
}