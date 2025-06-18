import { DecorateObjects } from 'addon.js';
import { decorateObjects as decorateObjectsTS } from 'decorateObject';

type InputRecord = Record<string, string | number>;

const generateInput = (size: number): InputRecord[] => {
  const input: InputRecord[] = [];
  for (let i = 0; i < size; i++) {
    input.push({
      dealer_id: i,
      dealer_name_first: `test${i}`,
      address_id: i + 1000,
      address_city: `city${i}`,
      address_zip_code: `${10000 + i}`,
      hudai_name_test: `example${i}`,
      medusa_name: `medusa${i}`,
      medusa_country_id: i + 10,
      medusa_city: `china${i}`,
      medusa_city_id: i + 100,
    });
  }
  return input;
};

const testImplementation = (fn: (input: InputRecord[]) => any, input: InputRecord[]): number => {
  const start = process.hrtime.bigint();
  fn(input);
  const end = process.hrtime.bigint();
  return Number(end - start) / 1e6; // Nanoseconds to milliseconds
};

const runTests = (size: number) => {
  const input = generateInput(size);
  const iterations = 10;

  // Warmup (to stabilize JIT and addon loading)
  for (let i = 0; i < 5; i++) {
    DecorateObjects(input);
    decorateObjectsTS(input);
  }

  let cppTotal = 0;
  let tsTotal = 0;

  for (let i = 0; i < iterations; i++) {
    cppTotal += testImplementation(DecorateObjects, input);
    tsTotal += testImplementation(decorateObjectsTS, input);
  }

  console.log(`Input size: ${size}`);
  console.log(`C++ DecorateObjects: ${cppTotal / iterations} ms (average over ${iterations} runs)`);
  console.log(`TS decorateObjects: ${tsTotal / iterations} ms (average over ${iterations} runs)`);
  console.log(`C++ is ${(tsTotal / cppTotal).toFixed(2)}x ${tsTotal < cppTotal ? 'slower' : 'faster'} than TS\n`);
};

// Test multiple input sizes
[1000, 10000, 100000].forEach(runTests);