export async function getData(url){
  try{
    const res = await fetch(`${process.env.BASE_URL}${url}`, { cache : "no-store" })
    return res.json();
  }catch{
    const res = [{}]
    return res 
  }
}

