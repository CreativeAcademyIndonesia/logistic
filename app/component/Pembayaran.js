export default function Pembayaran() {
    return (
        <section className="py-16 bg-white sm:py-32 lg:py-40" id="pembayaran">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-blue-primary sm:text-4xl lg:text-5xl">Mekanisme Pembayaran</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Silahkan sesuaikan account bank yang akan digunakan sesuai dengan kebutuhan anda</p>
                </div>
  
                <div className="relative mt-12 lg:mt-20 pb-5">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>
  
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-1 2">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-blue-primary/80 md:mt-10">VIA ATM</h3>
                            <ol className=' text-base text-gray-600 mt-4'>
                              <li>- Masukkan kartu ATM dan PIN BCA Anda</li>
                              <li>- Pilih menu Transaksi Lainnya</li>
                              <li>- Pilih menu Transfer</li>
                              <li>- Pilih menu Ke Rek BCA Virtual Account</li>
                              <li>- Masukkan Kode Bank + Nomor Pelanggan Anda</li>
                              <li>- 08458 = PT. Saranabhakti Timur,</li>
                              <li>- Contoh : 08458 xxxxxx</li>
                              <li>- Masukkan nominal tagihan</li>
                              <li>- Ikuti instruksi untuk menyelesaikan transaksi</li>
                            </ol>
                          </div>
  
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-blue-primary/80 md:mt-10">VIA MOBILE BANKING</h3>
                            <ol className=' text-base text-gray-600 mt-4'>
                              <li>- Login ke akun m-BCA Anda</li>
                              <li>- Pilih menu m-Transfer</li>
                              <li>- Pilih BCA Virtual Account</li>
                              <li>- Masukkan Kode Bank + Nomor Pelanggan Anda</li>
                              <li>- 08458 = PT. Saranabhakti Timur,</li>
                              <li>- Contoh : 08458 xxxxxx</li>
                              <li>- Masukkan nominal tagihan</li>
                              <li>- Ikuti instruksi untuk menyelesaikan transaksi</li>
                            </ol>
                        </div>
  
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-blue-primary/80 md:mt-10">VIA INTERNET BANKING</h3>
                            <ol className=' text-base text-gray-600 mt-4'>
                              <li>- Login ke akun Klik BCA Anda</li>
                              <li>- Pilih menu Transfer Dana</li>
                              <li>- Pilih Transfer ke BCA Virtual Account</li>
                              <li>- Masukkan Kode Bank + Nomor Pelanggan Anda</li>
                              <li>- 08458 = PT. Saranabhakti Timur,</li>
                              <li>- Contoh : 08458 xxxxxx</li>
                              <li>- Masukkan nominal tagihan</li>
                              <li>- Ikuti instruksi untuk menyelesaikan transaksi</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}