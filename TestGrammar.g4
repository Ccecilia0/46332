/*grammar TestGrammar;

testsuite: prueba*;

prueba: 'prueba' texto '{' paso* '}' ;

paso
: ('dado' | 'cuando' | 'entonces') objeto estado? valor+ NEWLINE
;


objeto: IDENT ('.' IDENT)* ;

estado: 'es' 
      | 'no es' 
      | 'contiene' 
      | 'existe' 
      | 'debe' 
      ;

valor: texto
| numero 
| booleano 
| variable 
| lista 
;

/*texto: DOUBLE_Q (IDENT)+ DOUBLE_Q
| SINGLE_Q (IDENT)+ SINGLE_Q
;
texto: DOUBLE_Q (IDENT) DOUBLE_Q 
| SINGLE_Q (IDENT) SINGLE_Q
;*/
/* 
texto : STRING ;

STRING : '"' (~["\r\n])* '"' | '\'' (~['\r\n])* '\'' ;

lista: '[' valor (',' valor)* ']';

variable: DOLLAR IDENT ;  

numero: NUMERO ;

//Lexemas (definicion de tokens)

NUMERO: [0-9]+ ;
booleano: 'verdadero' | 'falso' ; 
IDENT: [a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_.]* ;   
DOUBLE_Q: '"' ;                   
SINGLE_Q: '\'' ;
NEWLINE: '\r'? '\n';
WS: [ \t]+ -> skip;
DOT        : '.' ;
LBRACE     : '{' ;
RBRACE     : '}' ;
DOLLAR     : '$' ;
COMMA      : ',' ;
LBRACK     : '[' ;
RBRACK     : ']' ; 

*/

grammar TestGrammar;

// === PARSER RULES ===

testsuite : prueba+ ;

prueba : 'prueba' STRING LBRACE paso* RBRACE ;

paso : ('dado' | 'cuando' | 'entonces'); 
//objeto estado? valor+ NEWLINE ;

objeto : IDENT (DOT IDENT)* ;

estado : 'es' | 'no es' | 'contiene' | 'existe' | 'debe' ;

valor : STRING | NUMERO | booleano | variable | lista ;

lista : LBRACK valor (COMMA valor)* RBRACK ;

variable : DOLLAR IDENT ;

booleano : 'verdadero' | 'falso' ;

// === LEXER RULES ===

NUMERO : [0-9]+ ;


STRING : 'algo';

//STRING : '"' (~["\r\n])* '"' | '\'' (~['\r\n])* '\'' ;

IDENT : [a-zA-Z_][a-zA-Z0-9_]* ;

NEWLINE : '\r'? '\n' ;

WS : [ \t]+ -> skip ;

DOT : '.' ;
LBRACE : '{' ;
RBRACE:'}';
DOLLAR : '$' ;
COMMA : ',' ;
LBRACK : '[' ;
RBRACK : ']' ;
