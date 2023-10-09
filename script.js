function outputclick()
{
  var frame = document.getElementById("frame");
  var code = document.getElementById("codeid").value;
  var back = document.getElementById("back");
  frame.style.display="block";
  back.style.display="block";
  frame = (frame.contentWindow)?frame.contentWindow:(frame.contentDocument)?frame.contentDocument.document:frame.contentDocument ;
  frame.document.open();
  frame.document.write(code);
  frame.document.close();
}

function stop()
{
  document.getElementById("frame").style.display="none";
  document.getElementById("back").style.display ="none";
}

function bottombtnsclick()
{
  var textArea = document.getElementById("codeid");
  const idx = textArea.selectionStart;
  textArea.setRangeText("<", idx, idx);
  document.getElementById('codeid').focus();
}

function bottombtnsclick2()
{
  var textArea = document.getElementById("codeid");
  const idx = textArea.selectionStart;
  textArea.setRangeText("</", idx, idx);
  document.getElementById('codeid').focus();
}

function bottombtnsclick3()
{
  var textArea = document.getElementById("codeid");
  const idx = textArea.selectionStart;
  textArea.setRangeText(">", idx, idx);
  document.getElementById('codeid').focus();
}

function bottombtnsclick4()
{
  var textArea = document.getElementById("codeid");
  const idx = textArea.selectionStart;
  textArea.setRangeText('"', idx, idx);
  document.getElementById('codeid').focus();
}

function bottombtnsclick5()
{
  var textArea = document.getElementById("codeid");
  const idx = textArea.selectionStart;
  textArea.setRangeText("=", idx, idx);
  document.getElementById('codeid').focus();
}