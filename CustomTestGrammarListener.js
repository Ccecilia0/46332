import TestGrammarListener from "./generated/TestGrammarListener.js";

export class CustomTestGrammarListener extends TestGrammarListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}