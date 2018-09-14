var recipes = {sugar: '1 cup',
               butter: '1 stick',
               water: '1 cup'};
function updateObjectWithKeyandValue (object, key, value) {
  return Object.assign ({}, object, {[key]:value})
}
