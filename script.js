let qrCode;
function generateQR() {
  const qrDiv = document.getElementById("qrcode");
  const text = document.getElementById("text").value.trim();
  const container = document.querySelector(".container");

  qrDiv.innerHTML = ""; // Clear old QR

  if (text === "") {
    alert("Please enter some text or URL");
    return;
  }
  new QRCode(qrDiv, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    const qrCanvas = qrDiv.querySelector("canvas");
  }, 100);

  function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
    showToast();
}
