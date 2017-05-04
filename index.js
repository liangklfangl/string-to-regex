function asRegExp(test) {
    if(typeof test === "string") 
    	test = new RegExp("^" + test.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"));
   return test;
}

/**
 * Whether or not str match regex of test
 * @param  {[type]} str  [description]
 * @param  {[type]} test [description]
 * @return {[type]}      [description]
 */
function matchPart(str, test) {
    if(!test){
    	console.log("Please make sure that test attr exist!");
    	return;
    }
    test = asRegExp(test);
    if(Array.isArray(test)) {
        return test.map(asRegExp).filter(function(regExp) {
            return regExp.test(str);
        }).length > 0;
    } else {
        return test.test(str);
    }
};
function matchObject(obj, str) {
    if(obj.test)
        if(!matchPart(str, obj.test)) 
        return false;
    if(obj.include)
        if(!matchPart(str, obj.include)) return false;
    if(obj.exclude)
        if(matchPart(str, obj.exclude)) return false;
    return true;
};


module.exports = {
	asRegExp,
	matchObject
}
