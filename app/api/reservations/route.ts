import { NextResponse } from "next/server";

// Mock data source for the challenge. Note that one `price` is a string
// on purpose — part of what the candidate needs to notice.
export async function GET() {
  return NextResponse.json([
    { id: "r1", location: "Downtown Garage", price: 18 },
    { id: "r2", location: "Airport Lot B", price: "22" },
    { id: "r3", location: "Stadium Deck", price: 30 },
  ]);
}
