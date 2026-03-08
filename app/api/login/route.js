import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection("admin").findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials" }),
        { status: 401 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Login successful" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}