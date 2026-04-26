

export function isFunction(func){
    return typeof func === "function";
}

export function showLegacyPopup(modal, id, modalTitle, onDone, onClose){

   if(isFunction(showPopup)) showPopup(modal,id , modalTitle, onDone, onClose);
}


export function downloadAction(itemType, id, modalTitle, onDone, onClose){
    switch(itemType){
        case "Document":
            if(isFunction(showPopup)) showPopup('DocumentExportOption', "load|" + id, modalTitle, onDone, onClose);
            break;
        
        case "Issue":
            if(isFunction(OpenInNewTab)) OpenInNewTab('QAB/GetFile.aspx?mode=1&mod=14&id=' + id);
            break;

        case "Audit":
            if(isFunction(OpenInNewTab)) OpenInNewTab('PdfDownloader.ashx?q=7*' + id);
            break;
    
        case "Test":
            if(isFunction(OpenInNewTab)) OpenInNewTab('PdfDownloader.ashx?q=9*' + id);
            break;

        case "TrainingEvent": 
            if(isFunction(OpenInNewTab)) OpenInNewTab('PdfDownloader.ashx?q=3*' + id);
            break;
    
    }

}
