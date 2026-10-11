# week-2-day-2-assignment
# JavaScript Practice: Arrays, Objects and Loops

Three small programs that practise arrays, objects, destructuring and loops in plain JavaScript. They run in Node.js with no dependencies.

## Requirements

- [Node.js](https://nodejs.org/) (any recent version)

## Project Structure

```
.
├── script.js     # Task 1: Tip Calculator
├── grade.js      # Task 2: Grade Calculator
├── password.js   # Task 3: Password Strength Checker
└── README.md
```

## How to Run

```bash
node script.js
node grade.js
node password.js
```

---

## Task 1: Tip Calculator (`script.js`)

`calculateTip(billAmount, numberOfPeople, serviceQuality)` splits a bill in KES, with a tip based on service quality.

| Service quality | Tip |
| --------------- | --- |
| `poor`          | 10% |
| `good`          | 15% |
| `excellent`     | 20% |

**Returns:** `{ tipPerPerson, totalPerPerson, totalBill }`

**Edge cases**
- Number of people is 0 or negative: returns `{ error: "Number of people must be at least 1" }`
- Bill is negative: returns `{ error: "Bill amount cannot be negative" }`
- Invalid service quality: defaults to `"good"`

```javascript
calculateTip(5000, 4, "excellent");
// { tipPerPerson: 250, totalPerPerson: 1500, totalBill: 6000 }
```

## Task 2: Grade Calculator (`grade.js`)

`calculateGrade(scores)` takes an array of `{ name, score, weight }` objects and returns the weighted average, letter grade and pass/fail status.

| Grade | Range  |
| ----- | ------ |
| A     | 70-100 |
| B     | 60-69  |
| C     | 50-59  |
| D     | 40-49  |
| F     | below 40 |

**Status:** `Pass` for 40 and above, `Fail` below 40.

**Validation:** weights must add up to 1.0 (within 0.01), otherwise an `error` is returned.

```javascript
calculateGrade([
  { name: "Exam", score: 85, weight: 0.4 },
  { name: "Assignment", score: 90, weight: 0.3 },
  { name: "Project", score: 78, weight: 0.3 },
]);
// { weightedAverage: 84.4, letterGrade: "A", status: "Pass" }
```

## Task 3: Password Strength Checker (`password.js`)

`checkPasswordStrength(password)` checks five criteria, each worth 1 point:

1. At least 8 characters
2. Uppercase letter
3. Lowercase letter
4. Number
5. Special character (`!@#$%^&*()_+-=`)

| Score | Strength |
| ----- | -------- |
| 0-2   | Weak     |
| 3     | Medium   |
| 4-5   | Strong   |

**Returns:** `{ strength, score, missing }`, where `missing` lists the criteria not met.

```javascript
checkPasswordStrength("MyP@ssw0rd!");
// { strength: "Strong", score: 5, missing: [] }
```

---

## Concepts Practised

- Arrays and array methods: `.filter()`, `.map()`, `.reduce()`, `.join()`
- Objects, bracket notation lookups and destructuring
- Arrays of objects
- `for...of` loops
- Input validation and edge cases
