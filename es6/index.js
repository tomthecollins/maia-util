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
 * @version 0.3.12
 * @author Tom Collins and Christian Coulon
 * @copyright 2016-2024
 *
 */

import './util_array'
import append_ontimes_to_time_signatures_default from './append_ontimes_to_time_signatures'
import bar_and_beat_number_of_ontime_default from './bar_and_beat_number_of_ontime'
import clef_sign_and_line2clef_name_default from './clef_sign_and_line2clef_name'
import convert_1st_bar2anacrusis_val_default from './convert_1st_bar2anacrusis_val'
import default_page_and_system_breaks_default from './default_page_and_system_breaks'
import group_grace_by_contiguous_id_default from './group_grace_by_contiguous_id'
import guess_morphetic_default from './guess_morphetic'
import midi_note_morphetic_pair2pitch_and_octave_default from './midi_note_morphetic_pair2pitch_and_octave'
import mnn2pitch_simple_default from './mnn2pitch_simple'
import guess_morphetic_in_c_major_default from './guess_morphetic_in_c_major'
import nos_symbols_and_mode2key_name_default from './nos_symbols_and_mode2key_name'
import ontime_of_bar_and_beat_number_default from './ontime_of_bar_and_beat_number'
import pitch_and_octave2midi_note_morphetic_pair_default from './pitch_and_octave2midi_note_morphetic_pair'
import remove_duplicate_clef_changes_default from './remove_duplicate_clef_changes'
import resolve_expressions_default from './resolve_expressions'
import row_of_max_ontime_leq_ontime_arg_default from './row_of_max_ontime_leq_ontime_arg'
import row_of_max_bar_leq_bar_arg_default from './row_of_max_bar_leq_bar_arg'
import sort_points_asc_default from './sort_points_asc'
import sort_points_asc_by_id_default from './sort_points_asc_by_id'
import staff_voice_xml2staff_voice_json_default from './staff_voice_xml2staff_voice_json'
import comp_obj2note_point_set_default from './comp_obj2note_point_set'
import split_point_set_by_staff_default from './split_point_set_by_staff'
import copy_array_object_default from './copy_array_object'
import count_rows_default from './count_rows'
import tonic_pitch_closest_default from './tonic_pitch_closest'
import {
  fifth_steps_mode as fifth_steps_mode_default,
  aarden_key_profiles as aarden_key_profiles_default,
  krumhansl_and_kessler_key_profiles as krumhansl_and_kessler_key_profiles_default
} from './util_key'
import {
  chord_templates_pbmin7ths as chord_templates_pbmin7ths_default,
  chord_lookup_pbmin7ths as chord_lookup_pbmin7ths_default
} from './util_chord'
import connect_or_not_default from './connect_or_not'
import find_segment_against_template_default from './find_segment_against_template'
import harman_forward_default from './harman_forward'
import points_belonging_to_interval_default from './points_belonging_to_interval'
import score_segment_against_template_default from './score_segment_against_template'
import segment_default from './segment'
import append_array_default from './append_array'
import append_array_of_arrays_default from './append_array_of_arrays'
import array_object_index_of_default from './array_object_index_of'
import array_object_index_of_array_default from './array_object_index_of_array'
import array_sum_default from './array_sum'
import cyclically_permute_array_by_default from './cyclically_permute_array_by'
import factorial_default from './factorial'
import binomial_coefficient_default from './binomial_coefficient'
import max_argmax_default from './max_argmax'
import min_argmin_default from './min_argmin'
import multiply_array_by_constant_default from './multiply_array_by_constant'
import copy_point_set_default from './copy_point_set'
import get_unique_default from './get_unique'
import index_point_set_default from './index_point_set'
import lex_more_default from './lex_more'
import sort_rows_default from './sort_rows'
import subtract_two_arrays_default from './subtract_two_arrays'
import restrict_point_set_in_nth_to_xs_default from './restrict_point_set_in_nth_to_xs'
import unique_rows_default from './unique_rows'
import choose_one_default from './choose_one'
import corr_default from './corr'
import get_random_arbitrary_default from './get_random_arbitrary'
import get_random_int_default from './get_random_int'
import get_random_int_inclusive_default from './get_random_int_inclusive'
import mean_default from './mean'
import median_default from './median'
import std_default from './std'
import entropy_default from './entropy'
import skewness_default from './skewness'
import median_skewness_default from './median_skewness'
import excess_kurtosis_default from './excess_kurtosis'
import mod_default from './mod'
import sample_without_replacement_default from './sample_without_replacement'
import index_1st_element_gt_default from './index_1st_element_gt'
import lex_less_or_equal_triple_default from './lex_less_or_equal_triple'
import lex_less_or_equal_default from './lex_less_or_equal'
import orthogonal_projection_not_unique_equalp_default from './orthogonal_projection_not_unique_equalp'
import maximal_translatable_pattern_default from './maximal_translatable_pattern'
import translators_default from './translators'
import intersection_default from './intersection'
import intersection_hash_default from './intersection_hash'
import siar_default from './siar'
import cardinality_score_default from './cardinality_score'
import locations_default from './locations'
import my_last_string_default from './my_last_string'
import string_separated_string2array_default from './string_separated_string2array'
import farey_default from './farey'
import farey_quantise_default from './farey_quantise'
import get_parameter_by_name_default from './get_parameter_by_name'
import copy_to_clipboard_default from './copy_to_clipboard'
import rand_alphanumeric_default from './rand_alphanumeric'
import rand_5_bit_default from './rand_5_bit'
import timelapse_object_default from './timelapse_object'


