/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-211.js
 * @description Object.defineProperties - 'descObj' is a RegExp object which implements its own [[Get]] method to get 'get' property (8.10.5 step 7.a)
 */


function testcase() {
        var obj = {};

        var descObj = new RegExp();

        descObj.get = function () {
            return "RegExp";
        };

        Object.defineProperties(obj, {
            property: descObj
        });

        return obj.property === "RegExp";
    }
runTestCase(testcase);
