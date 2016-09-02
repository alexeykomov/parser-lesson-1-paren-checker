const str  = '(((}[{one}])';

let stack = [];

let index = 0;

function getNextChar(aString) {
  return aString.charAt(index++);
}

function throwSyntaxError(aSymbol, aIndex, aStack) {
  throw new Error(`Expected ${aSymbol} at position ${aIndex}. Stack is ${aStack}.`);
}

function syntaxCheck(str) {
  while(index < str.length) {
    const char = getNextChar(str);
    if (char === '(') {
      stack.push('PAREN');
    }
    if (char === ')') {
      const top = stack[stack.length - 1];
      if (top === 'PAREN') {
        stack.pop()
      } else {
        throwSyntaxError(top, index, stack);
      }
    }
    if (char === '[') {
      stack.push('BRACKET');
    }
    if (char === ']') {
      const top = stack[stack.length - 1];
      if (top === 'BRACKET') {
        stack.pop()
      } else {
        throwSyntaxError(top, index, stack);
      }
    }
    if (char === '{') {
      stack.push('CURLY');
    }
    if (char === '}') {
      const top = stack[stack.length - 1];
      if (top === 'CURLY') {
        stack.pop()
      } else {
        throwSyntaxError(top, index, stack);
      }
    }
  }
}

syntaxCheck(str);
console.log('Syntax is right.');
