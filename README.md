# Analizador de Configuración

Este proyecto implementa un analizador léxico, sintáctico y semántico para archivos de configuración, utilizando ANTLR4 y Node.js.

## Requisitos:
- Node.js (versión 18 o superior recomendada)
- Java (para la generación de archivos ANTLR)

## Instalación:
1. Clona este repositorio (tu legajo es el nombre del repositorio en GitHub):
   `git clone https://github.com/Ccecilia0/46332.git`
2. Navega a la carpeta del proyecto (que se llama `ssl-antlr-config` dentro del repositorio clonado):
   `cd 46332/ssl-antlr-config`
3. Instala las dependencias:
   `npm install`

## Generación de archivos ANTLR (si es necesario regenerar):
(Solo si has modificado la gramática .g4 o necesitas regenerar los archivos del lexer/parser/visitor. Asegúrate de tener el `antlr-4.13.2-complete.jar` en la raíz de la carpeta `ssl-antlr-config`).
1. Navega a la carpeta del proyecto:
   `cd ssl-antlr-config`
2. Ejecuta:
   `java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor ConfiguracionGrammar.g4 -o generated/grammar`

## Ejecución del Analizador:

Para analizar un archivo de entrada, asegúrate de que el contenido deseado esté en el archivo `input.txt` dentro de la carpeta `ssl-antlr-config`. Luego, desde la raíz de la carpeta `ssl-antlr-config`, ejecuta:

`npm start`
(o `node index.js`)

El programa imprimirá el árbol de derivación y la traducción a JavaScript si la entrada es válida, o mensajes de error de sintaxis si no lo es.

## Ejemplos de Archivos de Entrada:

Hemos incluido cuatro ejemplos de archivos de entrada en la raíz del proyecto para facilitar las pruebas:
- `input_valido1.txt`
- `input_valido2.txt`
- `input_invalido1.txt`
- `input_invalido2.txt`

Puedes copiar el contenido de cualquiera de estos archivos en `input.txt` para probarlos.