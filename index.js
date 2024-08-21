function criptografar() {
  let texto = document.getElementById("input-text").value;
  let textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  exibirResultado(textoCriptografado);

  document.getElementById("input-text").value = "";

  document.querySelector(".decript-section").classList.add("result-active");
}

function descriptografar() {
  let texto = document.getElementById("input-text").value;
  let textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  exibirResultado(textoDescriptografado);

  document.getElementById("input-text").value = "";

  document.querySelector(".decript-section").classList.add("result-active");
}

function exibirResultado(texto) {
  let resultParagraph = document.getElementById("result-paragraph");
  let copyBtn = document.getElementById("copy-btn");
  let resultImage = document.getElementById("result-image");
  let resultTitle = document.getElementById("result-title");

  resultParagraph.textContent = texto;

  copyBtn.style.display = "block";

  resultImage.style.display = "none";
  resultTitle.style.display = "none";
}

function copiarTexto() {
  let texto = document.getElementById("result-paragraph").textContent;
  navigator.clipboard.writeText(texto).then(() => {
    document.getElementById("result-paragraph").textContent = "";

    document.getElementById("result-image").style.display = "block";
    document.getElementById("result-title").style.display = "block";

    document.getElementById("copy-btn").style.display = "none";

    document
      .querySelector(".decript-section")
      .classList.remove("result-active");
  });
}
