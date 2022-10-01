export default function convertBytesToHuman(bytes) {
  var result = false
  if (typeof bytes == 'number' && bytes > -1) {
    if (bytes < 2**10){
      result = operation(bytes, 0 , ' B')
    } else if (bytes < 2**20) {
      result = operation(bytes, 10 , ' KB')
    } else if (bytes < 2**30){
      result = operation(bytes, 20 , ' MB')
    } else {
      result = operation(bytes, 30 , ' GB')
    }
  } 
  return result
}

function operation(bytes, n, unit){
  var bytes_f = 0
  bytes_f = (bytes / 2**n).toFixed(2)
  bytes_f = bytes_f == Math.round(bytes_f) ? Math.round(bytes_f) : bytes_f
  return String(bytes_f) + unit
}
