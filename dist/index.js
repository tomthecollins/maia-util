'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timelapse_object = exports.rand_5_bit = exports.rand_alphanumeric = exports.copy_to_clipboard = exports.get_parameter_by_name = exports.farey_quantise = exports.farey = exports.string_separated_string2array = exports.my_last_string = exports.locations = exports.cardinality_score = exports.siar = exports.intersection = exports.maximal_translatable_pattern = exports.orthogonal_projection_not_unique_equalp = exports.lex_less_or_equal = exports.lex_less_or_equal_triple = exports.index_1st_element_gt = exports.sample_without_replacement = exports.mod = exports.excess_kurtosis = exports.median_skewness = exports.skewness = exports.std = exports.median = exports.mean = exports.get_random_int_inclusive = exports.get_random_int = exports.get_random_arbitrary = exports.corr = exports.choose_one = exports.unique_rows = exports.restrict_point_set_in_nth_to_xs = exports.subtract_two_arrays = exports.sort_rows = exports.lex_more = exports.index_point_set = exports.get_unique = exports.copy_point_set = exports.multiply_array_by_constant = exports.min_argmin = exports.max_argmax = exports.binomial_coefficient = exports.factorial = exports.cyclically_permute_array_by = exports.array_sum = exports.array_object_index_of_array = exports.array_object_index_of = exports.append_array_of_arrays = exports.append_array = exports.segment = exports.score_segment_against_template = exports.points_belonging_to_interval = exports.harman_forward = exports.HarmAn_forward = exports.find_segment_against_template = exports.connect_or_not = exports.chord_lookup_pbmin7ths = exports.chord_templates_pbmin7ths = exports.krumhansl_and_kessler_key_profiles = exports.aarden_key_profiles = exports.fifth_steps_mode = exports.tonic_pitch_closest = exports.count_rows = exports.copy_array_object = exports.split_point_set_by_staff = exports.comp_obj2note_point_set = exports.staff_voice_xml2staff_voice_json = exports.sort_points_asc_by_id = exports.sort_points_asc = exports.row_of_max_bar_leq_bar_arg = exports.row_of_max_ontime_leq_ontime_arg = exports.resolve_expressions = exports.remove_duplicate_clef_changes = exports.pitch_and_octave2midi_note_morphetic_pair = exports.ontime_of_bar_and_beat_number = exports.nos_symbols_and_mode2key_name = exports.guess_morphetic_in_c_major = exports.guess_morphetic_in_C_major = exports.mnn2pitch_simple = exports.MNN2pitch_simple = exports.midi_note_morphetic_pair2pitch_and_octave = exports.guess_morphetic = exports.group_grace_by_contiguous_id = exports.default_page_and_system_breaks = exports.convert_1st_bar2anacrusis_val = exports.clef_sign_and_line2clef_name = exports.bar_and_beat_number_of_ontime = exports.append_ontimes_to_time_signatures = undefined;

require('./util_array');

var _append_ontimes_to_time_signatures = require('./append_ontimes_to_time_signatures');

var _append_ontimes_to_time_signatures2 = _interopRequireDefault(_append_ontimes_to_time_signatures);

var _bar_and_beat_number_of_ontime = require('./bar_and_beat_number_of_ontime');

var _bar_and_beat_number_of_ontime2 = _interopRequireDefault(_bar_and_beat_number_of_ontime);

var _clef_sign_and_line2clef_name = require('./clef_sign_and_line2clef_name');

var _clef_sign_and_line2clef_name2 = _interopRequireDefault(_clef_sign_and_line2clef_name);

var _convert_1st_bar2anacrusis_val = require('./convert_1st_bar2anacrusis_val');

var _convert_1st_bar2anacrusis_val2 = _interopRequireDefault(_convert_1st_bar2anacrusis_val);

var _default_page_and_system_breaks = require('./default_page_and_system_breaks');

var _default_page_and_system_breaks2 = _interopRequireDefault(_default_page_and_system_breaks);

var _group_grace_by_contiguous_id = require('./group_grace_by_contiguous_id');

var _group_grace_by_contiguous_id2 = _interopRequireDefault(_group_grace_by_contiguous_id);

var _guess_morphetic = require('./guess_morphetic');

