import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields required" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection("admin").findOne({ email });

    if (user) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("admin").insertOne({
      name,
      email,
      password: hashedPassword
    });

    return new Response(
      JSON.stringify({ message: "Signup successful" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}