var classX = (function someX() {
  var private = function (x) {
    console.log("Hey, I'm still here! :: ", x, " times");
  };
  return {
    test1: function () {private(1);},
    test2: function () {private(2);},
  };

})();

// more JavaScript

classX.test1();
classX.test2();

console.log(classX)