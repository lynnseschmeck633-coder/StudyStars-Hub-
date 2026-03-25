const completeLessonBtn = document.getElementById("completeLessonBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

completeLessonBtn.addEventListener("click", () => {
  let currentValue = Number(progressBar.value);

  if (currentValue < 100) {
    currentValue += 10;
    progressBar.value = currentValue;
    progressText.textContent = currentValue + "% Complete";
  }

  if (currentValue >= 100) {
    progressText.textContent = "100% Complete - Great job!";
    completeLessonBtn.disabled = true;
    completeLessonBtn.textContent = "Completed";
  }
});