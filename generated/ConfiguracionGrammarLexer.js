// Generated from ConfiguracionGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,99,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,60,8,2,1,3,1,
3,1,3,1,3,5,3,66,8,3,10,3,12,3,69,9,3,1,3,1,3,1,4,1,4,5,4,75,8,4,10,4,12,
4,78,9,4,1,5,4,5,81,8,5,11,5,12,5,82,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,
4,10,94,8,10,11,10,12,10,95,1,10,1,10,0,0,11,1,1,3,2,5,3,7,4,9,5,11,6,13,
7,15,8,17,9,19,10,21,11,1,0,5,2,0,34,34,92,92,2,0,65,90,97,122,3,0,48,57,
65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,104,0,1,1,0,0,0,0,3,1,0,0,0,
0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,
0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,37,1,0,0,0,5,59,
1,0,0,0,7,61,1,0,0,0,9,72,1,0,0,0,11,80,1,0,0,0,13,84,1,0,0,0,15,86,1,0,
0,0,17,88,1,0,0,0,19,90,1,0,0,0,21,93,1,0,0,0,23,24,5,99,0,0,24,25,5,111,
0,0,25,26,5,110,0,0,26,27,5,102,0,0,27,28,5,105,0,0,28,29,5,103,0,0,29,30,
5,117,0,0,30,31,5,114,0,0,31,32,5,97,0,0,32,33,5,99,0,0,33,34,5,105,0,0,
34,35,5,111,0,0,35,36,5,110,0,0,36,2,1,0,0,0,37,38,5,115,0,0,38,39,5,101,
0,0,39,40,5,99,0,0,40,41,5,99,0,0,41,42,5,105,0,0,42,43,5,111,0,0,43,44,
5,110,0,0,44,4,1,0,0,0,45,46,5,118,0,0,46,47,5,101,0,0,47,48,5,114,0,0,48,
49,5,100,0,0,49,50,5,97,0,0,50,51,5,100,0,0,51,52,5,101,0,0,52,53,5,114,
0,0,53,60,5,111,0,0,54,55,5,102,0,0,55,56,5,97,0,0,56,57,5,108,0,0,57,58,
5,115,0,0,58,60,5,111,0,0,59,45,1,0,0,0,59,54,1,0,0,0,60,6,1,0,0,0,61,67,
5,34,0,0,62,66,8,0,0,0,63,64,5,92,0,0,64,66,9,0,0,0,65,62,1,0,0,0,65,63,
1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,1,
0,0,0,70,71,5,34,0,0,71,8,1,0,0,0,72,76,7,1,0,0,73,75,7,2,0,0,74,73,1,0,
0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,10,1,0,0,0,78,76,1,0,0,
0,79,81,7,3,0,0,80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,
83,12,1,0,0,0,84,85,5,123,0,0,85,14,1,0,0,0,86,87,5,125,0,0,87,16,1,0,0,
0,88,89,5,61,0,0,89,18,1,0,0,0,90,91,5,59,0,0,91,20,1,0,0,0,92,94,7,4,0,
0,93,92,1,0,0,0,94,95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,
97,98,6,10,0,0,98,22,1,0,0,0,7,0,59,65,67,76,82,95,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ConfiguracionGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "ConfiguracionGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'configuracion'", "'seccion'", null, null, 
                         null, null, "'{'", "'}'", "'='", "';'" ];
	static symbolicNames = [ null, "CONFIG", "SECCION", "BOOLEANO", "CADENA", 
                          "ID", "NUM", "LLAVE_ABIERTA", "LLAVE_CERRADA", 
                          "IGUAL", "PUNTO_Y_COMA", "WS" ];
	static ruleNames = [ "CONFIG", "SECCION", "BOOLEANO", "CADENA", "ID", "NUM", 
                      "LLAVE_ABIERTA", "LLAVE_CERRADA", "IGUAL", "PUNTO_Y_COMA", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ConfiguracionGrammarLexer.EOF = antlr4.Token.EOF;
ConfiguracionGrammarLexer.CONFIG = 1;
ConfiguracionGrammarLexer.SECCION = 2;
ConfiguracionGrammarLexer.BOOLEANO = 3;
ConfiguracionGrammarLexer.CADENA = 4;
ConfiguracionGrammarLexer.ID = 5;
ConfiguracionGrammarLexer.NUM = 6;
ConfiguracionGrammarLexer.LLAVE_ABIERTA = 7;
ConfiguracionGrammarLexer.LLAVE_CERRADA = 8;
ConfiguracionGrammarLexer.IGUAL = 9;
ConfiguracionGrammarLexer.PUNTO_Y_COMA = 10;
ConfiguracionGrammarLexer.WS = 11;



