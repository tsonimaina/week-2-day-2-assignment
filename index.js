
const tipRates = { poor: 0.1, good: 0.15, excellent: 0.2 };
// condition on the number of people and bill amount
function calculateTip(billAmount, numberOfPeople, serviceQuality) {
  if (numberOfPeople <= 0) {
    return { error: "Number of people must be at least 1" };
  }
  if (billAmount < 0) {
    return { error: "Bill amount cannot be negative" };
  }

  // Object lookup; an invalid quality gives undefined, so fall back to "good"
  const tipRate = tipRates[serviceQuality] ?? tipRates.good;

  const totalTip = billAmount * tipRate;
  const totalBill = billAmount + totalTip;

  return {
    tipPerPerson: Math.round((totalTip / numberOfPeople) * 100) / 100,
    totalPerPerson: Math.round((totalBill / numberOfPeople) * 100) / 100,
    totalBill: Math.round(totalBill * 100) / 100,
  };
}

// Array of objects: each one is a test case
const testCases = [
  { billAmount: 5000, numberOfPeople: 4, serviceQuality: "excellent" },
  { billAmount: 1200, numberOfPeople: 0, serviceQuality: "good" },
  { billAmount: -300, numberOfPeople: 2, serviceQuality: "poor" },
  { billAmount: 2000, numberOfPeople: 5, serviceQuality: "amazing" }, // invalid -> good
];

for (const testCase of testCases) {
  const { billAmount, numberOfPeople, serviceQuality } = testCase; // destructuring
  const result = calculateTip(billAmount, numberOfPeople, serviceQuality);
//condition 
  if (result.error) {
    console.log("Bill: KES " + billAmount.toLocaleString() + " | People: " + numberOfPeople);
    console.log("Error: " + result.error + "\n");
  } else {
    const { tipPerPerson, totalPerPerson, totalBill } = result; // destructuring again
    console.log(
      "Bill: KES " + billAmount.toLocaleString() + " | People: " + numberOfPeople + " | Service: " + serviceQuality
    );
    console.log(
      "Tip per person: KES " + tipPerPerson.toLocaleString() +
        " | Total per person: KES " + totalPerPerson.toLocaleString() +
        " | Total: KES " + totalBill.toLocaleString() + "\n"
    );
  }
}