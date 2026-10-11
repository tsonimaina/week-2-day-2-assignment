// Task 3: Password Strength Checker, using an array of objects, filter, map and join

const criteria = [
  { label: "At least 8 characters", test: (pw) => pw.length >= 8 },
  { label: "Uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
  { label: "Lowercase letter", test: (pw) => /[a-z]/.test(pw) },
  { label: "Number", test: (pw) => /[0-9]/.test(pw) },
  { label: "Special character", test: (pw) => /[!@#$%^&*()_+\-=]/.test(pw) },
];

function checkPasswordStrength(password) {
  const missing = criteria
    .filter((criterion) => !criterion.test(password)) // keeps items that password a test
    .map((criterion) => criterion.label);//bcreates a new array by tranforming every time

  const score = criteria.length - missing.length;// definiting the length

  let strength; // using let is we are asigning a new value 
  if (score >= 4) strength = "Strong";
  else if (score === 3) strength = "Medium";
  else strength = "Weak";

  return { strength, score, missing };
}

// ---- Demo ----
function demo(password) {
  const { strength, score, missing } = checkPasswordStrength(password);
  console.log('Password: "' + password + '"');
  console.log("Strength: " + strength + " (" + score + "/5)");
  console.log("Missing: " + (missing.length === 0 ? "None" : missing.join(", ")) + "\n");
}

demo("hello");
demo("MyP@ssw0rd!");
demo("Hello123"); // Strong: 4 of 5 (no special character)
demo("hello123"); // Medium: 3 of 5
demo("");         // Weak: 0 of 5