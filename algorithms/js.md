# JS Algorithms


### String

Reverse a string:
```js
function reverse(str) {
  return str.split("").reverse().join("");
}
```

### Sorting

Quicksort:
```js
function quicksort(arr) {
if (arr.length === 0) {
return [];
}
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}
```

Native JS Sort:
```js
var arr = [454, 664,224, 675, 4]
arr.sort(function(a, b) {
  return a - b;
});
```