var _guess_morphetic2 = _interopRequireDefault(_guess_morphetic);

var _midi_note_morphetic_pair2pitch_and_octave = require('./midi_note_morphetic_pair2pitch_and_octave');

var _midi_note_morphetic_pair2pitch_and_octave2 = _interopRequireDefault(_midi_note_morphetic_pair2pitch_and_octave);

var _mnn2pitch_simple = require('./mnn2pitch_simple');

var _mnn2pitch_simple2 = _interopRequireDefault(_mnn2pitch_simple);

var _guess_morphetic_in_c_major = require('./guess_morphetic_in_c_major');

var _guess_morphetic_in_c_major2 = _interopRequireDefault(_guess_morphetic_in_c_major);

var _nos_symbols_and_mode2key_name = require('./nos_symbols_and_mode2key_name');

var _nos_symbols_and_mode2key_name2 = _interopRequireDefault(_nos_symbols_and_mode2key_name);

var _ontime_of_bar_and_beat_number = require('./ontime_of_bar_and_beat_number');

var _ontime_of_bar_and_beat_number2 = _interopRequireDefault(_ontime_of_bar_and_beat_number);

var _pitch_and_octave2midi_note_morphetic_pair = require('./pitch_and_octave2midi_note_morphetic_pair');

var _pitch_and_octave2midi_note_morphetic_pair2 = _interopRequireDefault(_pitch_and_octave2midi_note_morphetic_pair);

var _remove_duplicate_clef_changes = require('./remove_duplicate_clef_changes');

var _remove_duplicate_clef_changes2 = _interopRequireDefault(_remove_duplicate_clef_changes);

var _resolve_expressions = require('./resolve_expressions');

var _resolve_expressions2 = _interopRequireDefault(_resolve_expressions);

var _row_of_max_ontime_leq_ontime_arg = require('./row_of_max_ontime_leq_ontime_arg');

var _row_of_max_ontime_leq_ontime_arg2 = _interopRequireDefault(_row_of_max_ontime_leq_ontime_arg);

var _row_of_max_bar_leq_bar_arg = require('./row_of_max_bar_leq_bar_arg');

var _row_of_max_bar_leq_bar_arg2 = _interopRequireDefault(_row_of_max_bar_leq_bar_arg);

var _sort_points_asc = require('./sort_points_asc');

var _sort_points_asc2 = _interopRequireDefault(_sort_points_asc);

var _sort_points_asc_by_id = require('./sort_points_asc_by_id');

var _sort_points_asc_by_id2 = _interopRequireDefault(_sort_points_asc_by_id);

var _staff_voice_xml2staff_voice_json = require('./staff_voice_xml2staff_voice_json');

var _staff_voice_xml2staff_voice_json2 = _interopRequireDefault(_staff_voice_xml2staff_voice_json);

var _comp_obj2note_point_set = require('./comp_obj2note_point_set');

var _comp_obj2note_point_set2 = _interopRequireDefault(_comp_obj2note_point_set);

var _split_point_set_by_staff = require('./split_point_set_by_staff');

var _split_point_set_by_staff2 = _interopRequireDefault(_split_point_set_by_staff);

var _copy_array_object = require('./copy_array_object');

var _copy_array_object2 = _interopRequireDefault(_copy_array_object);

var _count_rows = require('./count_rows');

var _count_rows2 = _interopRequireDefault(_count_rows);

var _tonic_pitch_closest = require('./tonic_pitch_closest');

var _tonic_pitch_closest2 = _interopRequireDefault(_tonic_pitch_closest);

var _util_key = require('./util_key');

var _util_chord = require('./util_chord');

var _connect_or_not = require('./connect_or_not');

var _connect_or_not2 = _interopRequireDefault(_connect_or_not);

var _find_segment_against_template = require('./find_segment_against_template');

var _find_segment_against_template2 = _interopRequireDefault(_find_segment_against_template);

var _harman_forward = require('./harman_forward');

var _harman_forward2 = _interopRequireDefault(_harman_forward);

var _points_belonging_to_interval = require('./points_belonging_to_interval');

var _points_belonging_to_interval2 = _interopRequireDefault(_points_belonging_to_interval);

