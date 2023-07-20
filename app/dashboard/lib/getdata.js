export async function getData(url){
  const res = await fetch(`http://${process.env.MYSQL_HOST}:3000${url}`, { cache : "no-store" })
  return res.json();
}

