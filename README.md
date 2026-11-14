# Let's Practice! (Kindergarten – 5th grade)

Family practice site: Reading, Math, Science, Social Studies, and Computer Skills for Kindergarten through 5th grade.
Live site: https://stricklygreen56.github.io/Learning/

## How it works
- **Kids' own devices (no email):** on the Grown-ups page, tap **Link a device** to get a 6-character code. On the kid's
  tablet/PC, tap **I'm a kid: enter my setup code** and type it once. That device remembers and opens straight to that kid.
  Firestore rules only let a linked device see and save that one kid's scores. Remove devices from the Grown-ups page.
- **Shared device:** a parent signs in with Google; each kid picks their profile and types their own 4-digit kid PIN.
- Scores save to Firebase under the parent's account, so the **🔒 Grown-ups** page (PIN protected) shows every kid's scores from any device: best scores, what needs practice, and recent tests with the questions they missed.
- 🔊 **Read to me** reads questions aloud. Turn on automatic read-aloud per kid for early readers.

## Firebase
Uses its own Firebase project (`learning-1be34`, free Spark plan). Sign-in providers: Google (parents) and Anonymous (linked kid devices). Data lives under `families/{parent uid}`.
If `firestore.rules` changes, paste it into Firebase Console → Firestore Database → Rules → Publish.

Test without Firebase: add `?demo` to the URL (saves to the browser only).

## Adding or changing questions
Questions live in `data/g<grade>/`. Each question is one line:

```js
["Question text?", ["option a", "option b", "option c"], 1, "Why the answer is right"],
```

The number is which option is correct, counting from 0 (so `1` means the second option). Options are shuffled when the test runs.
Optional 5th item: a story key from `passages`. Optional 6th item: `'quiet'` so read-aloud doesn't read the options (for "find the word" questions).
Optional 7th item: a picture key from `pics.js` to show above the question. An answer choice written `'pic:key'` shows that picture as the choice.
Pictures are drawn as SVG in `pics.js`. `runRobot()` there can check robot-maze answers.

## After changing files
Bump the `?v=` number on the script and style tags in `index.html` so browsers load the new version instead of an old cached copy.