var _score_segment_against_template = require('./score_segment_against_template');

var _score_segment_against_template2 = _interopRequireDefault(_score_segment_against_template);

var _segment = require('./segment');

var _segment2 = _interopRequireDefault(_segment);

var _append_array = require('./append_array');

var _append_array2 = _interopRequireDefault(_append_array);

var _append_array_of_arrays = require('./append_array_of_arrays');

var _append_array_of_arrays2 = _interopRequireDefault(_append_array_of_arrays);

var _array_object_index_of = require('./array_object_index_of');

var _array_object_index_of2 = _interopRequireDefault(_array_object_index_of);

var _array_object_index_of_array = require('./array_object_index_of_array');

var _array_object_index_of_array2 = _interopRequireDefault(_array_object_index_of_array);

var _array_sum = require('./array_sum');

var _array_sum2 = _interopRequireDefault(_array_sum);

var _cyclically_permute_array_by = require('./cyclically_permute_array_by');

var _cyclically_permute_array_by2 = _interopRequireDefault(_cyclically_permute_array_by);

var _factorial = require('./factorial');

var _factorial2 = _interopRequireDefault(_factorial);

var _binomial_coefficient = require('./binomial_coefficient');

var _binomial_coefficient2 = _interopRequireDefault(_binomial_coefficient);

var _max_argmax = require('./max_argmax');

var _max_argmax2 = _interopRequireDefault(_max_argmax);

var _min_argmin = require('./min_argmin');

var _min_argmin2 = _interopRequireDefault(_min_argmin);

var _multiply_array_by_constant = require('./multiply_array_by_constant');

var _multiply_array_by_constant2 = _interopRequireDefault(_multiply_array_by_constant);

var _copy_point_set = require('./copy_point_set');

var _copy_point_set2 = _interopRequireDefault(_copy_point_set);

var _get_unique = require('./get_unique');

var _get_unique2 = _interopRequireDefault(_get_unique);

var _index_point_set = require('./index_point_set');

var _index_point_set2 = _interopRequireDefault(_index_point_set);

var _lex_more = require('./lex_more');

var _lex_more2 = _interopRequireDefault(_lex_more);

var _sort_rows = require('./sort_rows');

var _sort_rows2 = _interopRequireDefault(_sort_rows);

var _subtract_two_arrays = require('./subtract_two_arrays');

var _subtract_two_arrays2 = _interopRequireDefault(_subtract_two_arrays);

var _restrict_point_set_in_nth_to_xs = require('./restrict_point_set_in_nth_to_xs');

var _restrict_point_set_in_nth_to_xs2 = _interopRequireDefault(_restrict_point_set_in_nth_to_xs);

var _unique_rows = require('./unique_rows');

var _unique_rows2 = _interopRequireDefault(_unique_rows);

var _choose_one = require('./choose_one');

var _choose_one2 = _interopRequireDefault(_choose_one);

var _corr = require('./corr');

var _corr2 = _interopRequireDefault(_corr);

var _get_random_arbitrary = require('./get_random_arbitrary');

var _get_random_arbitrary2 = _interopRequireDefault(_get_random_arbitrary);

var _get_random_int = require('./get_random_int');

var _get_random_int2 = _interopRequireDefault(_get_random_int);

var _get_random_int_inclusive = require('./get_random_int_inclusive');

var _get_random_int_inclusive2 = _interopRequireDefault(_get_random_int_inclusive);

var _mean = require('./mean');

var _mean2 = _interopRequireDefault(_mean);

var _median = require('./median');

var _median2 = _interopRequireDefault(_median);

var _std = require('./std');

var _std2 = _interopRequireDefault(_std);

var _skewness = require('./skewness');

var _skewness2 = _interopRequireDefault(_skewness);

var _median_skewness = require('./median_skewness');

var _median_skewness2 = _interopRequireDefault(_median_skewness);

var _excess_kurtosis = require('./excess_kurtosis');

var _excess_kurtosis2 = _interopRequireDefault(_excess_kurtosis);

var _mod = require('./mod');

var _mod2 = _interopRequireDefault(_mod);

var _sample_without_replacement = require('./sample_without_replacement');

var _sample_without_replacement2 = _interopRequireDefault(_sample_without_replacement);

