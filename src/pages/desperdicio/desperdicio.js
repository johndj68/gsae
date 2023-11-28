// script.js


document.addEventListener("DOMContentLoaded", function () {

        document.getElementById("foodWasteForm").addEventListener("submit", function (event) {
            const quantityInput = document.getElementById("quantidade_desperdicada");
            const unitSelect = document.getElementById("unidade_medida");
            let quantidadeEmKg = parseFloat(quantityInput.value);

            switch (unitSelect.value) {
                case "gramas":
                    quantidadeEmKg /= 1000; // 1 kg = 1000 gramas
                    break;
                case "outras_unidades":
                    // Adicione aqui conversões para outras unidades, se necessário.
                    break;
                // Caso padrão é quilogramas, não é necessário fazer conversão.
            }

            if (isNaN(quantidadeEmKg) || quantidadeEmKg <= 0) {
                alert("A quantidade desperdiçada deve ser um número positivo.");
                event.preventDefault();
            }
        });

        document.getElementById("showStatisticsButton").addEventListener("click", function () {
            const quantidadeDesperdicada = parseFloat(document.getElementById("quantidade_desperdicada").value);
            const motivoDesperdicio = document.getElementById("motivo_desperdicio").value;

            if (isNaN(quantidadeDesperdicada) || quantidadeDesperdicada <= 0) {
                alert("Informe uma quantidade válida.");
                return;
            }

            // Exemplo de gráfico de pizza com base no motivo do desperdício
            const statisticsDiv = document.getElementById("statistics");
            statisticsDiv.innerHTML = "";

            const canvas = document.createElement("canvas");
            canvas.id = "chart";
            statisticsDiv.appendChild(canvas);

            new Chart(canvas, {
                type: "pie",
                data: {
                    labels: [motivoDesperdicio, "Outros Motivos"],
                    datasets: [{
                        data: [quantidadeDesperdicada, 100 - quantidadeDesperdicada],
                        backgroundColor: ["#FF5733", "#DDDDDD"],
                    }],
                },
            });

            statisticsDiv.classList.remove("hidden");
        });
    });