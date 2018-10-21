/*
MIT License

Copyright (c) 2018 Wessel Tip

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const maps = require('./lib/strings.json');

module.exports = class textutil {
  static hold(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    if (text.length > 1000) return new RangeError('String limit exceeded (1000)');
    let str1 = '';
    let str2 = '';
    for (let c of text.toLowerCase()) {
      str1 += `${maps.indicatorMap[c] ? `${maps.indicatorMap[c]}` : ' '} `;
      str2 += `${maps.indicatorMap[c] ? '🙆 ' : '  '}`;
    }
    return `${str1}\n${str2}`;
  }

  static mock(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.toString().split('').map((a, b) => b % 2 ? a.toLowerCase() : a.toUpperCase()).join('');
  }

  static reverse(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.split('').reverse().join('');
  }

  static flip(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    for(let i = 0; i < Object.keys(maps.flipText).length; i++) text = text.replace(Object.keys(maps.flipText)[i], maps.flipText[Object.keys(maps.flipText)[i]]);
    return text.split('').reverse().join('');
  }

  static leet(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.replace(/l|i/gi, '1')
    .replace(/G/g, '6')
    .replace(/g/g, '9')
    .replace(/e/gi, '3')
    .replace(/a/gi, '4')
    .replace(/s/gi, '5')
    .replace(/t/gi, '7')
    .replace(/o/gi, '0')
    .replace(/z/gi, '2')
    .replace(/b/gi, '68').toUpperCase();
  }

  static accent(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.toString().split('').map((i) => {
      if (i = i.toLowerCase(), maps.accentMap[i]) {
        let l = Math.floor(Math.random() * maps.accentMap[i].length);
        return maps.accentMap[i][l];
      }
    }).join('');
  }

  static space(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.toString().split('').join('  ');
  }
  
  static cramp(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.toString().replace(/\s/g, '');
  }

  static titlecase(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.toString().split('').map(a => a[0].toUpperCase() + a.slice(1)).join(' ');
  }

  static indicator(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.toString().split('').map(i => {
      if (i = i.toLowerCase(), maps.indicatorMap[i]) {
          return maps.indicatorMap[i];
      }
      return i;
  }).join(' ');
  }

  static tree(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    let a = [];
    let b = 0;
    let c = d => 2 * d + 1;
    for(let d of text.toString().split('')) a[b] || (a[b] = []), a[b].push(d), a[b].length > c(b) && b++;
    for(let [d, f] of a.entries()) {
        let g = a.length - 1 - d;
        f = f.join(''), a[d] = f;
        for (let h = 0; h < g; h++) f = ' ' + f, a[d] = f;
    }
    return a.join('\n');
  }
  
  static tiny(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.toString().split('').map((i) => {
      if (i = i.toLowerCase(), maps.tinyMap[i]) {
        return maps.tinyMap[i];
      }
      return i;
    }).join(' ');
  }
  
  static aesthetic(text) {
    if (!text || typeof text !== 'string') return new SyntaxError('Invalid message');
    return text.replace(/[a-zA-Z0-9!\?\.'";:\]\[}{\)\(@#\$%\^&\*\-_=\+`~><]/g, (c) => String.fromCharCode(0xFEE0 + c.charCodeAt(0))).replace(/ /g, '　'); 
  }
};
