import Image from "next/image"
import visi from "../../public/visi.PNG"

export default function VisiMisi(){
    return(
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                    <div className="">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Visi</h2>
                            <p className="mt-6 text-base text-gray-600">Visi kami adalah menjadi penyedia jasa pengurusan transportasi terkemuka yang
                            diandalkan oleh pelanggan kami. Kami bertujuan untuk meningkatkan konektivitas dan
                            efisiensi dalam industri transportasi </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Misi</h2>
                            <ol className="mt-6 text-base text-gray-600 list-decimal">
                                <li className="ml-3">Menyediakan solusi transportasi yang aman, nyaman, dan efisien kepada pelanggan kami.</li>
                                <li className="ml-3">Mengoptimalkan penggunaan teknologi untuk meningkatkan pengalaman pelanggan dan efisiensi operasional.</li>
                                <li className="ml-3">Menjalin kemitraan yang kuat dengan mitra transportasi dan pemasok untuk memberikan layanan yang terbaik.</li>
                                <li className="ml-3">Mengembangkan tim yang terampil, berdedikasi, dan profesional dalam memberikan pelayanan yang unggul.</li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <Image src={visi} className="rounded-3xl" alt="logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}