import { NextResponse } from "next/server";
export function GET(req:Request){const q=new URL(req.url).searchParams.get("q")?.slice(0,200)||"";return NextResponse.json({query:q,results:[],demo:true,message:"Connect PostgreSQL + pgvector to enable semantic search."})}
