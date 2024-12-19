export const _formatMessageText = (text) => {
    const splitBlocks = text.split(/```([\s\S]*?)```/); // Podział na bloki tekstu i kodu

    let formattedText = "";

    splitBlocks.forEach((chunk, index) => {
        if (index % 2 === 1) {
            // Blok kodu
            const formattedCode = chunk.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // Escapowanie znaków HTML
            formattedText += `<p class="code-block">${formattedCode}</p>`;
        } else {
            // Zwykły tekst
            const rows = chunk.split("\n");
            let tableData = [];
            let isTable = false;

            rows.forEach((row) => {
                if (row.includes("|")) {
                    // Obsługa tabel
                    const rowCells = row.split("|").map(cell => cell.trim()).filter(cell => cell);
                    if (rowCells.length > 0) {
                        tableData.push(rowCells);
                        isTable = true;
                    }
                } else {
                    // Zamykanie tabeli, jeśli istnieje
                    if (isTable && tableData.length > 0) {
                        formattedText += createTableHTML(tableData);
                        tableData = [];
                        isTable = false;
                    }

                    // Formatowanie tekstu (pogrubienie, kursywa, itp.)
                    row = row.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            //  .replace(/_(.*?)_/g, "<em>$1</em>")
                             .replace(/\n/g, "<br>");

                    formattedText += `${row}\n`;
                }
            });

            // Zamykanie tabeli, jeśli istnieje
            if (isTable && tableData.length > 0) {
                formattedText += createTableHTML(tableData);
            }
        }
    });

    return formattedText;
};

// Funkcja generująca HTML tabeli
const createTableHTML = (tableData) => {
    let tableHtml = "<table><thead><tr>";
    const headerCells = tableData[0];
    headerCells.forEach((cell) => {
        tableHtml += `<th>${cell.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/_(.*?)_/g, "<em>$1</em>")}</th>`;
    });
    tableHtml += "</tr></thead><tbody>";

    tableData.slice(1).forEach((row) => {
        tableHtml += "<tr>";
        row.forEach((cell) => {
            cell = cell.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                       .replace(/_(.*?)_/g, "<em>$1</em>");
            tableHtml += `<td>${cell}</td>`;
        });
        tableHtml += "</tr>";
    });

    tableHtml += "</tbody></table>";
    return tableHtml;
};
