import { LineChart } from "./chart/linechart";
import Mitradonut from "./chart/mitradout";
import { Yearlychart } from "./chart/yearlycart";

async function getData(url){
  try{
    const res = await fetch(`${process.env.BASE_URL}${url}`, { cache : "no-store" })
    return res.json();
  }catch{
    const res = []
    return res 
  }
}


export default async function Home() {
  // Yearly
  const pengiriman = await getData(`/api/chart/recap?t=pengiriman&c=Tgl_Stuffing`)
  const penerimaan = await getData(`/api/chart/recap?t=penerimaan&c=Tgl_Stripping`)
  const armada = await getData(`/api/chart/recap?t=armada&c=tanggal`)
  
  // Recap Pengiriman
  const mitrapengiriman = await getData(`/api/chart/transaksi?t=pengiriman&count=Shipping_Line&c=Tgl_Stuffing`)
  const kapalpengiriman = await getData(`/api/chart/transaksi?t=pengiriman&count=Nama_Kapal&c=Tgl_Stuffing`)
  const namapengiriman = await getData(`/api/chart/transaksi?t=pengiriman&count=Nama_Pengirim&c=Tgl_Stuffing`)

  // Recap Penerimaan 
  const mitrapenerimaan = await getData(`/api/chart/transaksi?t=penerimaan&count=Shipping_Line&c=Tgl_Stripping`)
  const kapalpenerimaan = await getData(`/api/chart/transaksi?t=penerimaan&count=Nama_Kapal&c=Tgl_Stripping`)
  const namapenerimaan = await getData(`/api/chart/transaksi?t=penerimaan&count=Nama_Penerima&c=Tgl_Stripping`)

  return (
    <main className="min-h-screen bg-white text-black">
      <div className='grid md:grid-cols-6 gap-4'>
        <div className='col-span-6 md:col-span-4'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <Yearlychart datapengiriman={pengiriman} datapenerimaan={penerimaan} armada={armada} />
          </div>
        </div>
        <div className='col-span-6 md:col-span-2'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <Mitradonut mitrapengiriman={mitrapengiriman}/>
          </div>
        </div>
        
        <div className='col-span-6 md:col-span-3'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <LineChart rawdata={mitrapengiriman} countby="Shipping_Line" headername="Transaksi Mitra (Pengiriman)"/>
          </div>
        </div>
        <div className='col-span-6 md:col-span-3'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <LineChart rawdata={kapalpengiriman} countby="Nama_Kapal" headername="Analytics Nama Kapal (Pengiriman)"/>
          </div>
        </div>
        <div className='col-span-6 md:col-span-3'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <LineChart rawdata={namapengiriman} countby="Nama_Pengirim" headername="Analytics Nama Pengirim (Pengiriman)"/>
          </div>
        </div>

        <div className='col-span-6 md:col-span-3'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <LineChart rawdata={mitrapenerimaan} countby="Shipping_Line" headername="Transaksi Mitra (Penerimaan)"/>
          </div>
        </div>
        <div className='col-span-6 md:col-span-3'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <LineChart rawdata={kapalpenerimaan} countby="Nama_Kapal" headername="Analytics Nama Kapal (Penerimaan)"/>
          </div>
        </div>
        <div className='col-span-6 md:col-span-3'>
          <div className="border rounded-2xl overflow-hidden p-4">
            <LineChart rawdata={namapenerimaan} countby="Nama_Penerima" headername="Analytics Nama Penerima (Penerimaan)"/>
          </div>
        </div>

      </div>
    </main>
  )
}
