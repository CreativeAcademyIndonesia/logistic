export function filterData(data, month){
  return data.filter((d)=> new Date(d.tanggal).getMonth()+1 == month )
}
  
  