
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";
async function getProducts(){
  const res = await fetch(`http://${process.env.MYSQL_HOST}:3000/api/products`, { cache : "no-store" })
  return res.json();
}

export default async function Home() {
  const products = await getProducts()
  return (
    <main className="min-h-screen bg-white border text-black">
      Cart
    </main>
  )
}
