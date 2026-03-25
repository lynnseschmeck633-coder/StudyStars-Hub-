const completeLessonBtn = document.getElementById("completeLessonBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

if (completeLessonBtn && progressBar && progressText) {
  completeLessonBtn.addEventListener("click", function () {
    let currentValue = Number(progressBar.value);

    if (currentValue < 100) {
      currentValue += 10;
      progressBar.value = currentValue;
      progressText.textContent = currentValue + "% Complete";
    } else {
      alert("All lessons completed!");
    }
  });
}