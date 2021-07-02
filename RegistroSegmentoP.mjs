export class RegistroSegmentoP {
    #Controle = null
    #Servico = null
    #Cc = null
    #NossoNumero = null
    #Caracteristica = null
    #Titulo = null
    #Juros = null
    #Desconto = null
    #Iof = null
    #Abatimento = null
    #Beneficiario = null
    #Protesto = null
    #BaixaDevolucao = null
    #Moeda = null
    #Contrato = null
    #UsoLivre = null

    constructor(templateSegmentoP) {
            this.#Controle = new Controle(  templateSegmentoP.controle.codigoDoBancoNaCompensacao, 
                                            templateSegmentoP.controle.loteDeServico, 
                                            templateSegmentoP.controle.tipoDeRegistro).Conteudo
            
            this.#Servico = new Servico(    templateSegmentoP.servico.numeroSequencialDoRegistroNoLote, 
                                            templateSegmentoP.servico.codigoSegmentoDoRegistroDetalhe, 
                                            templateSegmentoP.servico.usoExclusivoCnabFebraban1,
                                            templateSegmentoP.servico.codigoDeMovimentoRemessa).Conteudo

            this.#Cc = new ContaCorrente(   templateSegmentoP.contaCorrente.agenciaMantenedoraConta, 
                                            templateSegmentoP.contaCorrente.digitoVerificadorAgencia, 
                                            templateSegmentoP.contaCorrente.numeroContaCorrente, 
                                            templateSegmentoP.contaCorrente.digitoVerificadorConta, 
                                            templateSegmentoP.contaCorrente.digitoVerificadorAgenciaConta).Conteudo

            this.#NossoNumero = new NossoNumero(templateSegmentoP.nossoNumero).Conteudo

            this.#Caracteristica = new CaracteristicaCobranca(  templateSegmentoP.caracteristicaCobranca.codigoDaCarteira,
                                                                templateSegmentoP.caracteristicaCobranca.formaDeCadastramentoDoTituloNoBanco,
                                                                templateSegmentoP.caracteristicaCobranca.tipoDeDocumento,
                                                                templateSegmentoP.caracteristicaCobranca.identificacaoDaEmissaoDoBoletoDePagamento,
                                                                templateSegmentoP.caracteristicaCobranca.identificadaoDaDistribuicaoDoBoletoDePagamento).Conteudo

            this.#Titulo = new Titulo(  templateSegmentoP.titulo.numeroDoDocumentoDeCobranca,
                                        templateSegmentoP.titulo.dataVencimentoTitulo,
                                        templateSegmentoP.titulo.valorNominalTitulo,
                                        templateSegmentoP.titulo.agenciaEncarregadaCobranca,
                                        templateSegmentoP.titulo.digitoVerificadorAgencia,
                                        templateSegmentoP.titulo.especieDoTitulo,
                                        templateSegmentoP.titulo.aceite,
                                        templateSegmentoP.titulo.dataEmissaoTitulo).Conteudo

            this.#Juros = new Juros(    templateSegmentoP.juros.codigoDoJurosDeMora,
                                        templateSegmentoP.juros.dataDoJurosDeMora,
                                        templateSegmentoP.juros.jurosDeMoraPorDiaTaxa).Conteudo

            this.#Desconto = new Desconto(  templateSegmentoP.desconto.codigoDoDesconto,
                                        templateSegmentoP.desconto.dataDoDesconto,
                                        templateSegmentoP.desconto.valorOuPercentualASerConcedido).Conteudo

            this.#Iof = new Iof(    templateSegmentoP.valorDoIofASerRecolhido).Conteudo

            this.#Abatimento = new Abatimento(  templateSegmentoP.valorDoAbatimento).Conteudo

            this.#Beneficiario = new Beneficiario(  templateSegmentoP.identificacaoDoTituloNaEmpresa).Conteudo

            this.#Protesto = new Protesto(  templateSegmentoP.protesto.codigoParaProtesto,
                                            templateSegmentoP.protesto.numeroDeDiasParaProtesto).Conteudo

            this.#BaixaDevolucao = new PrazoBaixaDevolucao( templateSegmentoP.prazo.codigoParaBaixaDevolucao, templateSegmentoP.prazo.numeroDeDiasParaBaixaDevolucao).Conteudo

            this.#Moeda = new Moeda(    templateSegmentoP.codigoDaMoeda).Conteudo

            this.#Contrato = new Contrato(  templateSegmentoP.numeroDoContratoDaOperacaoDeCredito).Conteudo

            this.#UsoLivre = new UsoLivreBancoEmpresa(  templateSegmentoP.usoLivreBancoEmpresaOuAutorizacaoPagamentoParcial).Conteudo
    }
    get RegistroSegmentoP() {
        return this.#Controle + this.#Servico + this.#Cc + this.#NossoNumero + this.#Caracteristica + this.#Titulo + this.#Juros + this.#Desconto + this.#Iof + this.#Abatimento + this.#Beneficiario + this.#Protesto + this.#BaixaDevolucao + this.#Moeda + this.#Contrato + this.#UsoLivre
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
class ContaCorrente {
    #Conteudo = null;
    constructor(agenciaMantenedoraConta, digitoVerificadorAgencia, numeroContaCorrente, digitoVerificadorConta, digitoVerificadorAgenciaConta) {
        if (agenciaMantenedoraConta.length === 5 && digitoVerificadorAgencia.length === 1 && numeroContaCorrente.length === 12 && digitoVerificadorConta.length === 1 && digitoVerificadorAgenciaConta.length === 1) {
            this.#Conteudo = agenciaMantenedoraConta + digitoVerificadorAgencia + numeroContaCorrente + digitoVerificadorConta + digitoVerificadorAgenciaConta
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class NossoNumero {
    #Conteudo = null;
    constructor(numeroIdentificacaoTituloNoBanco) {
        if (numeroIdentificacaoTituloNoBanco.length === 20) {

            this.#Conteudo = numeroIdentificacaoTituloNoBanco
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class CaracteristicaCobranca {
    #Conteudo = null;
    constructor(codigoDaCarteira, formaCadastramentoDoTituloNoBanco, tipoDocumento, identificacaoTDaEmissaoDoBoletoDePagamento, identificacaoDaDistribuicaoDoBoletoDePagamento) {
        if (codigoDaCarteira.length === 1 && formaCadastramentoDoTituloNoBanco.length === 1 && tipoDocumento.length === 1 && identificacaoTDaEmissaoDoBoletoDePagamento.length === 1 && identificacaoDaDistribuicaoDoBoletoDePagamento.length === 1) {
            this.#Conteudo = codigoDaCarteira + formaCadastramentoDoTituloNoBanco + tipoDocumento + identificacaoTDaEmissaoDoBoletoDePagamento + identificacaoDaDistribuicaoDoBoletoDePagamento
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Titulo {
    #Conteudo = null;
    constructor(numeroDoDocumentoDeCobranca, dataVencimentoTitulo, valorNominalTitulo, agenciaEncarregadaDaCobranca, digitoVerifiadorDaAgencia, especieDoTitulo, identificacaoTituloAceitoNaoAceito, dataEmissaoDoTitulo) {
        if (numeroDoDocumentoDeCobranca.length === 15 && dataVencimentoTitulo.length === 8 && valorNominalTitulo.length === 13 && agenciaEncarregadaDaCobranca.length === 5 && digitoVerifiadorDaAgencia.length === 1 && especieDoTitulo.length === 2 && identificacaoTituloAceitoNaoAceito.length === 1 && dataEmissaoDoTitulo.length === 8) {
            this.#Conteudo = numeroDoDocumentoDeCobranca + dataVencimentoTitulo + valorNominalTitulo + agenciaEncarregadaDaCobranca + digitoVerifiadorDaAgencia + especieDoTitulo + identificacaoTituloAceitoNaoAceito + dataEmissaoDoTitulo
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Juros {
    #Conteudo = null
    constructor(codigoJurosDeMora, dataJurosDeMora, taxaJurosDeMoraPorDia) {
        if (codigoJurosDeMora.length === 1 && dataJurosDeMora.length === 8 && taxaJurosDeMoraPorDia.length === 13) {
            this.#Conteudo = codigoJurosDeMora + dataJurosDeMora + taxaJurosDeMoraPorDia
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Desconto {
    #Conteudo = null
    constructor(codigo, data, desconto) {
        if (codigo.length === 1 && data.length === 8 && desconto.length === 15) {
            this.#Conteudo = codigo + data + desconto
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Iof {
    #Conteudo = null
    constructor(valor) {
        if (valor) {
            this.#Conteudo = valor
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Abatimento {
    #Conteudo = null
    constructor(valor) {
        if (valor.length === 15) {
            this.#Conteudo = valor
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Beneficiario {
    #Conteudo = null
    constructor(identificacao) {
        if (identificacao.length === 25) {
            this.#Conteudo = identificacao
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Protesto {
    #Conteudo = null
    constructor(codigo, prazo) {
        if (codigo.length === 1 && prazo.length === 2) {
            this.#Conteudo = codigo + prazo
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class PrazoBaixaDevolucao {
    #Conteudo = null
    constructor(codigoBaixaDevolucao, numeroDeDias) {
        if (codigoBaixaDevolucao.length === 1 && numeroDeDias.length === 3) {
            this.#Conteudo = codigoBaixaDevolucao + numeroDeDias
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Moeda {
    #Conteudo = null
    constructor(codigo) {
        if (codigo.length === 2) {
            this.#Conteudo = codigo
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class Contrato {
    #Conteudo = null
    constructor(numero) {
        if (numero.length === 10) {
            this.#Conteudo = numero
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}
class UsoLivreBancoEmpresa {
    #Conteudo = null
    constructor(usoLivreBancoEmpresa) {
        if (usoLivreBancoEmpresa.length === 1) {
            this.#Conteudo = usoLivreBancoEmpresa
        }
    }
    get Conteudo() {
        return this.#Conteudo
    }
}