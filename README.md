# Let's Practice! (3rd grade)

Practice tests for Reading & Writing, Math, Science, and Social Studies.
Live site: https://stricklygreen56.github.io/learning/

- Tap an answer to see right away if it's correct, with a short reason why.
- 🔊 **Read to me** reads questions and stories out loud.
- **Grown-ups: see progress** shows best and last scores for every test. Scores are saved on the device being used.

## Adding or changing questions

Questions live in `data/` (one file per subject). Each question is one line:

```js
["Question text?", ["option a", "option b", "option c"], 1, "Why the answer is right"],
```

The number is which option is correct, counting from 0 (so `1` means the second option).
Options are shuffled when the test runs.
