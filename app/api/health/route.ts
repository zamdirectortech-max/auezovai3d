import { NextResponse } from "next/server";
export function GET(){return NextResponse.json({status:"ok",mode:process.env.DEMO_MODE!=="false"?"demo":"live",version:"0.1.0"})}