var _index_1st_element_gt = require('./index_1st_element_gt');

var _index_1st_element_gt2 = _interopRequireDefault(_index_1st_element_gt);

var _lex_less_or_equal_triple = require('./lex_less_or_equal_triple');

var _lex_less_or_equal_triple2 = _interopRequireDefault(_lex_less_or_equal_triple);

var _lex_less_or_equal = require('./lex_less_or_equal');

var _lex_less_or_equal2 = _interopRequireDefault(_lex_less_or_equal);

var _orthogonal_projection_not_unique_equalp = require('./orthogonal_projection_not_unique_equalp');

var _orthogonal_projection_not_unique_equalp2 = _interopRequireDefault(_orthogonal_projection_not_unique_equalp);

var _maximal_translatable_pattern = require('./maximal_translatable_pattern');

var _maximal_translatable_pattern2 = _interopRequireDefault(_maximal_translatable_pattern);

var _intersection = require('./intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _siar = require('./siar');

var _siar2 = _interopRequireDefault(_siar);

var _cardinality_score = require('./cardinality_score');

var _cardinality_score2 = _interopRequireDefault(_cardinality_score);

var _locations = require('./locations');

var _locations2 = _interopRequireDefault(_locations);

var _my_last_string = require('./my_last_string');

var _my_last_string2 = _interopRequireDefault(_my_last_string);

var _string_separated_string2array = require('./string_separated_string2array');

var _string_separated_string2array2 = _interopRequireDefault(_string_separated_string2array);

var _farey = require('./farey');

var _farey2 = _interopRequireDefault(_farey);

var _farey_quantise = require('./farey_quantise');

var _farey_quantise2 = _interopRequireDefault(_farey_quantise);

var _get_parameter_by_name = require('./get_parameter_by_name');

var _get_parameter_by_name2 = _interopRequireDefault(_get_parameter_by_name);

var _copy_to_clipboard = require('./copy_to_clipboard');

var _copy_to_clipboard2 = _interopRequireDefault(_copy_to_clipboard);

var _rand_alphanumeric = require('./rand_alphanumeric');

var _rand_alphanumeric2 = _interopRequireDefault(_rand_alphanumeric);

var _rand_5_bit = require('./rand_5_bit');

var _rand_5_bit2 = _interopRequireDefault(_rand_5_bit);

var _timelapse_object = require('./timelapse_object');

var _timelapse_object2 = _interopRequireDefault(_timelapse_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Welcome to the API for MAIA Util!
 *
 * MAIA Util is a JavaScript package used by Music Artificial Intelligence
 * Algorithms, Inc. in various applications that we have produced or are
 * developing currently.
 *
 * If you already know about JavaScript app development and music computing,
 * then probably the best starting point is the
 * [NPM package](https://npmjs.com/package/maia-util/).
 *
 * If you have a music computing background but know little about JavaScript,
 * then the tutorials menu is a good place to start. There are also some
 * fancier-looking demos available
 * [here](http://tomcollinsresearch.net/mc/ex/),
 * all of which involve MAIA Util methods to some degree.
 *
 * If you don't know much about music or music computing, then the
 * [fancier-looking demos](http://tomcollinsresearch.net/mc/ex/) are still the
 * best place to start, to get hooked on exploring web-based, interactive music
 * interfaces.
 *
 * This documentation is in the process of being completed. Some functions have
 * not had their existing documentation converted to JSDoc format yet.
 *
 * @version 0.3.10
 * @author Tom Collins and Christian Coulon
 * @copyright 2016-2024
 *
 */

var append_ontimes_to_time_signatures = exports.append_ontimes_to_time_signatures = _append_ontimes_to_time_signatures2.default;
var bar_and_beat_number_of_ontime = exports.bar_and_beat_number_of_ontime = _bar_and_beat_number_of_ontime2.default;
var clef_sign_and_line2clef_name = exports.clef_sign_and_line2clef_name = _clef_sign_and_line2clef_name2.default;
var convert_1st_bar2anacrusis_val = exports.convert_1st_bar2anacrusis_val = _convert_1st_bar2anacrusis_val2.default;
var default_page_and_system_breaks = exports.default_page_and_system_breaks = _default_page_and_system_breaks2.default;
var group_grace_by_contiguous_id = exports.group_grace_by_contiguous_id = _group_grace_by_contiguous_id2.default;
var guess_morphetic = exports.guess_morphetic = _guess_morphetic2.default;
var midi_note_morphetic_pair2pitch_and_octave = exports.midi_note_morphetic_pair2pitch_and_octave = _midi_note_morphetic_pair2pitch_and_octave2.default;
var MNN2pitch_simple = exports.MNN2pitch_simple = _mnn2pitch_simple2.default;
var mnn2pitch_simple = exports.mnn2pitch_simple = _mnn2pitch_simple2.default;
var guess_morphetic_in_C_major = exports.guess_morphetic_in_C_major = _guess_morphetic_in_c_major2.default;
var guess_morphetic_in_c_major = exports.guess_morphetic_in_c_major = _guess_morphetic_in_c_major2.default;
var nos_symbols_and_mode2key_name = exports.nos_symbols_and_mode2key_name = _nos_symbols_and_mode2key_name2.default;
var ontime_of_bar_and_beat_number = exports.ontime_of_bar_and_beat_number = _ontime_of_bar_and_beat_number2.default;
var pitch_and_octave2midi_note_morphetic_pair = exports.pitch_and_octave2midi_note_morphetic_pair = _pitch_and_octave2midi_note_morphetic_pair2.default;
var remove_duplicate_clef_changes = exports.remove_duplicate_clef_changes = _remove_duplicate_clef_changes2.default;
var resolve_expressions = exports.resolve_expressions = _resolve_expressions2.default;
var row_of_max_ontime_leq_ontime_arg = exports.row_of_max_ontime_leq_ontime_arg = _row_of_max_ontime_leq_ontime_arg2.default;
var row_of_max_bar_leq_bar_arg = exports.row_of_max_bar_leq_bar_arg = _row_of_max_bar_leq_bar_arg2.default;
var sort_points_asc = exports.sort_points_asc = _sort_points_asc2.default;
var sort_points_asc_by_id = exports.sort_points_asc_by_id = _sort_points_asc_by_id2.default;
var staff_voice_xml2staff_voice_json = exports.staff_voice_xml2staff_voice_json = _staff_voice_xml2staff_voice_json2.default;
var comp_obj2note_point_set = exports.comp_obj2note_point_set = _comp_obj2note_point_set2.default;
var split_point_set_by_staff = exports.split_point_set_by_staff = _split_point_set_by_staff2.default;
var copy_array_object = exports.copy_array_object = _copy_array_object2.default;
var count_rows = exports.count_rows = _count_rows2.default;
var tonic_pitch_closest = exports.tonic_pitch_closest = _tonic_pitch_closest2.default;
var fifth_steps_mode = exports.fifth_steps_mode = _util_key.fifth_steps_mode;
var aarden_key_profiles = exports.aarden_key_profiles = _util_key.aarden_key_profiles;
var krumhansl_and_kessler_key_profiles = exports.krumhansl_and_kessler_key_profiles = _util_key.krumhansl_and_kessler_key_profiles;
var chord_templates_pbmin7ths = exports.chord_templates_pbmin7ths = _util_chord.chord_templates_pbmin7ths;
var chord_lookup_pbmin7ths = exports.chord_lookup_pbmin7ths = _util_chord.chord_lookup_pbmin7ths;
var connect_or_not = exports.connect_or_not = _connect_or_not2.default;
var find_segment_against_template = exports.find_segment_against_template = _find_segment_against_template2.default;
var HarmAn_forward = exports.HarmAn_forward = _harman_forward2.default;
var harman_forward = exports.harman_forward = _harman_forward2.default;
var points_belonging_to_interval = exports.points_belonging_to_interval = _points_belonging_to_interval2.default;
var score_segment_against_template = exports.score_segment_against_template = _score_segment_against_template2.default;
var segment = exports.segment = _segment2.default;
var append_array = exports.append_array = _append_array2.default;
var append_array_of_arrays = exports.append_array_of_arrays = _append_array_of_arrays2.default;
var array_object_index_of = exports.array_object_index_of = _array_object_index_of2.default;
var array_object_index_of_array = exports.array_object_index_of_array = _array_object_index_of_array2.default;
var array_sum = exports.array_sum = _array_sum2.default;
var cyclically_permute_array_by = exports.cyclically_permute_array_by = _cyclically_permute_array_by2.default;
var factorial = exports.factorial = _factorial2.default;
var binomial_coefficient = exports.binomial_coefficient = _binomial_coefficient2.default;
var max_argmax = exports.max_argmax = _max_argmax2.default;
var min_argmin = exports.min_argmin = _min_argmin2.default;
var multiply_array_by_constant = exports.multiply_array_by_constant = _multiply_array_by_constant2.default;
var copy_point_set = exports.copy_point_set = _copy_point_set2.default;
var get_unique = exports.get_unique = _get_unique2.default;
var index_point_set = exports.index_point_set = _index_point_set2.default;
var lex_more = exports.lex_more = _lex_more2.default;
var sort_rows = exports.sort_rows = _sort_rows2.default;
var subtract_two_arrays = exports.subtract_two_arrays = _subtract_two_arrays2.default;
var restrict_point_set_in_nth_to_xs = exports.restrict_point_set_in_nth_to_xs = _restrict_point_set_in_nth_to_xs2.default;
var unique_rows = exports.unique_rows = _unique_rows2.default;
var choose_one = exports.choose_one = _choose_one2.default;
var corr = exports.corr = _corr2.default;
var get_random_arbitrary = exports.get_random_arbitrary = _get_random_arbitrary2.default;
var get_random_int = exports.get_random_int = _get_random_int2.default;
var get_random_int_inclusive = exports.get_random_int_inclusive = _get_random_int_inclusive2.default;
var mean = exports.mean = _mean2.default;
var median = exports.median = _median2.default;
var std = exports.std = _std2.default;
var skewness = exports.skewness = _skewness2.default;
var median_skewness = exports.median_skewness = _median_skewness2.default;
var excess_kurtosis = exports.excess_kurtosis = _excess_kurtosis2.default;
var mod = exports.mod = _mod2.default;
var sample_without_replacement = exports.sample_without_replacement = _sample_without_replacement2.default;
var index_1st_element_gt = exports.index_1st_element_gt = _index_1st_element_gt2.default;
var lex_less_or_equal_triple = exports.lex_less_or_equal_triple = _lex_less_or_equal_triple2.default;
var lex_less_or_equal = exports.lex_less_or_equal = _lex_less_or_equal2.default;
var orthogonal_projection_not_unique_equalp = exports.orthogonal_projection_not_unique_equalp = _orthogonal_projection_not_unique_equalp2.default;
var maximal_translatable_pattern = exports.maximal_translatable_pattern = _maximal_translatable_pattern2.default;
var intersection = exports.intersection = _intersection2.default;
var siar = exports.siar = _siar2.default;
var cardinality_score = exports.cardinality_score = _cardinality_score2.default;
var locations = exports.locations = _locations2.default;
var my_last_string = exports.my_last_string = _my_last_string2.default;
var string_separated_string2array = exports.string_separated_string2array = _string_separated_string2array2.default;
var farey = exports.farey = _farey2.default;
var farey_quantise = exports.farey_quantise = _farey_quantise2.default;
var get_parameter_by_name = exports.get_parameter_by_name = _get_parameter_by_name2.default;
var copy_to_clipboard = exports.copy_to_clipboard = _copy_to_clipboard2.default;
var rand_alphanumeric = exports.rand_alphanumeric = _rand_alphanumeric2.default;
var rand_5_bit = exports.rand_5_bit = _rand_5_bit2.default;
var timelapse_object = exports.timelapse_object = _timelapse_object2.default;

exports.default = {
  append_ontimes_to_time_signatures: append_ontimes_to_time_signatures,
  bar_and_beat_number_of_ontime: bar_and_beat_number_of_ontime,
  clef_sign_and_line2clef_name: clef_sign_and_line2clef_name,
  convert_1st_bar2anacrusis_val: convert_1st_bar2anacrusis_val,
  default_page_and_system_breaks: default_page_and_system_breaks,
  group_grace_by_contiguous_id: group_grace_by_contiguous_id,
  guess_morphetic: guess_morphetic,
  midi_note_morphetic_pair2pitch_and_octave: midi_note_morphetic_pair2pitch_and_octave,
  mnn2pitch_simple: mnn2pitch_simple,
  guess_morphetic_in_c_major: guess_morphetic_in_c_major,
  guess_morphetic_in_C_major: guess_morphetic_in_C_major,
  nos_symbols_and_mode2key_name: nos_symbols_and_mode2key_name,
  ontime_of_bar_and_beat_number: ontime_of_bar_and_beat_number,
  pitch_and_octave2midi_note_morphetic_pair: pitch_and_octave2midi_note_morphetic_pair,
  remove_duplicate_clef_changes: remove_duplicate_clef_changes,
  resolve_expressions: resolve_expressions,
  row_of_max_ontime_leq_ontime_arg: row_of_max_ontime_leq_ontime_arg,
  row_of_max_bar_leq_bar_arg: row_of_max_bar_leq_bar_arg,
  sort_points_asc: sort_points_asc,
  sort_points_asc_by_id: sort_points_asc_by_id,
  staff_voice_xml2staff_voice_json: staff_voice_xml2staff_voice_json,
  comp_obj2note_point_set: comp_obj2note_point_set,
  split_point_set_by_staff: split_point_set_by_staff,
  copy_array_object: copy_array_object,
  count_rows: count_rows,
  tonic_pitch_closest: tonic_pitch_closest,
  fifth_steps_mode: fifth_steps_mode,
  aarden_key_profiles: aarden_key_profiles,
  krumhansl_and_kessler_key_profiles: krumhansl_and_kessler_key_profiles,
  chord_templates_pbmin7ths: chord_templates_pbmin7ths,
  chord_lookup_pbmin7ths: chord_lookup_pbmin7ths,
  connect_or_not: connect_or_not,
  find_segment_against_template: find_segment_against_template,
  harman_forward: harman_forward,
  HarmAn_forward: HarmAn_forward,
  points_belonging_to_interval: points_belonging_to_interval,
  score_segment_against_template: score_segment_against_template,
  segment: segment,
  append_array: append_array,
  append_array_of_arrays: append_array_of_arrays,
  array_object_index_of: array_object_index_of,
  array_object_index_of_array: array_object_index_of_array,
  array_sum: array_sum,
  cyclically_permute_array_by: cyclically_permute_array_by,
  factorial: factorial,
  binomial_coefficient: binomial_coefficient,
  max_argmax: max_argmax,
  min_argmin: min_argmin,
  multiply_array_by_constant: multiply_array_by_constant,
  copy_point_set: copy_point_set,
  get_unique: get_unique,
  index_point_set: index_point_set,
  lex_more: lex_more,
  sort_rows: sort_rows,
  subtract_two_arrays: subtract_two_arrays,
  restrict_point_set_in_nth_to_xs: restrict_point_set_in_nth_to_xs,
  unique_rows: unique_rows,
  choose_one: choose_one,
  corr: corr,
  get_random_arbitrary: get_random_arbitrary,
  get_random_int: get_random_int,
  get_random_int_inclusive: get_random_int_inclusive,
  mean: mean,
  median: median,
  std: std,
  skewness: skewness,
  median_skewness: median_skewness,
  excess_kurtosis: excess_kurtosis,
  mod: mod,
  sample_without_replacement: sample_without_replacement,
  index_1st_element_gt: index_1st_element_gt,
  lex_less_or_equal_triple: lex_less_or_equal_triple,
  lex_less_or_equal: lex_less_or_equal,
  orthogonal_projection_not_unique_equalp: orthogonal_projection_not_unique_equalp,
  maximal_translatable_pattern: maximal_translatable_pattern,
  intersection: intersection,
  siar: siar,
  cardinality_score: cardinality_score,
  locations: locations,
  my_last_string: my_last_string,
  string_separated_string2array: string_separated_string2array,
  farey: farey,
  farey_quantise: farey_quantise,
  get_parameter_by_name: get_parameter_by_name,
  copy_to_clipboard: copy_to_clipboard,
  rand_alphanumeric: rand_alphanumeric,
  rand_5_bit: rand_5_bit,
  timelapse_object: timelapse_object
};