function atbBack() {
  console.log(window.history);
  if (window.history.length === 2) {
    window.parent.postMessage(JSON.stringify({ type: 'ATBClosePage' }), '*');
  } else window.history.back();
}