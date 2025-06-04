# Analizador de Configuración

Este proyecto implementa un analizador léxico, sintáctico y semántico para archivos de configuración, utilizando ANTLR4 y Node.js.

## Requisitos:
- Node.js (versión 18 o superior recomendada)
- Java (para la generación de archivos ANTLR)

## Instalación:
1. Clona este repositorio:
   `git clone https://github.com/Ccecilia0/46332.git`
2. Navega a la carpeta del proyecto:
   `cd 46332`
3. Instala las dependencias:
   `npm install`

## Notas Importantes

**Permiso Especial:** Con permiso de la profesora, se ha tomado la decisión de **eliminar las tildes** de los lexemas "configuracion", "seccion" y "parametros" en la gramática para evitar posibles problemas de compatibilidad o codificación. 

## Ejecución del Analizador:

Ejecuta:

`npm start`
(o `node index.js`)

El programa imprimirá la tabla de lexemas-tokens, el árbol de derivación y la traducción a JavaScript si la entrada es válida, o mensajes de error de sintaxis si no lo es.

## Ejemplos de Archivos de Entrada:

Hemos incluido cuatro ejemplos de archivos de entrada en la raíz del proyecto para facilitar las pruebas:
- `input_valido1.txt`
- `input_valido2.txt`
- `input_invalido1.txt`
- `input_invalido2.txt`

Puedes copiar el contenido de cualquiera de estos archivos en `input.txt` para probarlos.