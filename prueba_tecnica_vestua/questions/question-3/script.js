/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {

  str = str[0];
  var lista = [];

  if(')]}'.includes(str[0]) || '([{'.includes(str[-1])){
    return false;
  }

  for(let i in str){
    if('([{'.includes(str[i])){
      lista.push(str[i]);
    }
    if(')]}'.includes(str[i])){
      if (lista.length == 0){
        return false;             
      }
      if ((str[i-1] == '{' && str[i] != '}') || (str[i-1] == '(' && str[i] != ')') || (str[i-1] == '[' && str[i] != ']')){
        return false;
      }
      lista.pop();
    }
  }
  
  return (lista.length == 0);
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);

