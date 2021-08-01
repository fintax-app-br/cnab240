export class RegistroHeaderLote{

    #Controle = null
    #Servico = null
    #Cnab2 = null
    #Empresa = null
    #Informacao1 = null
    #Informacao2 = null
    #ControleCobranca = null
    #DataCredito = null
    #Cnab3 = null

    #Registro = null

    constructor(templateHeaderLote) {
        this.#Controle          = new Controle( templateHeaderLote.controle.codigoDoBancoNaCompensacao, 
                                                templateHeaderLote.controle.loteDeServico, 
                                                templateHeaderLote.controle.tipoDeRegistro).Conteudo

        this.#Servico           = new Servico(  templateHeaderLote.servico.tipoDeOperacao, 
                                                templateHeaderLote.servico.tipoDeServico, 
                                                templateHeaderLote.servico.usoExclusivoCnabFebraban1, 
                                                templateHeaderLote.servico.numeroVersaoLayoutDoLote).Conteudo

        this.#Cnab2             = new Cnab(     templateHeaderLote.usoExclusivoCnabFebraban2).Conteudo

        this.#Empresa           = new Empresa(  templateHeaderLote.empresa.tipoInscricaoEmpresa, 
                                                templateHeaderLote.empresa.numeroInscricaoEmpresa, 
                                                templateHeaderLote.empresa.codigoConvenioBanco, 
                                                templateHeaderLote.empresa.agenciaMantenedoraConta, 
                                                templateHeaderLote.empresa.digitoVerificadorAgencia, 
                                                templateHeaderLote.empresa.numeroContaCorrente,
                                                templateHeaderLote.empresa.digitoVerificadorConta,
                                                templateHeaderLote.empresa.digitoVerificadorAgenciaConta,
                                                templateHeaderLote.empresa.nomeEmpresa).Conteudo
        
        this.#Informacao1       = new Informacao(   templateHeaderLote.informacao1).Conteudo
        
        this.#Informacao2       = new Informacao(   templateHeaderLote.informacao2).Conteudo
        
        this.#ControleCobranca  = new ControleCobranca( templateHeaderLote.controleDaCobranca.numeroRemessaRetorno, 
                                                        templateHeaderLote.controleDaCobranca.dataGeracaoRemessaRetorno).Conteudo
        
        this.#DataCredito       = new DataCredito(  templateHeaderLote.dataCredito).Conteudo
        
        this.#Cnab3             = new Cnab( templateHeaderLote.usoExclusivoCnabFebraban3).Conteudo

        this.#Registro = this.#Controle + this.#Servico + this.#Cnab2 + this.#Empresa + this.#Informacao1 + this.#Informacao2 + this.#ControleCobranca + this.#ControleCobranca + this.#DataCredito + this.#Cnab3
    }
    get Controle() {
        return this.#Controle
    }
    get Servico() {
        return this.#Servico
    }
    get Cnab2() {
        return this.#Cnab2
    }
    get Empresa() {
        return this.#Empresa
    }
    get Informacao1() {
        return this.#Informacao1
    }
    get Informacao2() {
        return this.#Informacao2
    }
    get ControleCobranca() {
        return this.#ControleCobranca
    }
    get DataCredito() {
        return this.#DataCredito
    }
    get Cnab3() {
        return this.#Cnab3
    }
    get RegistroHeaderLote() {
        return this.#Registro
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
    constructor(tipoOperacao, tipoServico, usoExclusivoFebrabanCnab, numeroVersaoLayoutDoLote) {
        if (tipoOperacao.length === 1 && tipoServico.length === 2 && usoExclusivoFebrabanCnab.length === 2 && numeroVersaoLayoutDoLote.length === 3) {
            this.#Conteudo = tipoOperacao + tipoServico + usoExclusivoFebrabanCnab + numeroVersaoLayoutDoLote
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Cnab {
    #Conteudo = null;
    constructor(usoExclusivoFebrabanCnab) {
        if (usoExclusivoFebrabanCnab.length === 1 || usoExclusivoFebrabanCnab.length === 33 ) {
            this.#Conteudo = usoExclusivoFebrabanCnab
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Empresa {
    #Conteudo = null;
    constructor(tipoInscricaoEmpresa, numeroInscricaoEmpresa, codigoConvenioBanco, agenciaMantenedoraConta, digitoVerificadorAgencia, numeroContaCorrente, digitoVerificadorConta, digitoVerificadorAgenciaConta, nomeEmpresa) {
        if (tipoInscricaoEmpresa.length === 1 && numeroInscricaoEmpresa.length === 15 && codigoConvenioBanco.length === 20 && agenciaMantenedoraConta.length === 5 && digitoVerificadorAgencia.length === 1 &&  numeroContaCorrente.length === 12 && digitoVerificadorConta.length === 1 && digitoVerificadorAgenciaConta.length === 1 && nomeEmpresa.length === 30) {
            this.#Conteudo = tipoInscricaoEmpresa + numeroInscricaoEmpresa + codigoConvenioBanco + agenciaMantenedoraConta + digitoVerificadorAgencia + numeroContaCorrente + digitoVerificadorConta + digitoVerificadorAgenciaConta + nomeEmpresa
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Informacao {
    #Conteudo = null;
    constructor(mensagem) {
        if (mensagem.length === 40) {
            this.#Conteudo = mensagem
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class ControleCobranca {
    #Conteudo = null;
    constructor(numeroRemessaRetorno, dataGravacaoRemessaRetorno) {
        if (numeroRemessaRetorno.length === 8 && dataGravacaoRemessaRetorno.length === 8) {
            this.#Conteudo = numeroRemessaRetorno + dataGravacaoRemessaRetorno
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class DataCredito {
    #Conteudo = null;
    constructor(dataDoCredito) {
        if (dataDoCredito.length === 8) {
            this.#Conteudo = dataDoCredito
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}