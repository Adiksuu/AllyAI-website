import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';

const _generateWordDocument = (text) => {
    const processText = (text) => {
        const parts = [];
        let currentText = "";
        let bold = false;

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '*' && text[i + 1] === '*') {
                if (currentText.length > 0) {
                    parts.push({ text: currentText, bold: bold });
                    currentText = "";
                }
                bold = !bold;
                i++;
            } else {
                currentText += text[i];
            }
        }

        if (currentText.length > 0) {
            parts.push({ text: currentText, bold: bold });
        }

        return parts;
    };
  
    const lines = text.split('\n');

    const doc = new Document({
        sections: [{
            children: lines.map(line => {
                return new Paragraph({
                    children: processText(line).map(part => (
                        new TextRun({
                            text: part.text,
                            bold: part.bold,
                        })
                    )),
                });
            }),
        }],
    });

    Packer.toBlob(doc).then(blob => {
        saveAs(blob, 'document.docx');
    });
};

export { _generateWordDocument };
