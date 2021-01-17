import { helper } from '@ember/component/helper';

export function equal(params/*, hash*/) {
  let [source, target] = params;
  return source === target;
}

export default helper(equal);
