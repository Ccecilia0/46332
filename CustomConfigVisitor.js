import ConfiguracionGrammarVisitor from './generated/grammar/ConfiguracionGrammarVisitor.js';

export class CustomConfigVisitor extends ConfiguracionGrammarVisitor {

    visitConfiguracion(ctx) {
        const nombre = ctx.ID().getText();
        const secciones = this.visit(ctx.secciones());

        const resultado = {
            nombre: nombre,
            secciones: secciones
        };

        console.log("\n✅ Traducción a JavaScript:\n");
        console.log("const configuracion = " + JSON.stringify(resultado, null, 4) + ";");
        return resultado;
    }

    visitSecciones(ctx) {
        return ctx.seccion().map(seccion => this.visit(seccion));
    }

    visitSeccion(ctx) {
        const nombre = ctx.ID().getText();
        const parametros = this.visit(ctx.parametros());
        return {
            nombre: nombre,
            parametros: parametros
        };
    }

    visitParametros(ctx) {
        return ctx.parametro().map(p => this.visit(p));
    }

    visitParametro(ctx) {
        const clave = ctx.ID().getText();
        const valor = this.visit(ctx.valor());
        return {
            clave: clave,
            valor: valor
        };
    }

    visitValor(ctx) {
        if (ctx.NUM()) return parseInt(ctx.NUM().getText());
        if (ctx.CADENA()) return ctx.CADENA().getText().slice(1, -1); // quitar comillas
        if (ctx.BOOLEANO()) return ctx.BOOLEANO().getText() === "verdadero";
    }
}

