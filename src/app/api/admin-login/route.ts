import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Create a JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: "7d" });

    // Set HTTP-only cookie
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}