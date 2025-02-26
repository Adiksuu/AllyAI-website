export const _formatMessageText = (text) => {
    // Helper function to escape HTML
    const escapeHtml = (str) => {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };
    
    const splitBlocks = text.split(/```([\s\S]*?)```/);
    let formattedText = "";
    
    splitBlocks.forEach((chunk, index) => {
      if (index % 2 === 1) {
        // Code block - escape all HTML characters
        const formattedCode = escapeHtml(chunk);
        formattedText += `<p class="code-block">${formattedCode}</p>`;
      } else {
        // Regular text
        const rows = chunk.split("\n");
        let tableData = [];
        let isTable = false;
        
        rows.forEach((row) => {
          if (row.includes("|")) {
            // Table handling - escape HTML in cells
            const rowCells = row
              .split("|")
              .map((cell) => escapeHtml(cell.trim()))
              .filter((cell) => cell);
            
            if (rowCells.length > 0) {
              tableData.push(rowCells);
              isTable = true;
            }
          } else {
            if (isTable && tableData.length > 0) {
              formattedText += createTableHTML(tableData);
              tableData = [];
              isTable = false;
            }
            
            // Escape HTML first, then apply formatting
            let escapedRow = escapeHtml(row);
            escapedRow = escapedRow
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/\n/g, "<br>");
            
            formattedText += `${escapedRow}\n`;
          }
        });
        
        if (isTable && tableData.length > 0) {
          formattedText += createTableHTML(tableData);
        }
      }
    });
    
    // Replace any remaining asterisks with smaller bullet points (after all formatting is done)
    formattedText = formattedText.replace(/\*/g, "<span style=\"font-size: 0.6em;\">●</span>");
    
    return formattedText;
  };
  
  const createTableHTML = (tableData) => {
    let tableHtml = "<table><thead><tr>";
    const headerCells = tableData[0];
    
    headerCells.forEach((cell) => {
      // Cell content is already escaped, just apply formatting
      let formattedCell = cell
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/_(.*?)_/g, "<em>$1</em>");
      
      // Replace any remaining asterisks in table cells with smaller bullets
      formattedCell = formattedCell.replace(/\*/g, "<span style=\"font-size: 068em;\">●</span>");
      
      tableHtml += `<th>${formattedCell}</th>`;
    });
    
    tableHtml += "</tr></thead><tbody>";
    
    tableData.slice(1).forEach((row) => {
      tableHtml += "<tr>";
      
      row.forEach((cell) => {
        let formattedCell = cell
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/_(.*?)_/g, "<em>$1</em>");
        
        // Replace any remaining asterisks in table cells with smaller bullets
        formattedCell = formattedCell.replace(/\*/g, "<span style=\"font-size: 0.6em;\">●</span>");
        
        tableHtml += `<td>${formattedCell}</td>`;
      });
      
      tableHtml += "</tr>";
    });
    
    tableHtml += "</tbody></table>";
    
    return tableHtml;
  };