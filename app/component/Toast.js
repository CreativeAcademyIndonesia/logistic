export default function Toast({message}){
    return(
        <div className="max-w-xs bg-gray-800 text-sm text-white rounded-md shadow-lg dark:bg-gray-900 absolute top-0 left-0" role="alert">
            <div className="flex p-4">
                {message}
            </div>
        </div>
    )
}