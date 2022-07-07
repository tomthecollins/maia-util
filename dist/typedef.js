/**
 * A point set
 * @typedef {Point[]} PointSet
 */

/**
 * A point
 * @typedef {number[]} Point
 */

/**
 * A minimal segment consists of the notes sounding between two partition points
 * (Pardo & Birmingham, 2002). The partition points are the unique,
 * sorted-ascending ontimes and offtimes in a song or piece. Contiguous minimal
 * segments can be combined, hence "segment".
 * @typedef {Object} Segment
 * @property {number} ontime - The partition point at which the segment begins.
 * @property {number} offtime - The partition point at which the segment ends.
 * @property {PointSet} points - The points corresponding to the notes sounding
 * between the two partition points.
 * @property {string} [name] - An extra, optional property describing the
 * segment, such as a chord label.
 * @property {number} [index] - An extra, optional property indexing the name
 * property in some array of names.
 * @property {number} [score] - An extra, optional property rating the extent to
 * which the name/label property applies to the content of `points`. Typically,
 * a lower score would indicate lower applicability, and a higher score would
 * indicate higher applicability.
 */

/**
 * An object describing properties of a note in a musical composition.
 * @typedef {Object} Note
 * @property {number} ontime - The starting time of the note in crotchet
 * (quarter-note) beats counting from 0 for bar (measure) 1 beat 1.
 * @property {number} MNN - The MIDI note number of the note (middle C = C4 =
 * 60).
 * @property {number} offtime - The ending time of the note in crotchet
 * (quarter-note) beats counting from 0 for bar (measure) 1 beat 1.
 * @property {number} duration - The duration of the note in crotchet
 * (quarter-note) beats.
 * @property {number} time - The starting time of the note in seconds (also
 * known as onset), taking into account tempo changes and expressive timing.
 * @property {number} emit - The ending time of the note in seconds (also
 * known as offset), taking into account tempo changes and expressive timing.
 * @property {number} durSec - The duration of the note in seconds.

 */

/**
 * An object describing properties of a tempo direction in a musical
 * composition.
 * @typedef {Object} Tempo
 * @property {number} ontime - The starting time of the note in crotchet
 * (quarter-note) beats counting from 0 for bar (measure) 1 beat 1.
 * @property {number} bpm - Beats per minute. As with ontime, which has units of
 * crotchet (quarter-note) beats, we also measure our bpms in crotchet beats per
 * minute.
 * @property {string} tempo - Indicates in words the speed at and/or manner in
 * which something ought to be played.
 */

/**
 * An object describing properties of a time signature in a musical composition.
 * @typedef {Object} TimeSignature
 * @property {number} barNo - Bar (measure) where the time signature begins.
 * @property {number} topNo - Top number in a time signature, denoting the
 * number of beats in a bar.
 * @property {number} bottomNo - Takes the value 1, 2, 4, 8, 16, or 32. The
 * bottom number in a time signature denotes the type of beat (1 for semibreve
 * or whole note, 2 for minim or half note, etc.).
 * @property {number} ontime - Time measured in crotchet (quarter-note) beats at
 * which the time signature begins.
 */

/**
 * An array consisting of {@link Tempo} objects.
 * @typedef {Tempo[]} Tempi
 */

/**
 * An array consisting of onset-ontime pairs
 * @typedef {OnsetOntimePair[]} OnsetOntimeMap
 */

/**
 * A pair consisting of an onset and an ontime
 * @typedef {number[]} OnsetOntimePair
 */
"use strict";