
// Script desnecessário que consome CPU
setInterval(() => {
  const div = document.createElement("div");
  div.textContent = "Processando...";
  document.body.appendChild(div);
}, 50);
