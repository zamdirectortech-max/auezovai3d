import { NextResponse } from "next/server";
export async function POST(){return NextResponse.json({error:"Server TTS requires a configured provider. Browser SpeechSynthesis is active in demo mode.",demo:true},{status:501})}
