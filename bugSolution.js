```javascript
function doSomething(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }
}

const myObj = {
  a: 1,
  b: 2,
  c: 3
};

doSomething(myObj);
```