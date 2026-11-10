import { NextResponse } from "next/server";
function authorized(req:Request){return Boolean(process.env.ADMIN_TOKEN)&&req.headers.get("authorization")===`Bearer ${process.env.ADMIN_TOKEN}`}
export function GET(req:Request){if(!authorized(req))return NextResponse.json({error:"Unauthorized"},{status:401});return NextResponse.json({documents:[],demo:true})}
export async function POST(req:Request){if(!authorized(req))return NextResponse.json({error:"Unauthorized"},{status:401});const size=Number(req.headers.get("content-length")||0);if(size>5_000_000)return NextResponse.json({error:"File too large"},{status:413});return NextResponse.json({error:"Configure DATABASE_URL and vector storage to upload documents."},{status:501})}
