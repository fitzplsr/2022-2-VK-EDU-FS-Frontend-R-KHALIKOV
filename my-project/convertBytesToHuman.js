/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (typeof bytes == 'number' && bytes > -1) {
    if (bytes < 2**10){
      bytes_b = bytes == Math.round(bytes) ? Math.round(bytes) : bytes
      result = String(bytes_b) + ' B'
    } else if (bytes < 2**20) {
      bytes_kb = (bytes / 2**10).toFixed(2)
      bytes_kb = bytes_kb == Math.round(bytes_kb) ? Math.round(bytes_kb) : bytes_kb
      result = String(bytes_kb) + ' KB' 
    } else {
      bytes_mb = (bytes / 2**20).toFixed(2)
      bytes_mb = bytes_mb == Math.round(bytes_mb) ? Math.round(bytes_mb) : bytes_mb
      result = String(bytes_mb) + ' MB'
    } 
  } else {
    result = NaN
  }
  return result
}
