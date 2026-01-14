# Javascript from basics to advanced

## Lesson One
### Variables
There are three types of varibles we use in javascript
``` js
    var name = "Swostik"
    let surname = "Gautam"
    const placeOfBirth = "Nepal"
 ```
 
1. var
This is one of the way to declare a variable in javascript which can be reassigned and redeclared.It is fucntion scoped which mean it can be redeclared in the same scope. It is considered the oldest way of creating variables in javascript. It is not recommended way because let's say multiple people are working on a same project and one of them creats a variable which is already declered before by someone else, this can lead to various problems.

2. let
This is another way to declare a variable in javascript which can change later, but unlike var it cannot be redeclared. It is a block scoped which mean it cannot be redeclared in the same scope. It is considered safer way of creating variable in javascript because it will not cause any problems like var.

3. const
This is another way to declare a variable in javascript which is once declared the value has to be assigned in the mean time. As it's name suggests the value of const variable once declared it cannot be changed later i.e it will stay constant throughout the the program. It is also block scoped which mean it cannot be reassigne in the same scope. 

``` js 
// Allowed
var myName = "Swostik"
// Not Allowed
const myNationality = "Nepali"
let myAge = 27
```