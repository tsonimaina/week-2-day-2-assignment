
function calculateGrade(scores) {
  // Validate weights add up to 1.0 (within 0.01 tolerance)
  const totalWeight = scores.reduce((sum, { weight }) => sum + weight, 0);
  if (Math.abs(totalWeight - 1) > 0.01) {
    return { error: "Weights must add up to 1.0 (got " + Math.round(totalWeight * 100) / 100 + ")" };
  }

  // Weighted average: sum of score * weight
  const average = scores.reduce((sum, { score, weight }) => sum + score * weight, 0);
  const weightedAverage = Math.round(average * 100) / 100;

  // Grading scale
  let letterGrade;
  if (weightedAverage >= 70) letterGrade = "A";
  else if (weightedAverage >= 60) letterGrade = "B";
  else if (weightedAverage >= 50) letterGrade = "C";
  else if (weightedAverage >= 40) letterGrade = "D";
  else letterGrade = "F";

  const status = weightedAverage >= 40 ? "Pass" : "Fail";

  return { weightedAverage, letterGrade, status };
}

// ---- Demo ----
function demo(scores) {
  const summary = scores
    .map(({ name, score, weight }) => name + " (" + score + ", " + Math.round(weight * 100) + "%)")
    .join(", "); //Joins array into one string 
  console.log("Scores: " + summary);

  const result = calculateGrade(scores);
  if (result.error) {
    console.log("Error: " + result.error + "\n");
  } else {
    const { weightedAverage, letterGrade, status } = result;
    console.log("Weighted Average: " + weightedAverage + " | Grade: " + letterGrade + " | Status: " + status + "\n");
  }
}

demo([
  { name: "Exam", score: 85, weight: 0.4 },
  { name: "Assignment", score: 90, weight: 0.3 },
  { name: "Project", score: 78, weight: 0.3 },
]);

// Extra checks: a fail, a boundary (exactly 40), and bad weights
demo([
  { name: "Exam", score: 30, weight: 0.5 },
  { name: "Assignment", score: 35, weight: 0.5 },
]);
demo([
  { name: "Exam", score: 40, weight: 0.6 },
  { name: "Project", score: 40, weight: 0.4 },
]);
demo([
  { name: "Exam", score: 80, weight: 0.5 },
  { name: "Project", score: 70, weight: 0.3 },
]);