export default function nonUniqueElements(data) {
  data.push('')
  data.unshift('')
  for (let i = 0; i < data.length; i++) {
    if ((data.indexOf(data[i], i+1) < 0) && (data.lastIndexOf(data[i], i-1) < 0)) {
      data.splice(i, 1)
      i-=1
    }
  } 
  data.splice(0, 1)
  data.splice(-1, 1)
  return data
}
