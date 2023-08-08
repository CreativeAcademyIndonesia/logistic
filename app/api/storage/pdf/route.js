import { NextResponse } from "next/server"
import fs from 'fs'
import path from 'path'

export async function GET(request, res) {
    const params = new URL(request.url)
    // let filename = params.searchParams.get('name')
    // const dirRelativeToPublicFolder = 'storage'
    // const dir = path.resolve('./public', dirRelativeToPublicFolder);

    // const filenames = fs.readdirSync(dir);
    // const data = fs.readFileSync(`${dir}/${filename}`)
    // const data = fs.readFileSync(`${dir}/f4613ff5-ebd9-4e23-9330-71aeb3c83bd3.pdf`)

    // console.log(res)
    return NextResponse.json({hallo : 'hallo'})
}
