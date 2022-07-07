"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Chord labeling.
var chord_templates_pbmin7ths = exports.chord_templates_pbmin7ths = [
// Major triads
[0, 4, 7], [1, 5, 8], [2, 6, 9], [3, 7, 10], [4, 8, 11], [5, 9, 0], [6, 10, 1], [7, 11, 2], [8, 0, 3], [9, 1, 4], [10, 2, 5], [11, 3, 6],
// Dominant 7th triads
[0, 4, 7, 10], [1, 5, 8, 11], [2, 6, 9, 0], [3, 7, 10, 1], [4, 8, 11, 2], [5, 9, 0, 3], [6, 10, 1, 4], [7, 11, 2, 5], [8, 0, 3, 6], [9, 1, 4, 7], [10, 2, 5, 8], [11, 3, 6, 9],
// Minor triads
[0, 3, 7], [1, 4, 8], [2, 5, 9], [3, 6, 10], [4, 7, 11], [5, 8, 0], [6, 9, 1], [7, 10, 2], [8, 11, 3], [9, 0, 4], [10, 1, 5], [11, 2, 6],
// Fully diminished 7th
[0, 3, 6, 9], [1, 4, 7, 10], [2, 5, 8, 11],
// Half diminished 7th
[0, 3, 6, 10], [1, 4, 7, 11], [2, 5, 8, 0], [3, 6, 9, 1], [4, 7, 10, 2], [5, 8, 11, 3], [6, 9, 0, 4], [7, 10, 1, 5], [8, 11, 2, 6], [9, 0, 3, 7], [10, 1, 4, 8], [11, 2, 5, 9],
// Diminished triad
[0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 6, 9], [4, 7, 10], [5, 8, 11], [6, 9, 0], [7, 10, 1], [8, 11, 2], [9, 0, 3], [10, 1, 4], [11, 2, 5],
// Minor 7th
[0, 3, 7, 10], [1, 4, 8, 11], [2, 5, 9, 0], [3, 6, 10, 1], [4, 7, 11, 2], [5, 8, 0, 3], [6, 9, 1, 4], [7, 10, 2, 5], [8, 11, 3, 6], [9, 0, 4, 7], [10, 1, 5, 8], [11, 2, 6, 9]];

var chord_lookup_pbmin7ths = exports.chord_lookup_pbmin7ths = ["C major", "Db major", "D major", "Eb major", "E major", "F major", "F# major", "G major", "Ab major", "A major", "Bb major", "B major", "C 7", "Db 7", "D 7", "Eb 7", "E 7", "F 7", "F# 7", "G 7", "Ab 7", "A 7", "Bb 7", "B 7", "C minor", "Db minor", "D minor", "Eb minor", "E minor", "F minor", "F# minor", "G minor", "Ab minor", "A minor", "Bb minor", "B minor",
// Because Pardo & Birmingham (2002) only use MIDI note,
// there is a bit of an issue with diminished 7th chords
// (next three labels), as you can't tell for instance
// whether the pitch classes 0, 3, 6, 9 are C Dim 7,
// D# Dim 7, F# Dim 7, or A Dim 7. In my Lisp
// implementation, I use the surrounding musical context
// (including pitch names derived from the combination of
// MIDI and morphetic pitch numbers) to attempt to resolve
// any ambiguities, but in this JavaScript implementation, I
// just assume it's F# Dim 7 (or G Dim 7 or "G# Dim 7
// respectively).
"F# Dim 7", "G Dim 7", "G# Dim 7", "C half dim 7", "Db half dim 7", "D half dim 7", "Eb half dim 7", "E half dim 7", "F half dim 7", "F# half dim 7", "G half dim 7", "Ab half dim 7", "A half dim 7", "Bb half dim 7", "B half dim 7", "C dim", "Db dim", "D dim", "Eb dim", "E dim", "F dim", "F# dim", "G dim", "Ab dim", "A dim", "Bb dim", "B dim", "C minor 7", "Db minor 7", "D minor 7", "Eb minor 7", "E minor 7", "F minor 7", "F# minor 7", "G minor 7", "Ab minor 7", "A minor 7", "Bb minor 7", "B minor 7"];