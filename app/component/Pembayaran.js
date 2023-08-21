import service from '../../public/illustration/service.png'
import shipping from '../../public/illustration/shipping.png'
import trucking from '../../public/illustration/trucking.png'
import Image from 'next/image';
export default function Pembayaran() {
    return (
        <section className="py-16 bg-white sm:py-32 lg:py-40" id="services">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-blue-primary sm:text-4xl lg:text-5xl">Service</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Solusi Profesional untuk pengurusan pengiriman/penerimaan barang melalui transportasi darat dan laut</p>
                </div>
  
                <div className="relative mt-12 lg:mt-16 pb-5">
                    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 items-center px-4 justify-center">
                        <div className='flex justify-center'>
                            <div>
                                <Image
                                    src={service}
                                    width='100%'
                                    height='auto'
                                    alt='PT. Hasfi Prima Logistik'
                                    className='w-full'
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className=" text-xl font-semibold leading-tight text-blue-primary/80 ">PROSES AWAL</h3>
                            <ol className=' text-base text-gray-600 mt-4 list-disc text-justify'>
                              <li>Customer dapat menghubungi Hasfi Prima Logistik via telephone,email,atau via whatsapp untuk melakukan booking order</li>
                              <li>Jika customer baru maka customer service akan menghubungi untuk meminta kelengkapan data untuk kelengkapan di sistem kami</li>
                              <li>Setelah data sudah lengkap untuk customer baru, akan dilakukan terjadi kesepakatan harga untuk biaya pengiriman, untuk customer existing, dapat memilih master kontrak yang ada</li>
                              <li>Customer akan memberikan informasi order via email atau whatsapp untuk kami proses lebih lanjut</li>
                              <li>Konfirmasi order akan kami berikan setelah data order berhasil kita dapatkan untuk dilanjut ke proses berikutnya</li>
                            </ol>
                        </div>
                    </div>
                    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 items-center px-4 justify-center">
                        <div className='order-2 sm:order-1'>
                            <h3 className=" text-xl font-semibold leading-tight text-blue-primary/80 ">TAHAP TRUCKING</h3>
                            <ol className=' text-base text-gray-600 mt-4 list-disc text-justify'>
                              <li>Team operation akan mengiriman dokumen Packing List ke customer untuk validasi order yang sudah siap kami kirimkan</li>
                              <li>HASFI memberikan layanan Trucking di area Ternate, Tobelo, Weda, Sofifi, dan Jailolo untuk pengiriman dengan skema team HASFI akan mengirimakan armada truck untuk pick up muatan</li>
                              <li>Proses pick up pengambilan muatan juga kami monitor dengan System Tracking yang terdapat pada website kami.</li>
                            </ol>
                        </div>
                        <div className='flex justify-center order-1 sm:order-2'>
                            <div>
                                <Image
                                    src={trucking}
                                    width='100%'
                                    height='auto'
                                    alt='PT. Hasfi Prima Logistik'
                                    className='w-full'
                                />
                            </div>
                        </div>

                    </div>
                    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 items-center px-4 justify-center">
                        <div className='flex justify-center'>
                            <div>
                                <Image
                                    src={shipping}
                                    width='100%'
                                    height='auto'
                                    alt='PT. Hasfi Prima Logistik'
                                    className='w-full'
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className=" text-xl font-semibold leading-tight text-blue-primary/80 ">TAHAP SHIPPING</h3>
                            <p className=' text-base text-gray-600 mt-4 list-disc text-justify'>
                            Kami bekerja sama dengan beberapa pelayaran yang memberikan layanan terbaik dan terus menjalin komunikasi yang baik. Posisi container yang tiba di CY Pelabuhan terupdate pada website kami. Kami juga mengintegrasikan program dengan pelayaran untuk mendapatkan update ATD / ATD dalam setiap kapal. Informasi dari pelayaran akan kami update ke customer
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="relative mt-12 lg:mt-20 pb-5">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>
  
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-1 2">
                        <div className="px-6">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-blue-primary/80 md:mt-10">PROSES AWAL</h3>
                            <ol className=' text-base text-gray-600 mt-4 list-disc text-justify'>
                              <li>Customer dapat menghubungi Hasfi Prima Logistik via telephone,email,atau via whatsapp untuk melakukan booking order</li>
                              <li>Jika customer baru maka customer service akan menghubungi untuk meminta kelengkapan data untuk kelengkapan di sistem kami</li>
                              <li>Setelah data sudah lengkap untuk customer baru, akan dilakukan terjadi kesepakatan harga untuk biaya pengiriman, untuk customer existing, dapat memilih master kontrak yang ada</li>
                              <li>Customer akan memberikan informasi order via email atau whatsapp untuk kami proses lebih lanjut</li>
                              <li>Konfirmasi order akan kami berikan setelah data order berhasil kita dapatkan untuk dilanjut ke proses berikutnya</li>
                            </ol>
                          </div>
  
                        <div className="px-6">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-blue-primary/80 md:mt-10">TAHAP TRUCKING </h3>
                            <ol className=' text-base text-gray-600 mt-4 list-disc text-justify'>
                              <li>Team operation akan mengiriman dokumen Packing List ke customer untuk validasi order yang sudah siap kami kirimkan</li>
                              <li>HASFI memberikan layanan Trucking di area Ternate, Tobelo, Weda, Sofifi, dan Jailolo untuk pengiriman dengan skema team HASFI akan mengirimakan armada truck untuk pick up muatan</li>
                              <li>Proses pick up pengambilan muatan juga kami monitor dengan System Tracking yang terdapat pada website kami.</li>
                            </ol>
                        </div>
  
                        <div className="px-6">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-blue-primary/80 md:mt-10">TAHAP SHIPPING</h3>
                            <ol className=' text-base text-gray-600 mt-4 text-justify'>
                              <li>Kami bekerja sama dengan beberapa pelayaran yang memberikan layanan terbaik dan terus menjalin komunikasi yang baik. Posisi container yang tiba di CY Pelabuhan terupdate pada website kami. Kami juga mengintegrasikan program dengan pelayaran untuk mendapatkan update ATD / ATD dalam setiap kapal. Informasi dari pelayaran akan kami update ke customer</li>
                            </ol>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    );
}