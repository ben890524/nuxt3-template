import { defineRule } from 'vee-validate';
// import { required, email, min } from '@vee-validate/rules';
import {
  required,
  email,
  alpha_num,
  min, // 驗證長度
  max, // 驗證長度
  confirmed,
  regex,
  is_not,
  length,
  numeric,
  integer,
  between,
  not_one_of,
  digits, // 整數幾位
  min_value, // 驗證數值
  max_value, // 驗證數值
} from '@vee-validate/rules';

export default defineNuxtPlugin((_) => {
  defineRule('integer', integer);
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
  defineRule('max', max);
  defineRule('max_value', max_value);
  defineRule('min_value', min_value);
  defineRule('regex', regex);
  defineRule('alpha_num', alpha_num);
  defineRule('confirmed', confirmed);
  defineRule('length', length);
  defineRule('is_not', is_not);
  defineRule('numeric', numeric);
  defineRule('between', between);
  defineRule('not_one_of', not_one_of);
  defineRule('digits', digits);
});
