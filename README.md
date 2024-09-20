MAIA Util
==============

Utility math and music functions supporting various applications by Music Artificial Intelligence Algorithms, Inc.

## Local Installation

Set yourself up with an installation of [Node.js](https://nodejs.org/). Then open up a terminal window and navigate to a directory where you want to experiment with MAIA Util.

### User

In the terminal window, execute
```bash
npm install maia-util --save
```
which should make a node_modules folder that contains MAIA Util and its dependencies.

Make yourself a new JavaScript (plain-text) file – [Atom](https://atom.io/) is a good editor for such purposes – and copy/paste the first three lines of code from the hello-world examples below. Save the file as something like hello_world.js at the same level as node_modules (not inside it).

Return to the terminal and execute
```bash
node hello_world.js
```
which should run the hello_world.js script you just wrote, giving the output
```bash
ans: [66, 63]
```
You have started to use MAIA Util! Please read the [documentation and tutorials](https://musicintelligence.co/api/maia-util/) to find out more.

### Developer

With [Node.js](https://nodejs.org/) set up, clone the MAIA Util repository from [here](https://bitbucket.org/tomthecollins/maia-util/) and run `npm install` to acquire the dependencies. Some packages, such as Rollup, might need a general install.

Please follow these steps when making additions or changes:

1. Additions or changes to the code should be made in the es6 folder;
2. When documenting, follow the JSDoc format used therein;
3. Write unit tests below each method/function;
4. Execute `npm run compile` to convert the various components in the es6 into the corresponding components in the dist folder, and to combine them into an IIFE (called maia-util.js, in the root of the repository);
5. Execute `jsdoc --configure .jsdoc.config.js es6` to update the documentation, which gets written to the docs folder, and check it looks good and reads well;
6. Say in step 1 you added a new file to the es6 folder called hello_world.js, then now it's time to check on your unit tests by executing `node hello_world.js` and seeing whether the `console.log()`s match your expected output;
7. Once you are satisfied with your unit tests, comment them out and paste them to test/index.js, following the chai format used therein. Execute `npm test` to verify that there are ticks everywhere and in particular that your new tests are being invoked;
8. Do the usual `git add .`, `git commit -m "Short meaningful message"`, and `git push`, and we'll see it on the other side as a pull request;
9. There should not be any need for you to edit the version in package.json;
10. Please keep any data files out of the repository by editing the .gitignore file.

## Hello-world examples

```javascript
const mu = require('maia-util');
const ans = mu.pitch_and_octave2midi_note_morphetic_pair("F#4");
console.log('ans:', ans);

const ans2 = mu.count_rows([[0, 60], [0, 59], [0, 60]]);
console.log('ans2:', ans2);
```

## Tests

```bash
npm test
```

## Contributing

If you're interested in contributing, please contact us at contact@musicintelligence.co.

Bugs can be reported to https://groups.google.com/d/forum/maia-inc-dev

## Release History

* 0.3.12 Added entropy function.
* 0.3.11 Integrated approx_equals in count_rows.
* 0.3.8-10 Increased flexibility of segmentation.
* 0.3.2-7 Inclusion of binomial_coefficient, factorial, and approx_equals.
* 0.3.0-1 Management of timelapse objects, including reduction of reliance on UUIDs.
* 0.2.30 Added timelapse_object.
* 0.2.28-29 Incorporating velocity property in comp_obj2note_point_set() and updating SIAR implementation.
* 0.2.26-27 Fixed a bug in group_grace_by_contiguous_id.
* 0.2.21-25 Added a few more basic statistics functions.
* 0.2.20 Added get_parameter_by_name and copy_to_clipboard.
* 0.2.19 Added sample standard deviation, and ability to weight choose_one with a cumulative distribution function.
* 0.2.18 Added cardinality_score implementation.
* 0.2.17 Added ability to segment based on ontimes alone.
* 0.2.15-16 Bug fixes to sample_without_replacement and farey_quantise.
* 0.2.12-14 Added sample_without_replacement.
* 0.2.10-11 Addressing some issues with HarmAn implementation.
* 0.2.6-9 Fixing issues with es6 and dist directories.
* 0.2.3-5 Tweaks to comp_obj2note_point_set pitch_class_lookup_array
* 0.2.2 Structural changes, including no longer extending the Array prototype.
* 0.2.1 Corrected quantisation function so that it does not produce zero durations.
* 0.2.0 ES6 modularized!
* 0.1.2 Fixed a bug that led to not defined in quantisation functions.
* 0.1.1 Documented the quantisation functions.
* 0.1.0 Added some basic quantisation functions.
* 0.0.8 Added a reference to missing Fb in pitch_class_lookup_array.
* 0.0.7 Fixed a bug that caused pitch_and_octave2midi_note_morphetic_pair to be overlooked in tonic_pitch_closest.
* 0.0.6 Renaming and alteration so all functions can be called with mu.
* 0.0.1-5 Fixing require bug so that all functions are properly exposed.
* 0.0.0 Initial release
