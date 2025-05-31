import ConfiguracionGrammarListener from "./generated/ConfiguracionGrammarListener.js";

export class CustomConfigListener extends ConfiguracionGrammarListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}