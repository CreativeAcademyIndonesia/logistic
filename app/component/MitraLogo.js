import Image from "next/image"
import indomaret from '../../public/mitra/indomaret.png'
import logospil from '../../public/mitra/logospil.png'
import sarijaya from '../../public/mitra/sarijaya.png'
import tanto from '../../public/mitra/tanto.png'
import temas from '../../public/mitra/temas.png'

export default function MitraLogo(){
    return(
        <div className="bg-blue-primary py-16 sm:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold leading-tight text-white/80 text-center sm:text-4xl lg:text-5xl">Mitra Kami</h2>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-6 items-center mt-16 justify-items-center">
                    <div>
                        <Image 
                            src={indomaret}
                            alt="Logo indomaret"
                            className=""
                        />
                    </div>
                    <div>
                        <Image 
                            src={logospil}
                            alt="Logo logospil"
                            className=""
                        />
                    </div>
                    <div>
                        <Image 
                            src={sarijaya}
                            alt="Logo sarijaya"
                            className=""
                        />
                    </div>
                    <div>
                        <Image 
                            src={tanto}
                            alt="Logo tanto"
                            className=""
                        />
                    </div>
                    <div >
                        <Image 
                            src={temas}
                            alt="Logo temas"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}