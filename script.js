document.addEventListener('DOMContentLoaded', () => {
    const companies = [
        "YaraInternational", "Syngenta", "YaraBrasil", "LavoroAgro", "Belagrícola",
        "GRUPOSINAGRO", "AgrexdoBrasil", "CasadoAdubo", "AgroAmazônia", "AgrícolaAlvoradaS.A",
        "AdubosReal", "AgroGalaxy", "UPL", "CasadaLavoura", "FIAGRIL", "RuralBrasil",
        "Agrocerrado", "AgroJangada", "NativaAgronegócios", "FerrariZagatto",
        "MarcaAgroMercantil-UmaMarcaNutrienSoluçõesAgrícolas", "Agrocat", "AtuaAgro",
        "Agro100", "SyngentaDigitalBrasil", "SyngentaGroup", "PantanalAgrícola", "ORÍGEO",
        "SynagroOficial", "Fertgrow", "GrupoTECAGRO", "LavoroDeragro", "LavoroIntegra",
        "GrãodeOuroAgronegócios", "LavoroPitangueiras", "BRAAgroquímica", "Agro-100",
        "YaraLatinoamérica", "Agro-SenaSementes", "AgrichemdoBrasil", "SAFRARICA",
        "NativaAgronegocios", "Dipagro", "SementesCampeã", "LavoroImpactoInsumosAgrícolas",
        "Agrovenci", "Agro-Sena", "DAKANGFRAMING", "agrichem", "SINAGROSA", "LavoroAgrovenci",
        "DakangAgriculture&Food大康国际农业", "AgroSenaraSA", "LavoroAméricaInsumos",
        "LavoroProduttiva", "AgrexdoBrasilPatrimonialS.A.", "SINAGROPRODUTOSAGROPECUÁRIOSS/A",
        "DAKANGHoldingsGroupCo.,ltd.", "LemefértilProdutosAgrícolasLtda", "LavoroFloema",
        "LavoroSolloSulDissul", "Yoshida&HirataAgronegóciosLtda", "LavoroCentralAgrícola",
        "LavoroCultivar", "LavoroProdutec", "LavoroAgrozap", "BioRural", "LavoroNovaGeração",
        "LavoroCATR", "LavoroCasaTrevo", "Coram", "SINAGROINDIAPVTLTD", "Agrofel",
        "DakangHoldingCo.,Ltd.", "TerraNovaTours", "BioRural", "Synagro"
    ];

    const companiesContainer = document.getElementById('companies');

    companies.forEach(company => {
        const companyElement = document.createElement('div');
        companyElement.textContent = company;
        companyElement.classList.add('company');
        companyElement.onclick = () => copyToClipboard(company);
        companiesContainer.appendChild(companyElement);
    });
});


function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        mostrarPopUp(`"${text}" copiado com sucesso!`);
    }, (err) => {
        console.error('Erro ao copiar: ', err);
        mostrarPopUp("Erro ao copiar texto.");
    });
}

// Inclua esta nova função conforme fornecido
function mostrarPopUp(mensagem) {
    const popUp = document.getElementById("popUp");
    popUp.textContent = mensagem; // Altera o texto do pop-up para refletir a ação ou erro.
    popUp.classList.add("active");
    setTimeout(() => {
        popUp.classList.remove("active");
    }, 3000); // O pop-up desaparece após 3 segundos
}