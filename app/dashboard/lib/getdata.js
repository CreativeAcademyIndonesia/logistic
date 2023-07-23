export async function getData(url){
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_MYSQL_HOST}${url}`, { cache : "no-store" })
  return res.json();
}

