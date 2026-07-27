import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_API_URL =
  "https://api.ayatiworks.com/api/v1/public/vels-plus/admission_enquiry/records";

const API_KEY =
  "c7161b606e6aa8479d3d52640e17c5c95b83dcf576e39cb5fc57dba7ef7a7e39";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const externalRes = await fetch(EXTERNAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await externalRes.json();

    return NextResponse.json(data, { status: externalRes.status });
  } catch (error) {
    console.error("Admission enquiry proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
