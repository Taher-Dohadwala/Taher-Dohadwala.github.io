document.getElementById("notify-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const note = document.getElementById("form-note");
  const email = emailInput.value.trim();

  if (!email) return;

  const signups = JSON.parse(localStorage.getItem("flexTennisSignups") || "[]");
  signups.push({ email, timestamp: new Date().toISOString() });
  localStorage.setItem("flexTennisSignups", JSON.stringify(signups));

  note.textContent = "Thanks! We'll let you know when Flex Tennis launches in Chicago.";
  note.classList.add("success");
  emailInput.value = "";
});
