/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-c-ii-1.js
 * @description Array.prototype.reduceRight - callbackfn called with correct parameters (initialvalue not passed)
 */


function testcase() { 
 
  function callbackfn(prevVal, curVal, idx, obj)
  {
    if(idx+1 < obj.length && obj[idx] === curVal && obj[idx+1] === prevVal)
      return curVal;
    else 
      return false;
  }

  var arr = [0,1,true,null,new Object(),"five"];
  if( arr.reduceRight(callbackfn) === 0) 
    return true;
 }
runTestCase(testcase);
