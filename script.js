// Password strength
document.getElementById("pwd").addEventListener("input", function(){
  const val=this.value; const res=document.getElementById("pwdResult");
  if(val.length<6){res.textContent="Weak ❌";res.style.color="red";}
  else if(/[A-Z]/.test(val)&&/[0-9]/.test(val)){res.textContent="Strong ✅";res.style.color="lime";}
  else{res.textContent="Medium ⚠️";res.style.color="orange";}
});

// JSON Formatter
function formatJSON(){
  const input=document.getElementById("jsonInput").value;
  const output=document.getElementById("jsonOutput");
  try{ const obj=JSON.parse(input); output.textContent=JSON.stringify(obj,null,2); output.style.color="#00e5ff";}
  catch{output.textContent="Invalid JSON ❌";output.style.color="red";}
}
// Password strength
document.getElementById("pwd").addEventListener("input", function () {
  const val = this.value;
  const res = document.getElementById("pwdResult");
  if (val.length < 6) { res.textContent = "Weak ❌"; res.style.color = "red"; }
  else if (/[A-Z]/.test(val) && /[0-9]/.test(val)) { res.textContent = "Strong ✅"; res.style.color = "lime"; }
  else { res.textContent = "Medium ⚠️"; res.style.color = "orange"; }
});

// JSON Formatter
function formatJSON() {
  const input = document.getElementById("jsonInput").value;
  const output = document.getElementById("jsonOutput");
  try { const obj = JSON.parse(input); output.textContent = JSON.stringify(obj, null, 2); output.style.color = "#00e5ff"; }
  catch { output.textContent = "Invalid JSON ❌"; output.style.color = "red"; }
}

// Username Checker
function checkUsername() {
  const u = document.getElementById("user").value;
  document.getElementById("userResult").innerHTML = `
    <a href="https://github.com/${u}" target="_blank">GitHub</a> |
    <a href="https://instagram.com/${u}" target="_blank">Instagram</a>
  `;
}

// QR Code Generator
function generateQR() {
  const text = document.getElementById("qrText").value;
  document.getElementById("qrImg").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(text);
}

// HTTP Status Checker
async function checkStatus() {
  const url = document.getElementById("urlInput").value;
  const res = document.getElementById("statusResult");
  try {
    const response = await fetch(url, { method: "HEAD" });
    res.textContent = "Status: " + response.status; res.style.color = "#00e5ff";
  } catch { res.textContent = "Cannot fetch (CORS / Invalid URL)"; res.style.color = "orange"; }
}

// Mini Calculator
function calculate() {
  const expr = document.getElementById("calcInput").value;
  const res = document.getElementById("calcResult");
  try { res.textContent = "Result: " + eval(expr); res.style.color = "#00e5ff"; }
  catch { res.textContent = "Invalid Expression ❌"; res.style.color = "red"; }
}
