import prand from "pure-rand";

type ASCII_RANGE = [number, number];

const REDIRECT_CODE_LENGTH = 6;
const UPPER_CASE_ASCII_RANGE: ASCII_RANGE = [65, 90];
const LOWER_CASE_ASCII_RANGE: ASCII_RANGE = [97, 122];

const generateSeed = (url: string, date: Date): number => {
  const textEncoder = new TextEncoder();

  return (
    textEncoder.encode(url).reduce((prev, curr) => prev + curr) + date.getTime()
  );
};

const randomNumberFunctionFactory = (url: string, date: Date) => {
  const seed = generateSeed(url, date);
  const rng = prand.xoroshiro128plus(seed);

  return (min: number, max: number) => {
    const out = (rng.unsafeNext() >>> 0) / 0x100000000;
    return min + Math.floor(out * (max - min + 1));
  };
};

export const generateRedirectCode = (url: string, date: Date) => {
  const randomNumber = randomNumberFunctionFactory(url, date);
  const textDecoder = new TextDecoder();

  let charCodes = new Uint8Array(REDIRECT_CODE_LENGTH);
  for (let i = 0; i < REDIRECT_CODE_LENGTH; i++) {
    const randomBool = randomNumber(0, 1);
    const randomCharCode = randomBool
      ? randomNumber(...UPPER_CASE_ASCII_RANGE)
      : randomNumber(...LOWER_CASE_ASCII_RANGE);
    charCodes.set([randomCharCode], i);
  }

  return textDecoder.decode(charCodes);
};
