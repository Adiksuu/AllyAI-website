export const _formatMessageText = (text) => {
    const splitBlocks = text.split(/```(.*?)```/gs);
    
    let formattedText = "";

    splitBlocks.forEach((chunk, index) => {
        if (index % 2 === 1) {
            formattedText += `<p>${chunk}</p>`;
        } else {
            const rows = chunk.split("\n");
            let tableData = [];
            let isTable = false;
            let isCodeBlock = false;
            
            rows.forEach((row) => {
                if (row.includes("|")) {
                    const rowCells = row.split("|").map(cell => cell.trim()).filter(cell => cell);
                    if (rowCells.length > 0) {
                        tableData.push(rowCells);
                        isTable = true;
                    }
                } else if (row.includes("```")) {
                    isCodeBlock = true;
                } else {
                    if (isTable && tableData.length > 0) {
                        formattedText += createTableHTML(tableData);
                        tableData = [];
                        isTable = false;
                    }
                    if (!isCodeBlock) {
                        row = row.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                 .replace(/_(.*?)_/g, "<em>$1</em>")
                                 .replace(/\n/g, "<br>");
                    }
                    formattedText += `${row}\n`;
                    isCodeBlock = false;
                }
            });

            if (isTable && tableData.length > 0) {
                formattedText += createTableHTML(tableData);
            }
        }
    });

    return formattedText;
};

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