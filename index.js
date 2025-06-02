import antlr4 from 'antlr4';
import fs from 'fs';
import { CharStreams, CommonTokenStream } from 'antlr4';

// Asegurate que las rutas sean correctas para tu proyecto
import ConfiguracionGrammarLexer from './generated/grammar/ConfiguracionGrammarLexer.js';
import ConfiguracionGrammarParser from './generated/grammar/ConfiguracionGrammarParser.js';
import { CustomConfigVisitor } from './CustomConfigVisitor.js';

async function main() {
    let input;
    try {
        // Asegurate de tener un archivo 'input.txt' en la misma carpeta o especifica la ruta completa
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("Error leyendo input.txt. Asegurate de que el archivo existe y es accesible.");
        return;
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new ConfiguracionGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    
    // Cargar todos los tokens
    tokenStream.fill(); 

    console.log("\n📄 Tabla de lexemas y tokens:");
    console.log("--------------------------------------");
    console.log("| Lexema                | Token        |");
    console.log("|-----------------------|--------------|");

    // *** ¡AQUÍ ESTÁ EL CAMBIO CLAVE! ***
    // Accedemos a symbolicNames directamente desde la CLASE del lexer
    const tokenNames = ConfiguracionGrammarLexer.symbolicNames;

    // Iterar sobre los tokens para generar la tabla
    for (const token of tokenStream.tokens) {
        const tokenType = token.type;
        const lexema = token.text;

        // El token EOF tiene el tipo -1. Otros tokens que se saltan (como WS) pueden tener tipo > 0
        // pero queremos ignorarlos si no tienen un nombre simbólico relevante en la tabla.
        if (tokenType !== antlr4.Token.EOF && tokenNames[tokenType]) {
            const tokenName = tokenNames[tokenType];
            console.log(`| ${lexema.padEnd(21)} | ${tokenName.padEnd(12)} |`);
        } else if (tokenType === antlr4.Token.EOF) {
            console.log(`| ${lexema.padEnd(21)} | EOF          |`);
        }
        // No imprimimos tokens como WS si el tokenType no tiene un nombre simbólico,
        // lo que es el comportamiento deseado para los tokens que se "saltan".
    }

    console.log("--------------------------------------");

    const parser = new ConfiguracionGrammarParser(tokenStream);

    parser.buildParseTrees = true;
    const tree = parser.configuracion();

    if (parser._syntaxErrors > 0) {
        console.error("❌ Se encontraron errores de sintaxis.");
        return;
    }

    console.log("✅ Entrada válida.");
    console.log("\n🌳 Árbol de derivación:");
    // `parser.ruleNames` es necesario para la representación legible del árbol
    console.log(tree.toStringTree(parser.ruleNames));

    const visitor = new CustomConfigVisitor();
    visitor.visit(tree);
}

main(); // Llama a la función principal