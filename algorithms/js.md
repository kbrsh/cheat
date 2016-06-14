# JS Algorithms


### String

Reverse a string:
```js
function reverse(str) {
  return str.split("").reverse().join("");
}
```

Find longest word:
```js
function findLongestWord(str) {
  var words = str.split(" ");
  str = words.sort(function(a, b) {
    return b.length - a.length;
  })[0];
  return str;
}
```

### Numbers

Factorialize:
```js
function factorialize(num) {
  if(num === 0) return 1;
  return num * factorialize(num-1);
}
```

### Sorting

Bubble Sort:
```js
function bub(arr) {
  for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < (arr.length - j); i++) {
      if (arr[i] > arr[i + 1]) {
        var a = arr[i]
        var b = arr[i + 1]
        arr[i] = b
        arr[i + 1] = a
      }
    }
  }
  return arr;
}
```

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
