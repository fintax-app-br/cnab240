export class RegistroTrailerLote {
    #Controle = null
    #Cnab1 = null
    #QuantidadeRegistros = null
    #CobrancaSimples = null
    #CobrancaVinculada = null
    #CobrancaCaucionada = null
    #CobrancaDescontada = null
    #NumeroAviso = null
    #Cnab2 = null

    constructor(templateTrailerLote) {
        this.#Controle               = new Controle(    templateTrailerLote.controle.codigoDoBancoNaCompensacao, 
                                                        templateTrailerLote.controle.loteDeServico, 
                                                        templateTrailerLote.controle.tipoDeRegistro).Conteudo

        this.#Cnab1                  = new Cnab(    templateTrailerLote.usoExclusivoCnabFebraban1).Conteudo

        this.#QuantidadeRegistros    = new QuantidadeRegistros(  templateTrailerLote.quantidadeDeRegistrosNoLote).Conteudo

        this.#CobrancaSimples        = new CobrancaSimples( templateTrailerLote.cobrancaSimples.quantidade, 
                                                            templateTrailerLote.cobrancaSimples.valor).Conteudo

        this.#CobrancaVinculada      = new CobrancaVinculada(   templateTrailerLote.cobrancaVinculada.quantidade, 
                                                                templateTrailerLote.cobrancaVinculada.valor).Conteudo

        this.#CobrancaCaucionada     = new CobrancaCaucionada(  templateTrailerLote.cobrancaCaucionada.quantidade, 
                                                                templateTrailerLote.cobrancaCaucionada.valor).Conteudo

        this.#CobrancaDescontada     = new CobrancaDescontada(  templateTrailerLote.cobrancaDescontada.quantidade, 
                                                                templateTrailerLote.cobrancaDescontada.valor).Conteudo

        this.#NumeroAviso            = new NumeroAviso(   templateTrailerLote.numeroAvisoLancamento).Conteudo

        this.#Cnab2                  = new Cnab(    templateTrailerLote.usoExclusivoCnabFebraban2).Conteudo
    }
    get Controle() {
        return this.#Controle
    }
    get Cnab1() {
        return this.#Cnab1
    }
    get Quantidade() {
        return this.#QuantidadeRegistros
    }
    get CobrancaSimples() {
        return this.#CobrancaSimples
    }
    get CobrancaVinculada() {
        return this.#CobrancaVinculada
    }
    get CobrancaCaucionada() {
        return this.#CobrancaCaucionada
    }
    get CobrancaDescontada() {
        return this.#CobrancaDescontada
    }
    get NumeroAviso() {
        return this.#NumeroAviso
    }
    get Cnab2() {
        return this.#Cnab2
    }
    get RegistroTrailerLote() {
        return this.#Controle + this.#Cnab1 + this.#QuantidadeRegistros + this.#CobrancaSimples + this.#CobrancaVinculada + this.#CobrancaCaucionada + this.#CobrancaDescontada + this.#NumeroAviso + this.#Cnab2
    }
}
class Controle {
    #Conteudo = null;
    constructor(banco, lote, registro) {
        if (banco.length === 3 && lote.length === 4 && registro.length === 1) {
            this.#Conteudo = banco + lote + registro
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Cnab {
    #Conteudo = null;
    constructor(usoExclusivo) {
        if (usoExclusivo.length === 9 || usoExclusivo.length === 117) {
            this.#Conteudo = usoExclusivo
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Quantidade {
    #Conteudo = null;
    constructor(quantidadeDeRegistrosNoLote) {
        if (quantidadeDeRegistrosNoLote.length === 6) {
            this.#Conteudo = quantidadeDeRegistrosNoLote
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class CobrancaSimples {
    #Conteudo = null;
    constructor(quantidadeDeTitulos, valorTotalDosTitulos) {
        if (quantidadeDeTitulos.length === 6 || valorTotalDosTitulos.length === 17) {
            this.#Conteudo = quantidadeDeTitulos + valorTotalDosTitulos
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class CobrancaVinculada {
    #Conteudo = null;
    constructor(quantidadeDeTitulos, valorTotalDosTitulos) {
        if (quantidadeDeTitulos.length === 6 || valorTotalDosTitulos.length === 17) {
            this.#Conteudo = quantidadeDeTitulos + valorTotalDosTitulos
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class CobrancaCaucionada {
    #Conteudo = null;
    constructor(quantidadeDeTitulos, valorTotalDosTitulos) {
        if (quantidadeDeTitulos.length === 6 || valorTotalDosTitulos.length === 17) {
            this.#Conteudo = quantidadeDeTitulos + valorTotalDosTitulos
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class CobrancaDescontada {
    #Conteudo = null;
    constructor(quantidadeDeTitulos, valorTotalDosTitulos) {
        if (quantidadeDeTitulos.length === 6 || valorTotalDosTitulos.length === 17) {
            this.#Conteudo = quantidadeDeTitulos + valorTotalDosTitulos
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Aviso {
    #Conteudo = null;
    constructor(numeroDoAvisoDeLancamento) {
        if (numeroDoAvisoDeLancamento.length === 8) {
            this.#Conteudo = numeroDoAvisoDeLancamento
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}