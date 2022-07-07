"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = sort_points_asc;
function sort_points_asc(a, b) {
	// Tom Collins 17/11/2014.
	// In
	// a Object mandatory
	// b Object mandatory
	// Out Object
	// A helper function to sort two notes (points) or rests by ascending ontime.
	// If the ontimes match and MNNs are defined, sort by these instead. If these
	// match, sort by staffNo. If these match, sort by voiceNo.

	if (a.ontime != b.ontime) {
		return a.ontime - b.ontime;
	}
	if (a.MNN != undefined) {
		if (a.MNN != b.MNN) {
			return a.MNN - b.MNN;
		}
	}
	if (a.staffNo != b.staffNo) {
		return a.staffNo - b.staffNo;
	}
	return a.voiceNo - b.voiceNo;
}