// Generated from /Users/ceciliacalvo/Proyectos SSL/analizador-test/TestGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestGrammarListener from './TestGrammarListener.js';
import TestGrammarVisitor from './TestGrammarVisitor.js';

const serializedATN = [4,1,23,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
1,1,5,1,28,8,1,10,1,12,1,31,9,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,5,3,40,8,3,10,
3,12,3,43,9,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,3,5,52,8,5,1,6,1,6,1,6,1,6,5,6,
58,8,6,10,6,12,6,61,9,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,
10,12,14,16,0,3,1,0,2,4,1,0,5,9,1,0,10,11,68,0,19,1,0,0,0,2,23,1,0,0,0,4,
34,1,0,0,0,6,36,1,0,0,0,8,44,1,0,0,0,10,51,1,0,0,0,12,53,1,0,0,0,14,64,1,
0,0,0,16,67,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,
0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,24,5,1,0,0,24,25,5,13,0,0,25,29,5,18,0,
0,26,28,3,4,2,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,
30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,19,0,0,33,3,1,0,0,0,34,35,7,0,0,0,35,
5,1,0,0,0,36,41,5,14,0,0,37,38,5,17,0,0,38,40,5,14,0,0,39,37,1,0,0,0,40,
43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,7,1,0,0,0,43,41,1,0,0,0,44,45,
7,1,0,0,45,9,1,0,0,0,46,52,5,13,0,0,47,52,5,12,0,0,48,52,3,16,8,0,49,52,
3,14,7,0,50,52,3,12,6,0,51,46,1,0,0,0,51,47,1,0,0,0,51,48,1,0,0,0,51,49,
1,0,0,0,51,50,1,0,0,0,52,11,1,0,0,0,53,54,5,22,0,0,54,59,3,10,5,0,55,56,
5,21,0,0,56,58,3,10,5,0,57,55,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,
1,0,0,0,60,62,1,0,0,0,61,59,1,0,0,0,62,63,5,23,0,0,63,13,1,0,0,0,64,65,5,
20,0,0,65,66,5,14,0,0,66,15,1,0,0,0,67,68,7,2,0,0,68,17,1,0,0,0,5,21,29,
41,51,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TestGrammarParser extends antlr4.Parser {

    static grammarFileName = "TestGrammar.g4";
    static literalNames = [ null, "'prueba'", "'dado'", "'cuando'", "'entonces'", 
                            "'es'", "'no es'", "'contiene'", "'existe'", 
                            "'debe'", "'verdadero'", "'falso'", null, "'algo'", 
                            null, null, null, "'.'", "'{'", "'}'", "'$'", 
                            "','", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "NUMERO", "STRING", 
                             "IDENT", "NEWLINE", "WS", "DOT", "LBRACE", 
                             "RBRACE", "DOLLAR", "COMMA", "LBRACK", "RBRACK" ];
    static ruleNames = [ "testsuite", "prueba", "paso", "objeto", "estado", 
                         "valor", "lista", "variable", "booleano" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TestGrammarParser.ruleNames;
        this.literalNames = TestGrammarParser.literalNames;
        this.symbolicNames = TestGrammarParser.symbolicNames;
    }



	testsuite() {
	    let localctx = new TestsuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TestGrammarParser.RULE_testsuite);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.prueba();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prueba() {
	    let localctx = new PruebaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TestGrammarParser.RULE_prueba);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(TestGrammarParser.T__0);
	        this.state = 24;
	        this.match(TestGrammarParser.STRING);
	        this.state = 25;
	        this.match(TestGrammarParser.LBRACE);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0)) {
	            this.state = 26;
	            this.paso();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(TestGrammarParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paso() {
	    let localctx = new PasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TestGrammarParser.RULE_paso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objeto() {
	    let localctx = new ObjetoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TestGrammarParser.RULE_objeto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(TestGrammarParser.IDENT);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 37;
	            this.match(TestGrammarParser.DOT);
	            this.state = 38;
	            this.match(TestGrammarParser.IDENT);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TestGrammarParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TestGrammarParser.RULE_valor);
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.match(TestGrammarParser.STRING);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(TestGrammarParser.NUMERO);
	            break;
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.booleano();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
	            this.variable();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 50;
	            this.lista();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TestGrammarParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(TestGrammarParser.LBRACK);
	        this.state = 54;
	        this.valor();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 55;
	            this.match(TestGrammarParser.COMMA);
	            this.state = 56;
	            this.valor();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this.match(TestGrammarParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TestGrammarParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(TestGrammarParser.DOLLAR);
	        this.state = 65;
	        this.match(TestGrammarParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TestGrammarParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TestGrammarParser.EOF = antlr4.Token.EOF;
TestGrammarParser.T__0 = 1;
TestGrammarParser.T__1 = 2;
TestGrammarParser.T__2 = 3;
TestGrammarParser.T__3 = 4;
TestGrammarParser.T__4 = 5;
TestGrammarParser.T__5 = 6;
TestGrammarParser.T__6 = 7;
TestGrammarParser.T__7 = 8;
TestGrammarParser.T__8 = 9;
TestGrammarParser.T__9 = 10;
TestGrammarParser.T__10 = 11;
TestGrammarParser.NUMERO = 12;
TestGrammarParser.STRING = 13;
TestGrammarParser.IDENT = 14;
TestGrammarParser.NEWLINE = 15;
TestGrammarParser.WS = 16;
TestGrammarParser.DOT = 17;
TestGrammarParser.LBRACE = 18;
TestGrammarParser.RBRACE = 19;
TestGrammarParser.DOLLAR = 20;
TestGrammarParser.COMMA = 21;
TestGrammarParser.LBRACK = 22;
TestGrammarParser.RBRACK = 23;

TestGrammarParser.RULE_testsuite = 0;
TestGrammarParser.RULE_prueba = 1;
TestGrammarParser.RULE_paso = 2;
TestGrammarParser.RULE_objeto = 3;
TestGrammarParser.RULE_estado = 4;
TestGrammarParser.RULE_valor = 5;
TestGrammarParser.RULE_lista = 6;
TestGrammarParser.RULE_variable = 7;
TestGrammarParser.RULE_booleano = 8;

class TestsuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_testsuite;
    }

	prueba = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PruebaContext);
	    } else {
	        return this.getTypedRuleContext(PruebaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterTestsuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitTestsuite(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitTestsuite(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PruebaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_prueba;
    }

	STRING() {
	    return this.getToken(TestGrammarParser.STRING, 0);
	};

	LBRACE() {
	    return this.getToken(TestGrammarParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(TestGrammarParser.RBRACE, 0);
	};

	paso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasoContext);
	    } else {
	        return this.getTypedRuleContext(PasoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterPrueba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitPrueba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitPrueba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_paso;
    }


	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterPaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitPaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitPaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjetoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_objeto;
    }

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestGrammarParser.IDENT);
	    } else {
	        return this.getToken(TestGrammarParser.IDENT, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestGrammarParser.DOT);
	    } else {
	        return this.getToken(TestGrammarParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterObjeto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitObjeto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitObjeto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_valor;
    }

	STRING() {
	    return this.getToken(TestGrammarParser.STRING, 0);
	};

	NUMERO() {
	    return this.getToken(TestGrammarParser.NUMERO, 0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_lista;
    }

	LBRACK() {
	    return this.getToken(TestGrammarParser.LBRACK, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	RBRACK() {
	    return this.getToken(TestGrammarParser.RBRACK, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestGrammarParser.COMMA);
	    } else {
	        return this.getToken(TestGrammarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_variable;
    }

	DOLLAR() {
	    return this.getToken(TestGrammarParser.DOLLAR, 0);
	};

	IDENT() {
	    return this.getToken(TestGrammarParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestGrammarParser.RULE_booleano;
    }


	enterRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestGrammarListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestGrammarVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TestGrammarParser.TestsuiteContext = TestsuiteContext; 
TestGrammarParser.PruebaContext = PruebaContext; 
TestGrammarParser.PasoContext = PasoContext; 
TestGrammarParser.ObjetoContext = ObjetoContext; 
TestGrammarParser.EstadoContext = EstadoContext; 
TestGrammarParser.ValorContext = ValorContext; 
TestGrammarParser.ListaContext = ListaContext; 
TestGrammarParser.VariableContext = VariableContext; 
TestGrammarParser.BooleanoContext = BooleanoContext; 
