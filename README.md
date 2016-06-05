## Link Grammar plugin for nlp_compromise

### How to install
```bash
npm install nlp-links
```

### How to use
```js
var nlp = require('nlp_compromise');
nlp.plugin(require('nlp-links'));

var sen = nlp.sentence('I fed the dog').withLinks();
sen.terms[1].text.should.equal('fed');
// Each term now has links to words they are grammatically connected to
sen.terms[1].links[1].target.word.should.equal('dog');
sen.terms[1].links[1].target.label.should.equal('Os');
```

### Source library
https://www.npmjs.com/package/link-grammar
