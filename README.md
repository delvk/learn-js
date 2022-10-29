# learn-js
Learning Javascript
# New terminology:
Statement: do something;
Expression: represent something;
Strict mode: force javascript to throw errors instead of skipped
Function declaration: the same at normal use
Function expression: use x = function (parameter){return value}
Arrow Function: function short way to declare, example

From this:

```javascript
    x = function(a,b,c){
        return a + b + c;
    }
```

We can re-write like this:

```javascript
    x = (a,b,c) => {
        a + b + c;
    }
```

** Arrow function do not used THIS keyword **

Remove the function keyword and then add arrow before the code block, remove the return statement;

Array: use square bracket; -- the order matter a lot;
Object: use curly bracket; -- order not really matter;



Function block, scope block;

Stack array;

Variable environment;

Execution context will included:
- Variable environment
- Scope chain
- "This" keyword (not point to the function itself or the variable environment)

Let and const use scope block, and cannot be used before initialize
Hoisting: Function declaration can be used before declare, Function expression and arrows depended let/const or var
Temporary Dead Zone: If use let or var, variable will be store here, and accessed it cause different error from not define.

Window object and DOM element
