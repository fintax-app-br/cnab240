export class RegistroHeaderArquivo {

    #Controle = null
    #Cnab1 = null
    #Empresa = null
    #Banco = null
    #Cnab2 = null
    #Arquivo = null
    #ReservadoBanco = null
    #ReservadoEmpresa = null
    #Cnab3 = null

    #Registro = null

    constructor(templateHeaderArquivo) {
        this.#Controle = new Controle(templateHeaderArquivo.controle.codigoDoBancoNaCompensacao,
            templateHeaderArquivo.controle.loteDeServico,
            templateHeaderArquivo.controle.tipoDeRegistro).Conteudo

        this.#Cnab1 = new Cnab(templateHeaderArquivo.usoExclusivoCnabFebraban1).Conteudo

        this.#Empresa = new Empresa(templateHeaderArquivo.empresa.tipoInscricaoEmpresa,
            templateHeaderArquivo.empresa.numeroInscricaoEmpresa,
            templateHeaderArquivo.empresa.codigoConvenioBanco,
            templateHeaderArquivo.empresa.agenciaMantenedoraConta,
            templateHeaderArquivo.empresa.digitoVerificadorAgencia,
            templateHeaderArquivo.empresa.numeroContaCorrente,
            templateHeaderArquivo.empresa.digitoVerificadorConta,
            templateHeaderArquivo.empresa.digitoVerificadorAgenciaConta,
            templateHeaderArquivo.empresa.nomeEmpresa).Conteudo

        this.#Banco = new Banco(templateHeaderArquivo.nomeBanco).Conteudo

        this.#Cnab2 = new Cnab(templateHeaderArquivo.usoExclusivoCnabFebraban2).Conteudo

        this.#Arquivo = new Arquivo(templateHeaderArquivo.arquivo.codigoRemessaRetorno,
            templateHeaderArquivo.arquivo.dataGeracaoArquivo,
            templateHeaderArquivo.arquivo.horarioGeracaoArquivo,
            templateHeaderArquivo.arquivo.numeroSequencialArquivo,
            templateHeaderArquivo.arquivo.numeroVersaoLayoutArquivo,
            templateHeaderArquivo.arquivo.densidadeGravacaoArquivo).Conteudo

        this.#ReservadoBanco = new Reservado(templateHeaderArquivo.usoReservadoBanco).Conteudo

        this.#ReservadoEmpresa = new Reservado(templateHeaderArquivo.usoReservadoEmpresa).Conteudo

        this.#Cnab3 = new Cnab(templateHeaderArquivo.usoExclusivoCnabFebraban3).Conteudo

        this.#Registro = this.#Controle + this.#Cnab1 + this.#Empresa + this.#Banco + this.#Cnab2 + this.#Arquivo + this.#ReservadoBanco + this.#ReservadoEmpresa + this.#Cnab3
    }
    get Controle() {
        return this.#Controle
    }
    get Cnab1() {
        return this.#Controle
    }
    get Empresa() {
        return this.#Empresa
    }
    get NomeBanco() {
        return this.#Banco
    }
    get Cnab2() {
        return this.#Cnab2
    }
    get Arquivo() {
        return this.#Arquivo
    }
    get ReservadoBanco() {
        return this.#ReservadoBanco
    }
    get ReservadoEmpresa() {
        return this.#ReservadoEmpresa
    }
    get Cnab3() {
        return this.#Cnab3
    }
    get RegistroHeaderArquivo() {
        return this.#Registro
    }
}
class Controle {
    #Conteudo = null
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
        if (usoExclusivoFebrabanCnab.length === 9 || usoExclusivoFebrabanCnab.length === 10 || usoExclusivoFebrabanCnab.length === 29) {
            this.#Conteudo = usoExclusivoFebrabanCnab
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Empresa {
    #Conteudo = null
    constructor(tipoInscricaoEmpresa, numeroInscricaoEmpresa, codigoConvenioBanco, agenciaMantenedoraConta, digitoVerificadorAgencia, numeroContaCorrente, digitoVerificadorConta, digitoVerificadorAgenciaConta, nomeEmpresa) {
        if (tipoInscricaoEmpresa.length === 1 && numeroInscricaoEmpresa.length === 14 && codigoConvenioBanco.length === 20 && agenciaMantenedoraConta.length === 5 && digitoVerificadorAgencia.length === 1 && numeroContaCorrente.length === 12 && digitoVerificadorConta.length === 1 && digitoVerificadorAgenciaConta.length === 1 && nomeEmpresa.length === 30) {
            this.#Conteudo = tipoInscricaoEmpresa + numeroInscricaoEmpresa + codigoConvenioBanco + agenciaMantenedoraConta + digitoVerificadorAgencia + numeroContaCorrente + digitoVerificadorConta + digitoVerificadorAgenciaConta + nomeEmpresa
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Banco {
    #Conteudo = null
    constructor(nomeBanco) {
        if (nomeBanco.length === 30) {
            this.#Conteudo = nomeBanco
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Arquivo {
    #Conteudo = null
    constructor(codigoDaRemessaRetorno, dataGeracaoArquivo, horarioGeracaoArquivo, numeroSequencialDoArquivo, numeroVersaoLayoutDoArquivo, densidadeDeGravacaoDeArquivo) {
        if (codigoDaRemessaRetorno.length === 1 && dataGeracaoArquivo.length === 8 && horarioGeracaoArquivo.length === 6 && numeroSequencialDoArquivo.length === 6 && numeroVersaoLayoutDoArquivo.length === 3 && densidadeDeGravacaoDeArquivo.length === 5) {
            this.#Conteudo = codigoDaRemessaRetorno + dataGeracaoArquivo + horarioGeracaoArquivo + numeroSequencialDoArquivo + numeroVersaoLayoutDoArquivo + densidadeDeGravacaoDeArquivo
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Reservado {
    #Conteudo = null
    constructor(bancoEmpresa) {
        if (bancoEmpresa.length === 20) {
            this.#Conteudo = bancoEmpresa
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}