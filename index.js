//import antlr4 from 'antlr4';
import { CharStreams, CommonTokenStream } from 'antlr4';
import fs from 'fs';

import TestGrammarLexer from './generated/TestGrammarLexer.js';
import TestGrammarParser from './generated/TestGrammarParser.js';
import { CustomTestGrammarVisitor } from './CustomTestGrammarVisitor.js';
// Si vas a usar un listener en el futuro, también podés importar ParseTreeWalker y tu listener personalizado

async function main() {
    let input;

    // Intentar leer la entrada desde input.txt
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error('⚠️ No se encontró el archivo input.txt. Por favor crealo con el texto a analizar.');
        process.exit(1);
    }

    // Crear los componentes del análisis
    const inputStream = CharStreams.fromString(input);
    const lexer = new TestGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new TestGrammarParser(tokenStream);

    // Agregar listener personalizado de errores
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            console.error(`❌ Error en línea ${line}:${column} → ${msg}`);
        }
    });
    
    parser.buildParseTrees = true;

    const tokens = tokenStream.getTokens();
    for (const token of tokens) {
       console.log(`${token.text} -> ${parser.symbolicNames[token.type]}`);
}

    const tree = parser.testsuite();

    // Verificar si hubo errores de sintaxis
    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\n✅ Entrada válida.");
        console.log("🌳 Árbol de derivación:");
        console.log(tree.toStringTree(parser.ruleNames));

        // Visitor personalizado
        const visitor = new CustomTestGrammarVisitor();
        visitor.visit(tree);
    }
}

main();


