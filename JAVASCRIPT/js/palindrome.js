function isPalindrome() {
  e.preventDefault();
  let input = document.getElementById("pali").value;
  const originalInput = input.toString();
  const reversedInput = originalInput.split("").reverse().join("");

  if (input) {
    originalInput === reversedInput
      ? (document.getElementById("pali-p").innerHTML =
          input + " is a palindrome")
      : (document.getElementById("pali-p").innerHTML =
          input + " is not palindrome");
    input = document.getElementById("pali").value = "";
  }
}
