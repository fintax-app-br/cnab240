export class RegistroTrailerArquivo {
    
    #Controle = null
    #Cnab1 = null
    #Totais = null
    #Cnab2 = null
    
    constructor(templateTrailerArquivo) {
        this.#Controle  = new Controle( templateTrailerArquivo.controle.codigoDoBancoNaCompensacao, 
                                        templateTrailerArquivo.controle.loteDeServico, 
                                        templateTrailerArquivo.controle.tipoDeRegistro).Conteudo

        this.#Cnab1     = new Cnab( templateTrailerArquivo.usoExclusivoCnabFebraban1).Conteudo

        this.#Totais    = new Totais(   templateTrailerArquivo.totais.quantidadeDeLotesNoArquivo, 
                                        templateTrailerArquivo.totais.quantidadeDeRegistrosNoArquivo, 
                                        templateTrailerArquivo.totais.quantidadeDeContasLotes).Conteudo

        this.#Cnab2     = new Cnab( templateTrailerArquivo.usoExclusivoCnabFebraban2).Conteudo
    }
    get Controle() {
        return this.#Controle
    }
    get Cnab1() {
        return this.#Cnab1
    }
    get Totais() {
        return this.#Totais
    }
    get Cnab2() {
        return this.#Cnab2
    }
    get RegistroTrailerArquivo() {
        return this.#Controle + this.#Cnab1 + this.#Totais + this.#Cnab2
    }
}
class Controle {
    #Conteudo = null;
    constructor(codigoBanco, loteServico, tipoRegistro) {
        if (codigoBanco.length === 3 && loteServico.length === 4 && tipoRegistro.length === 1) {
            this.#Conteudo = codigoBanco + loteServico + tipoRegistro
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}

class Cnab {
    #Conteudo = null
    constructor(usoExclusivoFebrabanCnab) {
        if (usoExclusivoFebrabanCnab.length === 9 || usoExclusivoFebrabanCnab.length === 205) {
            this.#Conteudo = usoExclusivoFebrabanCnab
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}

class Totais {
    #Conteudo = null
    constructor(quantidadeLotesDoArquivo, quantidadeRegistrosDoArquivo, quantidadeContasConciliarLotes) {
        if (quantidadeLotesDoArquivo.length === 6 && quantidadeRegistrosDoArquivo.length === 6 && quantidadeContasConciliarLotes.length === 6) {
            this.#Conteudo = quantidadeLotesDoArquivo + quantidadeRegistrosDoArquivo + quantidadeContasConciliarLotes
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}