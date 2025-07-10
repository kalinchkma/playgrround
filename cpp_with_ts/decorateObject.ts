type InputRecord = Record<string, string | number>;
type OutputRecord = Record<string, Record<string, string | number>>;

export function decorateObjects(input: InputRecord[]): OutputRecord {
  if (!Array.isArray(input)) {
    throw new TypeError('Expected an array as the first argument');
  }

  const output: OutputRecord = {};
  const groupObjects = new Map<string, Record<string, string | number>>();

  for (const item of input) {
    if (typeof item !== 'object' || item === null) {
      continue;
    }

    for (const [key, value] of Object.entries(item)) {
      const underscorePos = key.indexOf('_');
      if (underscorePos === -1) {
        continue;
      }

      const groupKey = key.substring(0, underscorePos);
      const propKey = key.substring(underscorePos + 1);

      if (!groupObjects.has(groupKey)) {
        groupObjects.set(groupKey, {});
      }

      groupObjects.get(groupKey)![propKey] = value;
    }
  }

  for (const [groupKey, props] of groupObjects) {
    output[groupKey] = props;
  }

  return output;
}