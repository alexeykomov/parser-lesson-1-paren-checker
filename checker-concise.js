const str  = '(((}[{one}])';

let stack = [];

let index = 0;

const opening = ['(', '{', '['];
const closingToOpening = {
  ')' : '(',
  '}' : '{',
  ']' : '[',
}

function getNextChar(aString) {
  return aString.charAt(index++);
}

function throwSyntaxError(aSymbol, aIndex, aStack) {
  throw new Error(`Expected ${aSymbol} at position ${aIndex}. Stack is ${aStack}.`);
}

function syntaxCheck(str) {
  while(index < str.length) {
    const char = getNextChar(str);
    if (opening.includes(char) {
      stack.push(char);
    }
    if (char in closingToOpening) {
      const top = stack[stack.length - 1];
      if (top === closingToOpening[char]) {
        stack.pop()
      } else {
        throwSyntaxError(top, index, stack);
      }
    }
  }
}

syntaxCheck(str);
console.log('Syntax is right.');
