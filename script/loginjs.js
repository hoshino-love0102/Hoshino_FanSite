document.getElementById("signupForm").addEventListener("submit", function (e) {
  const birthInput = document.getElementById("birth");

  const birth = birthInput.value.trim();

  const date = new Date(birth);
  const today = new Date();

  const isValidBirthFormat = /^\d{4}-\d{2}-\d{2}$/.test(birth);
  const isRealDate = !isNaN(date.getTime());
  const isPast = date <= today;
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // 생년월일 검사
  if (!isValidBirthFormat || !isRealDate || !isPast) {
    alert("올바른 생년월일을 입력해주세요 (예: 2000-01-01)");
    birthInput.focus();
    e.preventDefault();
    return;
  }
});
