const str  = '(}[{one}])';

let stack = [];

let index = 0;

function getNextChar(aString) {
  return aString.charAt(index++);
}

function throwSyntaxError(aSymbol, aIndex) {
  throw new Error(`Expected ${top} at ${index}.`);
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
        throwSyntaxError(top, index);
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
        throwSyntaxError(top, index);
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
        throwSyntaxError(top, index);
      }
    }
  }
}
