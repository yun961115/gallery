async function formatFolder() {
  const path = document.getElementById('folder').value;
  const result = await eel.format_folder(path)();
  document.getElementById('result').textContent = result;
}
