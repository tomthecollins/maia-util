"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// const chord_lookup_pbmin7ths =
exports.default = ["C major", "Db major", "D major", "Eb major", "E major", "F major", "F# major", "G major", "Ab major", "A major", "Bb major", "B major", "C 7", "Db 7", "D 7", "Eb 7", "E 7", "F 7", "F# 7", "G 7", "Ab 7", "A 7", "Bb 7", "B 7", "C minor", "Db minor", "D minor", "Eb minor", "E minor", "F minor", "F# minor", "G minor", "Ab minor", "A minor", "Bb minor", "B minor",
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