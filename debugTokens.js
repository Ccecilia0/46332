import antlr4 from 'antlr4';
import ConfiguracionGrammarLexer from './generated/grammar/ConfiguracionGrammarLexer.js';
import ConfiguracionGrammarParser from './generated/grammar/ConfiguracionGrammarParser.js';

import fs from 'fs';

let input = '';
try {
    const inputFilePath = './input.txt';
    input = fs.readFileSync(inputFilePath, 'utf8');
    console.log("--- Contenido de input.txt leído exitosamente ---\n", input);
    console.log("--------------------------------------------------\n");
} catch (err) {
    console.error("Error al leer input.txt. Asegúrate de que el archivo exista y la ruta sea correcta:", err);
    process.exit(1);
}

const chars = new antlr4.InputStream(input);
const lexer = new ConfiguracionGrammarLexer(chars);

console.log("\n--- Tokens generados por el Lexer ---");
let token = lexer.nextToken();
while (token.type !== antlr4.Token.EOF) {
    // --- CAMBIO AQUÍ PARA MANEJAR TOKENS NO RECONOCIDOS ---
    let tokenTypeName;
    if (token.type === antlr4.Token.INVALID_TYPE) {
        tokenTypeName = "INVALID_TYPE (No Reconocido)";
    } else if (lexer.symbolicNames && lexer.symbolicNames[token.type]) {
        tokenTypeName = lexer.symbolicNames[token.type];
    } else {
        tokenTypeName = `UNKNOWN_TYPE (${token.type})`; // Para tipos que no están en symbolicNames
    }
    // --- FIN DEL CAMBIO ---

    if (token.channel === antlr4.Token.DEFAULT_CHANNEL) {
        console.log(`Tipo: ${tokenTypeName} | Texto: '${token.text}' | Linea: ${token.line} | Columna: ${token.column}`);
    } else {
        console.log(`Tipo: ${tokenTypeName} | Texto: '${token.text}' | Linea: ${token.line} | Columna: ${token.column} (CANAL OCULTO)`);
    }
    token = lexer.nextToken();
}

console.log("\n--- Fin de tokens ---");