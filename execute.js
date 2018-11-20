var rejectScriptTextFilter = {
  acceptNode: function(node) {
    if (node.parentNode.nodeName !== 'SCRIPT') {
      return NodeFilter.FILTER_ACCEPT;
    }
  }
};

var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  rejectScriptTextFilter,
  false
);

var node;

while(node = treeWalker.nextNode()) {
  if (node.nodeType === Node.TEXT_NODE) {
    txt = node.nodeValue;
    if (typeof txt == 'undefined') {
      continue;
    }
    txtarr = txt.split(' ');
    for (i = 0; i < txtarr.length; i++) {
      if (txtarr[i].length < 1) {
        continue;
      }
      if (txtarr[i].endsWith('s')) {
        txtarr[i] = 'eggs';
      } else if (txtarr[i].includes("'")) {
        txtarr[i] = "eggn't";
      } else {
        txtarr[i] = "egg";
      }
    }
    node.nodeValue = txtarr.join(' ');
  }
}
