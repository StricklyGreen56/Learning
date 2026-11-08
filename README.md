# Let's Practice! (Kindergarten – 3rd grade)

Family practice site: Reading, Math, Science, and Social Studies for K, 1st, 2nd, and 3rd grade.
Live site: https://stricklygreen56.github.io/Learning/

## How it works
- A parent signs in with Google once on each device.
- Each kid picks their profile ("Who's practicing?") and gets their grade's tests. They can also try other grades.
- Scores save to Firebase under the parent's account, so the **🔒 Grown-ups** page (PIN protected) shows every kid's scores from any device: best scores, what needs practice, and recent tests with the questions they missed.
- 🔊 **Read to me** reads questions aloud. Turn on automatic read-aloud per kid for early readers.

## Firebase
Uses its own Firebase project (`learning-1be34`, free Spark plan). Data lives under `families/{parent uid}`.
If `firestore.rules` changes, paste it into Firebase Console → Firestore Database → Rules → Publish.

Test without Firebase: add `?demo` to the URL (saves to the browser only).

## Adding or changing questions
Questions live in `data/g<grade>/`. Each question is one line:

```js
["Question text?", ["option a", "option b", "option c"], 1, "Why the answer is right"],
```

The number is which option is correct, counting from 0 (so `1` means the second option). Options are shuffled when the test runs.
Optional 5th item: a story key from `passages`. Optional 6th item: `'quiet'` so read-aloud doesn't read the options (for "find the word" questions).
