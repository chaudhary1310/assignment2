import { connectDB } from "@/lib/mongodb";
import School from "@/models/School";

export async function GET() {
  try {
    await connectDB();
    const schools = await School.find();
    return new Response(JSON.stringify(schools), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
