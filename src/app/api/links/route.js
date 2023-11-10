import { NextResponse } from "next/server";
import isValidURL from "@/app/lib/isValidurl";

export async function POST(request){
    // Form DATA
    //API JSON POST DATA

    const contentType = await request.headers.get("content-type")
    if(contentType !== "application/json"){
        return NextResponse.json({"error":"solicitud invalida"},{status:400})
    }

    const data = await request.json()
    //const url = data && data.url ? data.url : null
    //const validURL = await isValidURL(url,["supaginaweb.net"])
    {/*if(!validURL){
        return NextResponse.json({"msg":`${url} no es valida`},{status:400})
    }*/}
    return NextResponse.json(data,{status:201})
}