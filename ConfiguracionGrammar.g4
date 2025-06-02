grammar ConfiguracionGrammar;

configuracion
    : CONFIG ID LLAVE_ABIERTA secciones LLAVE_CERRADA ;

secciones
    : (seccion)* ;

seccion
    : SECCION ID LLAVE_ABIERTA parametros LLAVE_CERRADA ;

parametros
    : (parametro)* ;

parametro
    : ID IGUAL valor PUNTO_Y_COMA ;

valor
    : NUM
    | CADENA
    | BOOLEANO ;

// TOKENS LÉXICOS
CONFIG         : 'configuracion' ;
SECCION        : 'seccion' ;
BOOLEANO       : 'verdadero' | 'falso' ;
CADENA         : '"' ( ~["\\] | '\\' . )* '"' ;
ID             : [a-zA-Z] [a-zA-Z0-9]* ;
NUM            : [0-9]+ ;

LLAVE_ABIERTA  : '{' ;
LLAVE_CERRADA  : '}' ;
IGUAL          : '=' ;
PUNTO_Y_COMA   : ';' ;

WS             : [ \t\r\n]+ -> skip ;
