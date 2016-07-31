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

To Test Speed (Quicksort Wins):
```js
function test() {
	document.write('Sort<br/>')
  var t0 = performance.now();
  document.write(sort(arr) + '<br/>')
  var t1 = performance.now();
  document.write("Sort took " + (t1 - t0) + " milliseconds." + '<br/><br/>')

  document.write('Quicksort<br/>')
  var t0 = performance.now();
  document.write(quicksort(arr) + '<br/>')
  var t1 = performance.now();
  document.write("Quick took " + (t1 - t0) + " milliseconds." + '<br/><br/>')

  document.write('Bubble<br/>')
  var t0 = performance.now();
  document.write(bub(arr) + '<br/>')
  var t1 = performance.now();
  document.write("Bubble took " + (t1 - t0) + " milliseconds." + '<br/><br/>')
}
test()
```


### Other

Check if "robot" has gone a circle, given a list of directions:

```js
function circle(directions) {
	directions = directions.split("");
  var x = 0, y = 0, ox = 0, oy = 0, it = 0, prev="", forv="F";
  document.write("DIRECTIONS: &nbsp;" + directions + "<br/><br/>")
  for (var i = 0; i < directions.length; i++) {
  	var d = directions[i];
  	switch(d) {
    	case "F":
      	if(forv==="F") {
        	y++;
          forv="F";
        } else if(forv==="L") {
        	x--;
          forv="L";
        } else if(forv==="R") {
        	x++;
          forv="R";
        } else if(forv="B") {
        	y--;
          forv="B";
        }
      	prev="F";
        it++;
        document.write("X: " + x, " Y: " + y + "<br/>");
        if(it % 4 === 0) {
        	if(x === ox && y === oy) {
          	document.write("CIRCLE DETECTED");
            ox = x;
            oy = y;
          }
        }
        break; 
      case "L":
      	if(forv==="F") {
        	x--;
          forv="L"
        } else if(forv==="L") {
        	y--;
          forv="B";
        } else if(forv==="R") {
        	y++;
          forv="F";
        } else if(forv==="B") {
        	x++;
          forv="R";
        }
      	prev="L";
        it++;
        document.write("X: " + x, " Y: " + y + "<br/>");
        if(it % 4 === 0) {
        	if(x === ox && y === oy) {
          	document.write("CIRCLE DETECTED");
            ox = x;
            oy = y;
          }
        }
        break;
        
      case "R":
      	if(forv==="F") {
        	x++;
          forv="R"
        } else if(forv==="L") {
        	y++;
          forv="F";
        } else if(forv==="R") {
        	y--;
          forv="B";
        } else if(forv==="B") {
        	x--;
          forv="L";
        }
      	prev="R";
        it++;
        document.write("X: " + x, " Y: " + y + "<br/>");
        if(it % 4 === 0) {
        	if(x === ox && y === oy) {
          	document.write("CIRCLE DETECTED! CIRCUMFERENCE: " + it);
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
```
