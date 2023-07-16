import add, { filterByKeyword, copy } from "./filterUtils.js";

const write = ["write", "any", "word", "quo"];
const result = filterByKeyword("quo", write);
const resultCopy = copy(write);
