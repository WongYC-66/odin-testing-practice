# odin-testing-practice
A simple javascript testing with Jest library


1. install Jest  with
```
 npm install --save-dev jest 
```
2. add followong to package.json
```
"scripts": {
    "test": "jest"
} 
```
3. run with 
```
"npm run test"
```  
4. then you shall see 5 tests passed for 5 simple functions as such:

```
 PASS  ./example.test.js
  ✓ capitalize first character, foo => Foo (2 ms)
  ✓ reverse a string, foo => oof
  ✓ calculate + - x / correctly
  ✓ caesarCipher works correctly, .eg. call("abc", 3) => def (4 ms)
  ✓ analyze array correctly, .eg. avg = 4, min = 1, max = 8, length = 6 (19 ms)
```