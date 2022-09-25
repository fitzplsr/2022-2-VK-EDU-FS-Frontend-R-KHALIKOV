export default function correctSentence(text) {
  if (!text) return text
  var text_upcase = text[0].toUpperCase() + text.slice(1)
  if (text.slice(-1) != '.'){
    text_upcase += '.'
  } 
  text = text_upcase
  return text;
}
