export async function getData(url){
  try{
    // const res = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}${url}`, { revalidate: 3600 })
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}${url}`, { cache : "no-store" })
    return res.json();
  }catch{
    return res = [{}]
  }
}

