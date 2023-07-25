import { query } from "../../database/db_connection"
import { NextResponse } from "next/server"

export async function DELETE(request, {params}) {
  const idPenerimaan  = params.snug
    const deletePenerimaan = await query({
      query : `DELETE FROM penerimaan WHERE ID_Penerimaan='${idPenerimaan}'`, 
      values : []
    })

    let message = ''
    if(deletePenerimaan.affectedRows > 0 ) {
        message = 'SUCCESS'
    }else{
        message = 'ERROR'
    }
  return NextResponse.json({message})
}

export async function PATCH(request, {params}){
  const {namaPengirim, noHpPengirim, noKtpPengirim, noNpwpPengirim, jenisBarang, layanan, alamatPengirim, from, to, alamatTujuan, namaPenerima, noHpPenerima, noKtpPenerima, shipingLine, namaKapal, noContainer, noBl} = await request.json()
  const idPenerimaan  = params.snug
  const updatePenerimaan = await query({
    query : `UPDATE penerimaan SET 
    Nama_Pengirim = '${namaPengirim}',
    No_Hp_Pengirim = '${noHpPengirim}',
    No_Ktp_Pengirim = '${noKtpPengirim}',
    No_Npwp_Pengirim = '${noNpwpPengirim}',
    Jenis_Barang = '${jenisBarang}',
    Layanan = '${layanan}',
    Alamat_Pengirim = '${alamatPengirim}',
    dari = '${from}',
    ke = '${to}',
    Alamat_Tujuan = '${alamatTujuan}',
    Nama_Penerima = '${namaPenerima}',
    No_Hp_Penerima = '${noHpPenerima}',
    No_Ktp_Penerima = '${noKtpPenerima}',
    Shipping_Line = '${shipingLine}',
    Nama_Kapal = '${namaKapal}',
    No_Container = '${noContainer}',
    No_Bl = '${noBl}'
    WHERE ID_Penerimaan = ${idPenerimaan}`,
    values : []
  })

  let message = ''
  if(updatePenerimaan.affectedRows > 0 ) {
      message = 'SUCCESS'
  }else{
      message = 'ERROR'
  }
  return NextResponse.json({message})
}