const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';

export function createRequestTypes(base) {
  return [REQUEST, SUCCESS].reduce(
  (prev, type) => ({ ...prev, [type]: `${base}_${type}` }),
  {}
  );
}

export function action(type, payload) {
  return { type, payload };
}
