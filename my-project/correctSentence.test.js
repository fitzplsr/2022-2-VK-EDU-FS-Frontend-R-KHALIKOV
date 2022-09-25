import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence(".")).toBe(".")
  expect(correctSentence(" ")).toBe(" .")
  expect(correctSentence("A")).toBe("A.")
})

test('returns empty line if line is empty', () => {
  expect(correctSentence("")).toBe("")
})