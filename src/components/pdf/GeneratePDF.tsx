import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const GeneratePDF = async () => {
    try {
        const contentElement = document.getElementById('main-content');

        if (!contentElement) {
            console.error('Main content element not found');
            return;
        }
        //I cannot capture GoogleMaps for PDF because of some restrictions, and the right panel contains scrollable area
        //that is why I'm capturing central panel.
        //For some reason, it is easier to adjust the PDF design but capturing 1/3 of the main content
        // Calculate dimensions for the middle third
        const middleThirdWidth = contentElement.offsetWidth / 3;
        const middleThirdHeight = contentElement.offsetHeight;

        // Calculate starting point for capturing the middle third
        const middleThirdX = contentElement.offsetWidth / 3;
        const middleThirdY = 0;

        // Capture middle third as canvas
        const canvas = await html2canvas(contentElement, {
            allowTaint: true, //related to CORS policy
            useCORS: true,
            width: middleThirdWidth,
            height: middleThirdHeight,
            x: middleThirdX,
            y: middleThirdY
        });
        //Create PDF blank
        const pdf = new jsPDF('l', 'px', [(contentElement.offsetWidth * 0.6), (contentElement.offsetHeight + 100)]);

        // Add captured middle third to PDF
        pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 60, 50, middleThirdWidth * 0.7, middleThirdHeight * 0.7);  //60 -padding from the left, 50 - padding from the top, 0.7 - reduces the image to 70%

        //I need to wrap text lines that are too long to fit in the page:
        const adjustLines = (inputString: string, maxLength: number) => {
            const words = inputString.split(' ');
            let currentLine = '';
            const lines = [];
            words.forEach(word => {
                if ((currentLine.length + word.length) <= maxLength) {
                    console.log("line before: ", currentLine)
                    currentLine += (currentLine === '' ? '' : ' ') + word;
                    console.log("line AFTER: ", currentLine)
                } else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            });
            lines.push(currentLine);
            return lines.join('\n');
        }

        // Add CHAT as a text to PDF
        const htmlChat = document.getElementById('chat');
        const htmlHistory = document.getElementById('history')?.textContent;
        const MAX_LENGTH = 50;
        if (htmlHistory) {
            pdf.setFontSize(18);
            pdf.text('Famous historical places to attend:\n', middleThirdWidth, 70); //middleThirdWidth - position from the left, 70 - position from the top
            pdf.text(htmlHistory, middleThirdWidth, 90);
            console.log(htmlHistory);
        }
        if (htmlChat) {
            // Get all text content within the chat element:
            const chatContentList = Array.from(htmlChat.querySelectorAll('p'))
                .map(p => p.textContent?.replace(/<[^>]+>/g, ''));  //remove unnessary symbols
            console.log("Content: ", chatContentList);
            chatContentList.forEach(line => {
                console.log("A LINE: ", line);
            });
            const wrappedContentList = chatContentList.map(eachLine => {
                if (eachLine && eachLine.length > MAX_LENGTH) {
                    return adjustLines(eachLine, MAX_LENGTH);
                }
                else { return eachLine; }
            }).map(line => '\n' + line);
            pdf.setFontSize(18);
            pdf.text('Questions you asked:\n', middleThirdWidth, 150);
            pdf.text(wrappedContentList.join('\n'), middleThirdWidth, 180); // 20 - from the left, 100 from the top
        }
        else { console.error('Element with id="chat" not found.'); }

        // Save the PDF
        pdf.save('GeneratedPDF.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};
