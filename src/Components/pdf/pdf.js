import React from "react";
 
const DownlaodPdf = () => {
    const onButtonClick = () => {
        const pdfUrl = "/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <center>
               
                
                <button type="button" class="btn btn-primary" onClick={onButtonClick}>See my Resume</button>
            </center>
        </>
    );
};
 
export default DownlaodPdf;