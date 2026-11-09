import express from "express";
    
const app = express();
const PORT = 3000;

const capitais: { [key: string]: string } = {
    AC: "Rio Branco",
    AL: "Maceió",
    AP: "Macapá",
    AM: "Manaus",
    BA: "Salvador",
    CE: "Fortaleza",
    DF: "Brasília",
    ES: "Vitória",
    GO: "Goiânia",
    MA: "São Luís",
    MT: "Cuiabá",
    MS: "Campo Grande",
    MG: "Belo Horizonte",
    PA: "Belém",
    PB: "João Pessoa",
    PR: "Curitiba",
    PE: "Recife",
    PI: "Teresina",
    RJ: "Rio de Janeiro",
    RN: "Natal",
    RS: "Porto Alegre",
    RO: "Porto Velho",
    RR: "Boa Vista",
    SC: "Florianópolis",
    SP: "São Paulo",
    SE: "Aracaju",
    TO: "Palmas"
};

// Consultar capital do estado
app.get("/estados/:sigla/", (req, res) => {
    const sigla = req.params.sigla.toUpperCase();

    const capital = capitais[sigla];

    if (!capital) {
        return res.status(404).json({
            erro: "Estado não encontrado."
        });
    }

    return res.status(200).json({
        sigla: sigla,
        capital: capital
    });
});


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

