/*import { Parser } from "antlr4";
import TestGrammarVisitor from "./generated/TestGrammarVisitor.js";
import TestGrammarParser from "./generated/TestGrammarParser.js";

export class CustomTestGrammarVisitor extends TestGrammarVisitor{*/
/*import * as VisitorModule from '../generated/TestGrammarVisitor.js';
const TestGrammarVisitor = VisitorModule.TestGrammarVisitor;


export class CustomTestGrammarVisitor extends TestGrammarVisitor {

    constructor() {
        super();
        this.memory = new Map();   //Declaro una variable de instancia con una memoria temporal para hacer las reducciones
    } 
    
    visitInt(ctx) {
        //obtengo el lexema correspondiente al INT que reconocio en el texto y lo convierto a entero.
        return parseInt(ctx.INT().getText());
    }

    visitPrintExpr(ctx) {
        const value = this.visit(ctx.expr());
        console.log(`\nResultado: ${value}`);
        return this.visitChildren(ctx);
      }


    visitMulDiv(ctx) {
        /* Las subexpresiones se visitaran recursivamente hasta ir obteniendo los valores correspondientes */
       /* const left =  this.visit(ctx.expr(0));   //visito la subexpresion a la izquierda de la operacion
        const right = this.visit(ctx.expr(1));  //visito la subexpresion a la derecha de la operacion. 
        if (ctx.op.type==TestGrammarParser.MUL)
          return left * right;
        else
          return left / right;
      }

      visitAddSub(ctx) {
        const left =  this.visit(ctx.expr(0));  
        const right = this.visit(ctx.expr(1));  
        if (ctx.op.type==TestGrammarParser.ADD){
          return left + right; }
        else
          return left - right;
      }

      visitParens(ctx) {
        return this.visit(ctx.expr());
      }

      visitId(ctx) {
        const id = ctx.ID().getText();
        if (this.memory.has(id)) return this.memory.get(id);
        return 0;
    }

      visitAssign(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expr());
        this.memory.set(id, value);
        return value;
    }
    
} */

import TestGrammarVisitor from './generated/TestGrammarVisitor.js';
import TestGrammarParser from './generated/TestGrammarParser.js';

export class CustomTestGrammarVisitor extends TestGrammarVisitor {
  visitTestsuite(ctx) {
    console.log('🔎 Interpretando test suite...');
    return this.visitChildren(ctx);
  }

  visitPrueba(ctx) {
    //const nombre = ctx.texto().getText(); // This line is incorrect
    const nombre = ctx.STRING().getText(); // Corrected line
    console.log(`📌 Prueba: ${nombre}`);
    return this.visitChildren(ctx);
  }

  visitPaso(ctx) {
    const tipo = ctx.getText();  // dado / cuando / entonces
    console.log(`🔸 Paso: ${tipo}`);
    return this.visitChildren(ctx);
  }
  
  
}
