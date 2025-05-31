import antlr4 from 'antlr4';
import fs from 'fs';
import { CharStreams, CommonTokenStream } from 'antlr4';

import ConfiguracionGrammarLexer from './generated/grammar/ConfiguracionGrammarLexer.js';
import ConfiguracionGrammarParser from './generated/grammar/ConfiguracionGrammarParser.js';
import { CustomConfigVisitor } from './CustomConfigVisitor.js';

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("Error leyendo input.txt");
        return;
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new ConfiguracionGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new ConfiguracionGrammarParser(tokenStream);

    parser.buildParseTrees = true;
    const tree = parser.configuracion();

    if (parser._syntaxErrors > 0) {
        console.error("Se encontraron errores de sintaxis.");
        return;
    }

    console.log("Entrada válida.");
    console.log("\nÁrbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    const visitor = new CustomConfigVisitor();
    visitor.visit(tree);
}
main();

