const genes = [
    { name: "LCT", description: "Lactase gene associated with lactose tolerance" },
    { name: "MC1R", description: "Gene linked to hair color and skin type" },
    { name: "EYE_COLOR", description: "Gene responsible for eye color" },
    { name: "APOE", description: "Gene related to cholesterol metabolism and heart disease risk" },
    { name: "HAIR_COLOR", description: "Gene influencing hair color variation" },
    { name: "SKIN_COLOR", description: "Gene influencing skin color variation" },
];

const scenarios = [
    {
        scenario: "A patient has lactose intolerance. Choose a gene editing option to enhance their lactose tolerance:",
        options: [
            { option: "Edit LCT gene for improved lactose tolerance", correct: true, outcome: "Patient's lactose tolerance is improved." },
            { option: "Edit MC1R gene for hair color change", correct: false, outcome: "Outcome: No effect on lactose tolerance." },
            { option: "Edit EYE_COLOR gene for eye color change", correct: false, outcome: "Outcome: No effect on lactose tolerance." },
            { option: "Edit PTC gene for taste sensitivity modification", correct: false, outcome: "Outcome: No effect on lactose tolerance." }
        ]
    },
    {
        scenario: "A patient has a high risk of heart disease. Choose a gene editing option to lower their risk:",
        options: [
            { option: "Edit APOE gene for reduced heart disease risk", correct: true, outcome: "Patient's heart disease risk is reduced." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on heart disease risk." },
            { option: "Edit SKIN_COLOR gene for skin color change", correct: false, outcome: "Outcome: No effect on heart disease risk." },
            { option: "Edit CETP gene for improved cholesterol regulation", correct: false, outcome: "Outcome: No effect on heart disease risk." }
        ]
    },
    {
          scenario: "A patient has a rare genetic disorder. Choose a gene editing option to correct the disorder:",
          options: [
              { option: "Edit DISORDER gene to correct the genetic disorder", correct: true, outcome: "Patient's genetic disorder is corrected." },
              { option: "Edit EYE_COLOR gene for eye color change", correct: false, outcome: "Outcome: No effect on genetic disorder." },
              { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on genetic disorder." },
              { option: "Edit HEIGHT gene for increased height", correct: false, outcome: "Outcome: No effect on genetic disorder." }
          ]
    },
    {
        scenario: "A patient has a predisposition to obesity. Choose a gene editing option to modify their metabolism:",
        options: [
            { option: "Edit MC4R gene for improved metabolism", correct: true, outcome: "Patient's metabolism is improved." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on metabolism." },
            { option: "Edit SKIN_COLOR gene for skin color change", correct: false, outcome: "Outcome: No effect on metabolism." },
            { option: "Edit FTO gene for appetite regulation", correct: false, outcome: "Outcome: No effect on metabolism." }
        ]
    },
    {
        scenario: "A patient has a family history of diabetes. Choose a gene editing option to regulate their insulin levels:",
        options: [
            { option: "Edit INS gene for improved insulin regulation", correct: true, outcome: "Patient's insulin levels are regulated." },
            { option: "Edit EYE_COLOR gene for eye color change", correct: false, outcome: "Outcome: No effect on insulin regulation." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on insulin regulation." },
            { option: "Edit GLUT2 gene for glucose transport", correct: false, outcome: "Outcome: No effect on insulin regulation." }
        ]
    },
    {
        scenario: "A patient is at risk of skin cancer due to sun exposure. Choose a gene editing option to enhance their UV protection:",
        options: [
            { option: "Edit MC1R gene for improved UV protection", correct: true, outcome: "Patient's UV protection is enhanced." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on UV protection." },
            { option: "Edit SKIN_COLOR gene for skin color change", correct: false, outcome: "Outcome: No effect on UV protection." },
            { option: "Edit PIGM gene for melanin production", correct: false, outcome: "Outcome: No effect on UV protection." }
        ]
    },
    {
        scenario: "A patient has a history of allergies. Choose a gene editing option to reduce their allergic reactions:",
        options: [
            { option: "Edit HLA-DQ gene for reduced allergic reactions", correct: true, outcome: "Patient's allergic reactions are reduced." },
            { option: "Edit EYE_COLOR gene for eye color change", correct: false, outcome: "Outcome: No effect on allergic reactions." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on allergic reactions." },
            { option: "Edit TLR4 gene for immune response modulation", correct: false, outcome: "Outcome: No effect on allergic reactions." }
        ]
    },
    {
        scenario: "A patient is prone to migraines. Choose a gene editing option to decrease their susceptibility to migraines:",
        options: [
            { option: "Edit MTHFR gene for reduced migraine susceptibility", correct: true, outcome: "Patient's susceptibility to migraines is decreased." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on migraine susceptibility." },
            { option: "Edit SKIN_COLOR gene for skin color change", correct: false, outcome: "Outcome: No effect on migraine susceptibility." },
            { option: "Edit SEROT gene for serotonin regulation", correct: false, outcome: "Outcome: No effect on migraine susceptibility." }
        ]
    },
    {
        scenario: "A patient has a family history of osteoporosis. Choose a gene editing option to improve their bone density:",
        options: [
            { option: "Edit COL1A1 gene for improved bone density", correct: true, outcome: "Patient's bone density is improved." },
            { option: "Edit EYE_COLOR gene for eye color change", correct: false, outcome: "Outcome: No effect on bone density." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on bone density." },
            { option: "Edit VDR gene for calcium absorption", correct: false, outcome: "Outcome: No effect on bone density." }
        ]
    },
    {
        scenario: "A patient has anxiety and stress issues. Choose a gene editing option to enhance their stress response:",
        options: [
            { option: "Edit COMT gene for improved stress response", correct: true, outcome: "Patient's stress response is improved." },
            { option: "Edit HAIR_COLOR gene for hair color change", correct: false, outcome: "Outcome: No effect on stress response." },
            { option: "Edit SKIN_COLOR gene for skin color change", correct: false, outcome: "Outcome: No effect on stress response." },
            { option: "Edit BDNF gene for brain-derived neurotrophic factor", correct: false, outcome: "Outcome: No effect on stress response." }
        ]
    }
  ];

let shuffledScenarios = [];
let currentScenarioIndex = 0;
let score = 0;

const scenarioContainer = document.getElementById("scenario-container");
const optionContainer = document.getElementById("option-container");
const scoreContainer = document.getElementById("score-container");

const shuffleScenarios = () => {
    shuffledScenarios = [...scenarios];
    for (let i = shuffledScenarios.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledScenarios[i], shuffledScenarios[j]] = [shuffledScenarios[j], shuffledScenarios[i]];
    }
};

const displayMessage = (message, color) => {
    const messageContainer = document.createElement("div");
    messageContainer.textContent = message;
    messageContainer.style.color = color;
    messageContainer.classList.add("message");
    optionContainer.appendChild(messageContainer);
};

const addOptions = (options) => {
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    options.forEach((opt) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = opt.option;

        optionButton.addEventListener("click", () => {
            if (selectedOption === null) {
                selectedOption = opt;
                optionButton.style.backgroundColor = "lightgray";

                if (selectedOption.correct) {
                    displayMessage("Correct! " + selectedOption.outcome, "green");
                    score++;
                } else {
                    displayMessage("Wrong. " + selectedOption.outcome, "red");
                }

                updateScore();
                displayNextButton();
            }
        });

        optionsContainer.appendChild(optionButton);
    });

    optionContainer.innerHTML = "";
    optionContainer.appendChild(optionsContainer);
};

const displayNextButton = () => {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
        if (selectedOption !== null) {
            selectedOption = null;
            nextButton.disabled = true;
            currentScenarioIndex++;

            if (currentScenarioIndex < shuffledScenarios.length) {
                displayScenario();
            } else {
                endGame();
            }
        }
    });

    optionContainer.appendChild(nextButton);
};

const updateScore = () => {
    scoreContainer.textContent = "Score: " + score;
};

let selectedOption = null;

const displayScenario = () => {
    if (currentScenarioIndex < shuffledScenarios.length) {
        const currentScenario = shuffledScenarios[currentScenarioIndex];
        scenarioContainer.textContent = currentScenario.scenario;

        optionContainer.innerHTML = "";
        addOptions(currentScenario.options);
    }
};

const endGame = () => {
    scenarioContainer.textContent = "All scenarios completed!";
    optionContainer.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
    shuffleScenarios();
    displayScenario();
    updateScore();
});