export const append_ontimes_to_time_signatures = append_ontimes_to_time_signatures_default
export const bar_and_beat_number_of_ontime = bar_and_beat_number_of_ontime_default
export const clef_sign_and_line2clef_name = clef_sign_and_line2clef_name_default
export const convert_1st_bar2anacrusis_val = convert_1st_bar2anacrusis_val_default
export const default_page_and_system_breaks = default_page_and_system_breaks_default
export const group_grace_by_contiguous_id = group_grace_by_contiguous_id_default
export const guess_morphetic = guess_morphetic_default
export const midi_note_morphetic_pair2pitch_and_octave = midi_note_morphetic_pair2pitch_and_octave_default
export const MNN2pitch_simple = mnn2pitch_simple_default
export const mnn2pitch_simple = mnn2pitch_simple_default
export const guess_morphetic_in_C_major = guess_morphetic_in_c_major_default
export const guess_morphetic_in_c_major = guess_morphetic_in_c_major_default
export const nos_symbols_and_mode2key_name = nos_symbols_and_mode2key_name_default
export const ontime_of_bar_and_beat_number = ontime_of_bar_and_beat_number_default
export const pitch_and_octave2midi_note_morphetic_pair = pitch_and_octave2midi_note_morphetic_pair_default
export const remove_duplicate_clef_changes = remove_duplicate_clef_changes_default
export const resolve_expressions = resolve_expressions_default
export const row_of_max_ontime_leq_ontime_arg = row_of_max_ontime_leq_ontime_arg_default
export const row_of_max_bar_leq_bar_arg = row_of_max_bar_leq_bar_arg_default
export const sort_points_asc = sort_points_asc_default
export const sort_points_asc_by_id = sort_points_asc_by_id_default
export const staff_voice_xml2staff_voice_json = staff_voice_xml2staff_voice_json_default
export const comp_obj2note_point_set = comp_obj2note_point_set_default
export const split_point_set_by_staff = split_point_set_by_staff_default
export const copy_array_object = copy_array_object_default
export const count_rows = count_rows_default
export const tonic_pitch_closest = tonic_pitch_closest_default
export const fifth_steps_mode = fifth_steps_mode_default
export const aarden_key_profiles = aarden_key_profiles_default
export const krumhansl_and_kessler_key_profiles = krumhansl_and_kessler_key_profiles_default
export const chord_templates_pbmin7ths = chord_templates_pbmin7ths_default
export const chord_lookup_pbmin7ths = chord_lookup_pbmin7ths_default
export const connect_or_not = connect_or_not_default
export const find_segment_against_template = find_segment_against_template_default
export const HarmAn_forward = harman_forward_default
export const harman_forward = harman_forward_default
export const points_belonging_to_interval = points_belonging_to_interval_default
export const score_segment_against_template = score_segment_against_template_default
export const segment = segment_default
export const append_array = append_array_default
export const append_array_of_arrays = append_array_of_arrays_default
export const array_object_index_of = array_object_index_of_default
export const array_object_index_of_array = array_object_index_of_array_default
export const array_sum = array_sum_default
export const cyclically_permute_array_by = cyclically_permute_array_by_default
export const factorial = factorial_default
export const binomial_coefficient = binomial_coefficient_default
export const max_argmax = max_argmax_default
export const min_argmin = min_argmin_default
export const multiply_array_by_constant = multiply_array_by_constant_default
export const copy_point_set = copy_point_set_default
export const get_unique = get_unique_default
export const index_point_set = index_point_set_default
export const lex_more = lex_more_default
export const sort_rows = sort_rows_default
export const subtract_two_arrays = subtract_two_arrays_default
export const restrict_point_set_in_nth_to_xs = restrict_point_set_in_nth_to_xs_default
export const unique_rows = unique_rows_default
export const choose_one = choose_one_default
export const corr = corr_default
export const get_random_arbitrary = get_random_arbitrary_default
export const get_random_int = get_random_int_default
export const get_random_int_inclusive = get_random_int_inclusive_default
export const mean = mean_default
export const median = median_default
export const std = std_default
export const entropy = entropy_default
export const skewness = skewness_default
export const median_skewness = median_skewness_default
export const excess_kurtosis = excess_kurtosis_default
export const mod = mod_default
export const sample_without_replacement = sample_without_replacement_default
export const index_1st_element_gt = index_1st_element_gt_default
export const lex_less_or_equal_triple = lex_less_or_equal_triple_default
export const lex_less_or_equal = lex_less_or_equal_default
export const orthogonal_projection_not_unique_equalp = orthogonal_projection_not_unique_equalp_default
export const maximal_translatable_pattern = maximal_translatable_pattern_default
export const translators = translators_default
export const intersection = intersection_default
export const intersection_hash = intersection_hash_default
export const siar = siar_default
export const cardinality_score = cardinality_score_default
export const locations = locations_default
export const my_last_string = my_last_string_default
export const string_separated_string2array = string_separated_string2array_default
export const farey = farey_default
export const farey_quantise = farey_quantise_default
export const get_parameter_by_name = get_parameter_by_name_default
export const copy_to_clipboard = copy_to_clipboard_default
export const rand_alphanumeric = rand_alphanumeric_default
export const rand_5_bit = rand_5_bit_default
export const timelapse_object = timelapse_object_default

