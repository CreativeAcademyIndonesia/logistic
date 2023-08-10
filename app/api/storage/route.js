import { NextResponse } from "next/server"
import fs from 'fs'
import path from 'path'

export async function GET(request) {
    const params = new URL(request.url)
    let filename = params.searchParams.get('name')
    const dirRelativeToPublicFolder = 'storage'
    const dir = path.resolve('./public', dirRelativeToPublicFolder)
    let data = {} 
    if(data != '' || data){
        data = fs.readFileSync(`${dir}/${filename}`)
    }
    console.log(`${dir}/${filename}`)
    return NextResponse.json(data)
}
