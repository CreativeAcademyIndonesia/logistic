import getStorage from "../dashboard/lib/getStorage"

export default function StorageImage(){
    const base64 = getStorage()
    console.log(base64)
    // return(
    //     <Image
    //         src={`data:image/jpg;base64,${base64}`}
    //         className='w-full'
    //         alt="My Image" width={300} height={200}
    //         />
    // )
}