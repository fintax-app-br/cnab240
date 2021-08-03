export class RegistroSegmentoQ {
    #Controle = null
    #Servico = null
    #DadosPagador = null
    #SacadorAvalista = null
    #Correspondente = null
    #Cnab2 = null

    constructor(templateSegmentoQ) {
        this.#Controle         = new Controle(  templateSegmentoQ.controle.codigoDoBancoNaCompensacao, 
                                                templateSegmentoQ.controle.loteDeServico, 
                                                templateSegmentoQ.controle.tipoDeRegistro).Conteudo
        
        this.#Servico          = new Servico(   templateSegmentoQ.servico.numeroSequencialDoRegistroNoLote, 
                                                templateSegmentoQ.servico.codigoSegmentoDoRegistroDetalhe, 
                                                templateSegmentoQ.servico.usoExclusivoCnabFebraban1, 
                                                templateSegmentoQ.servico.codigoDeMovimentoRemessa).Conteudo
        
        this.#DadosPagador          = new DadosPagador(  templateSegmentoQ.dadosPagador.tipoDeInscricao, 
                                                    templateSegmentoQ.dadosPagador.numeroDeInscricao, 
                                                    templateSegmentoQ.dadosPagador.nome, 
                                                    templateSegmentoQ.dadosPagador.endereco, 
                                                    templateSegmentoQ.dadosPagador.bairro, 
                                                    templateSegmentoQ.dadosPagador.cep, 
                                                    templateSegmentoQ.dadosPagador.sufixoCep, 
                                                    templateSegmentoQ.dadosPagador.cidade, 
                                                    templateSegmentoQ.dadosPagador.uf).Conteudo

        this.#SacadorAvalista  = new SacadorAvalista(   templateSegmentoQ.sacadorAvalista.tipoDeInscricao, 
                                                        templateSegmentoQ.sacadorAvalista.numeroDeInscricao, 
                                                        templateSegmentoQ.sacadorAvalista.nome).Conteudo

        this.#BancoCorrespondente   = new Correspondente(   templateSegmentoQ.bancoCorrespondente,
                                                            templateSegmentoQ.nossoNumeroBancoCorrespondente).Conteudo

        this.#Cnab2             = new Cnab(  templateSegmentoQ.usoExclusivoCnabFebraban2).Conteudo
    }
    get Controle() {
        return this.#Controle
    }
    get Servico() {
        return this.#Servico
    }
    get DadosPagador() {
        return this.#DadosPagador
    }
    get SacadorAvalista() {
        return this.#SacadorAvalista
    }
    get Correspondente() {
        return this.#Correspondente
    }
    get Cnab2() {
        return this.#Cnab2
    }
    get RegistroSegmentoQ() {
        return this.#Controle + this.#Servico + this.#DadosPagador + this.#SacadorAvalista + this.#Correspondente + this.#Cnab2
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
class Servico {
    #Conteudo = null;
    constructor(numeroSequencialDeRegistroNoLote, codigoDeSegmentoDoRegistro, usoExclusivoFebrabanCnab, codigoMovimentoRemessa) {
        if (numeroSequencialDeRegistroNoLote.length === 5 && codigoDeSegmentoDoRegistro.length === 1 && usoExclusivoFebrabanCnab.length === 1 && codigoMovimentoRemessa.length === 2) {
            this.#Conteudo = numeroSequencialDeRegistroNoLote + codigoDeSegmentoDoRegistro + usoExclusivoFebrabanCnab + codigoMovimentoRemessa
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class DadosPagador {
    #Conteudo = null;
    constructor(tipoDeInscricao, numeroDeInscricao, nome, endereco, bairro, cep, sufixoCep, cidade, uf) {
        if (tipoDeInscricao.length === 1 && numeroDeInscricao.length === 15 && nome.length === 40 && endereco.length === 40 && bairro.length === 15 && cep.length === 5 && sufixoCep.length === 3 && cidade.length === 15 && uf.length === 2) {
            this.#Conteudo = tipoDeInscricao + numeroDeInscricao + nome + endereco + bairro + cep + sufixoCep + cidade + uf
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class SacadorAvalista {
    #Conteudo = null;
    constructor(tipoInscricao, numeroInscricao, nomeDoSacadorAvalista) {
        if (tipoInscricao.length === 1 && numeroInscricao.length === 15 && nomeDoSacadorAvalista.length === 40) {
            this.#Conteudo = tipoInscricao + numeroInscricao + nomeDoSacadorAvalista
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Correspondente {
    #Conteudo = null;
    constructor(codigoBancoCorrespondenteNaCompensacao, nossoNumeroNoBancoCorrespondente) {
        if (codigoBancoCorrespondenteNaCompensacao.length === 3 && nossoNumeroNoBancoCorrespondente.length === 20) {
            this.#Conteudo = codigoBancoCorrespondenteNaCompensacao + nossoNumeroNoBancoCorrespondente
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Cnab {
    #Conteudo = null;
    constructor(usoExclusivoFebrabanCnab) {
        if (usoExclusivoFebrabanCnab.length === 8) {
            this.#Conteudo = usoExclusivoFebrabanCnab
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}