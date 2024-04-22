function downloadPdf() {
  console.log('clicked!')
  var options = {};
  var pdf = new jsPDF('p', 'pt', 'a4');
  pdf.addHTML($("#content"), 15, 15, options, function () {
    pdf.save('pageContent.pdf');
  });
};