export default {
  append_ontimes_to_time_signatures,
  bar_and_beat_number_of_ontime,
  clef_sign_and_line2clef_name,
  convert_1st_bar2anacrusis_val,
  default_page_and_system_breaks,
  group_grace_by_contiguous_id,
  guess_morphetic,
  midi_note_morphetic_pair2pitch_and_octave,
  mnn2pitch_simple,
  guess_morphetic_in_c_major,
  guess_morphetic_in_C_major,
  nos_symbols_and_mode2key_name,
  ontime_of_bar_and_beat_number,
  pitch_and_octave2midi_note_morphetic_pair,
  remove_duplicate_clef_changes,
  resolve_expressions,
  row_of_max_ontime_leq_ontime_arg,
  row_of_max_bar_leq_bar_arg,
  sort_points_asc,
  sort_points_asc_by_id,
  staff_voice_xml2staff_voice_json,
  comp_obj2note_point_set,
  split_point_set_by_staff,
  copy_array_object,
  count_rows,
  tonic_pitch_closest,
  fifth_steps_mode,
  aarden_key_profiles,
  krumhansl_and_kessler_key_profiles,
  chord_templates_pbmin7ths,
  chord_lookup_pbmin7ths,
  connect_or_not,
  find_segment_against_template,
  harman_forward,
  HarmAn_forward,
  points_belonging_to_interval,
  score_segment_against_template,
  segment,
  append_array,
  append_array_of_arrays,
  array_object_index_of,
  array_object_index_of_array,
  array_sum,
  cyclically_permute_array_by,
  factorial,
  binomial_coefficient,
  max_argmax,
  min_argmin,
  multiply_array_by_constant,
  copy_point_set,
  get_unique,
  index_point_set,
  lex_more,
  sort_rows,
  subtract_two_arrays,
  restrict_point_set_in_nth_to_xs,
  unique_rows,
  choose_one,
  corr,
  get_random_arbitrary,
  get_random_int,
  get_random_int_inclusive,
  mean,
  median,
  std,
  entropy,
  skewness,
  median_skewness,
  excess_kurtosis,
  mod,
  sample_without_replacement,
  index_1st_element_gt,
  lex_less_or_equal_triple,
  lex_less_or_equal,
  orthogonal_projection_not_unique_equalp,
  maximal_translatable_pattern,
  translators,
  intersection,
  intersection_hash,
  siar,
  cardinality_score,
  locations,
  my_last_string,
  string_separated_string2array,
  farey,
  farey_quantise,
  get_parameter_by_name,
  copy_to_clipboard,
  rand_alphanumeric,
  rand_5_bit,
  timelapse_object
}
