require('should');

var nlp = require('nlp_compromise');
nlp.plugin(require('../index'));

describe('Link Grammar Plugin', function() {
    it('should find word connections', function() {
        var sen = nlp.sentence('I fed the dog').withLinks();
        sen.terms[1].text.should.equal('fed');
        sen.terms[1].links[1].target.word.should.equal('dog');
        sen.terms[1].links[1].target.label.should.equal('Os');
    });
});
