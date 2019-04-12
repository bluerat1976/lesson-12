debugger;

var course = ['HTML', 11, 'JavaScript', 2, 'CSS', 23, 12];
course.push(-5);
console.log(course[7]);
console.log(course);

course.unshift(1000);
console.log(course[0]);
console.log(course);

course.push('last array element');
console.log(course.length);
console.log('last element is ' + ' - ' + course[9]);

/* course.splice(3, 1);
console.log(course);
*/
//removing of 'javaScript'.
var filtrated = course.filter(function(el, i) {
    return el !== 'JavaScript';
});
console.log(filtrated);

//removing of 'javaScript' othermetod.
var newarry = course.splice(course.indexOf('JavaScript'), 1);

var filteredcourse = course.filter(
    function (el, id) {
        return typeof el === "number";
    }
)
console.log(filteredcourse);

var newarr = filteredcourse.map(
    function (elem, i) {
        return elem * elem;
    }
)
console.log(newarr);

var newarr1 = filteredcourse.map(
    function (elem, i) {
        return Math.pow(elem, 2);
    }
)
console.log(newarr1);

var largest = 0;
for (var i = 0; i < newarr1.length; i++) {
    if (largest < newarr1[i]) {
        largest = newarr1[i];
    }
}
console.log(largest);

/*   var minim = 0;
for(var i = 0; i > newarr1.length; i++) {
    if(minim > newarr1[i]) {
        minim = newarr1[i]
    }
}
console.log(minim);
*/

var max = newarr1.reduce (
    function(el, i) {
        return Math.max (el, i);
    }
)
console.log(max);

var min = newarr1.reduce (
    function (el, i) {
        return Math.min(el, i); 
    }
)
console.log(min);
