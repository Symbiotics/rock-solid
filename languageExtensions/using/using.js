export default function(data, func){
    data.forEach(function(dataSet) {
        func.call(null, dataSet);
    });
}