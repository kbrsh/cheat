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

FizzBuzz:
```js
  for(var i = 0; i <= 100; i++) {
    var f = i % 3 == 0, b = i % 5 == 0, fb = f && b
    console.log(f ? "Fizz" : b ? "Buzz" : fb ? "FizzBuzz" : i)
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
var getPivot = function(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var pivot = arr[index];
  arr.splice(index, 1);
  return pivot;
}

var quick = function(arr, condition) {
  if(arr.length < 2) {
    return arr;
  };
  var pivot = getPivot(arr);
  var left = [];
  var right = [];
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var criteria = condition(item, pivot);
    if(criteria) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quick(left, condition).concat(pivot, quick(right, condition));
}
```

Native JS Sort:
```js
var arr = [454, 664,224, 675, 4]
arr.sort(function(a, b) {
  return a - b;
});
```

### Search

Binary Search
```js
var binarySearch = function(query, arr) {
	var start = 0;
  var end = arr.length - 1;
  while(start <= end) {
  	var index = Math.round((start + end) / 2);
    var item = arr[index];
    if(query === item) {
    	return item;
    } else if(query > item) {
      start = index + 1;
    } else {
    	end = index - 1;
    }
  }
  return null;
}
binarySearch(3, [1, 2, 3, 4, 5]);
// => 2
```

### Other

Check if "robot" has gone a circle, given a list of directions:

```js
function circle(directions) {
  directions = directions.split("");
  var x = 0,
    y = 0,
    ox = 0,
    oy = 0,
    it = 0,
    forv = "F";
  document.write("DIRECTIONS: &nbsp;" + directions + "<br/><br/>")
  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < directions.length; i++) {
      var d = directions[i];
      switch (d) {
        case "F":
          if (forv === "F") {
            y++;
            forv = "F";
          } else if (forv === "L") {
            x--;
            forv = "L";
          } else if (forv === "R") {
            x++;
            forv = "R";
          } else if (forv = "B") {
            y--;
            forv = "B";
          }
          it++;
          document.write("X: " + x, " Y: " + y + "<br/>");
          if (it % 4 === 0) {
            if (x === ox && y === oy) {
              document.write("CIRCLE DETECTED! CIRCUMFERENCE: " + it + "<br/><br/>");
              ox = x;
              oy = y;
            }
          }
          break;
        case "L":
          if (forv === "F") {
            x--;
            forv = "L"
          } else if (forv === "L") {
            y--;
            forv = "B";
          } else if (forv === "R") {
            y++;
            forv = "F";
          } else if (forv === "B") {
            x++;
            forv = "R";
          }
          it++;
          document.write("X: " + x, " Y: " + y + "<br/>");
          if (it % 4 === 0) {
            if (x === ox && y === oy) {
              document.write("CIRCLE DETECTED! CIRCUMFERENCE: " + it + "<br/><br/>");
              ox = x;
              oy = y;
            }
          }
          break;

        case "R":
          if (forv === "F") {
            x++;
            forv = "R"
          } else if (forv === "L") {
            y++;
            forv = "F";
          } else if (forv === "R") {
            y--;
            forv = "B";
          } else if (forv === "B") {
            x--;
            forv = "L";
          }
          it++;
          document.write("X: " + x, " Y: " + y + "<br/>");
          if (it % 4 === 0) {
            if (x === ox && y === oy) {
              document.write("CIRCLE DETECTED! CIRCUMFERENCE: " + it + "<br/><br/>");
              ox = x;
              oy = y;
            }
          }
          break;

        default:
          document.write("Command Error");
      }
    }
  }
}
```
