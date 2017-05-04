## Install
```js
$ npm install --save string-to-regex
```

##　Usage
```js
import {asRegExp,matchObject} from "string-to-regex";
console.log(asRegExp("liangklfang").test("liangklfangl.hello.com"));
//=>true
const defaultConfiguration1 = {
  prepack: {},
  test: "/\\.js$/i"
  //asRegExp will transform to /^\/\\\.js\$\/i/
};
console.log(matchObject(defaultConfiguration1,"http://localhost:8080/index.js"));
//=>false
console.log(matchObject(defaultConfiguration1,"/\\.js$/i"));
//=>true
```

## API
<pre>
 asRegExp:func
  Transform provided string to regex. All special letter will be escape . Such as "/\\.js$/i" will be transformed to  /^\/\\\.js\$\/i/

matchObject:func(obj, str)
  The obj must contain `test` attribute which will be transformed by asRegExp firstly. This function will test whether str supplied will match obj.test or not! Obj.test can also be a Array.
</pre>

