document.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded');
});

document.addEventListener('selectionchange', (e) => {
  const selection = window.getSelection();
  const selectionContent = selection.toString();
  const popup = document.getElementById('popup');
  if (selectionContent !== '') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
  console.log('selection');
});



