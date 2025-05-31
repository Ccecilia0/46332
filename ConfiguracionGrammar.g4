grammar ConfiguracionGrammar;

configuracion
    : 'configuracion' ID '{' secciones '}' ;

secciones
    : (seccion)* ;

seccion
    : 'seccion' ID '{' parametros '}' ;

parametros
    : (parametro)* ;

parametro
    : ID '=' valor ';' ;

valor
    : NUM
    | CADENA
    | BOOLEANO ;

BOOLEANO : 'verdadero' | 'falso' ;
CADENA   : '"' ( ~["\\] | '\\' . )* '"' ;
ID       : [a-zA-Z] [a-zA-Z0-9]* ;
NUM      : [0-9]+ ;
WS       : [ \t\r\n]+ -> skip ;
