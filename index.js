var LinkGrammar = require('link-grammar');
var linkGrammar = new LinkGrammar();

module.exports = function(nlp) {
    return {
        Sentence: {
            withLinks: function() {
                var linkage = linkGrammar.parse(this.str);
                this.terms.forEach(function(term) {
                    term.links = linkage.getConnectorWords(term.text);
                });
                return this;
            }
        }
    };
};
