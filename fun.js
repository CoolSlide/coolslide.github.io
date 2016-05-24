var putHtml2iframe = function(id, html){
    var ifrm = document.getElementById(id);
    ifrm = ifrm.contentWindow ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
    ifrm.document.open();
    ifrm.document.write(html);
    ifrm.document.close();
};
