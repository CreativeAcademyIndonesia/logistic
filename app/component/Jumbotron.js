import imgjumb from "../../public/jumbotron.png"
export function Jumbotrons ({title}){
    return(
        
        <section 
        className='bg-center bg-no-repeat bg-gray-700/80 bg-blend-multiply' 
        style={{
            backgroundImage: `url(${imgjumb.src})`,
            height : "100%", 
            
          }}
          >
            <div className="mx-auto max-w-screen-xl text-cente p-10">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{title}</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl">Sistem Monitoring {title} PT. Hasfi Prima Logistik </p>
            </div>
        </section>

    )
}