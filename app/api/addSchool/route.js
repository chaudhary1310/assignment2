import { connectDB } from "@/lib/mongodb";
import School from "@/models/School";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const file = formData.get("image");

    if (!file) {
      return new Response(JSON.stringify({ error: "Image is required" }), { status: 400 });
    }

    // ✅ Convert Blob -> Buffer for Node.js
    const buffer = Buffer.from(await file.arrayBuffer());

    // Save file to /public/schoolImages
    const filename = `${Date.now()}-${file.name}`;
    const filePath = `public/schoolImages/${filename}`;
    fs.writeFileSync(filePath, buffer);

    const imagePath = `/schoolImages/${filename}`;

    // Save record in DB
    const school = new School({
      name,
      address,
      city,
      state,
      contact,
      email_id,
      image: imagePath,
    });

    await school.save();

    return new Response(
      JSON.stringify({ message: "School added successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("❌ API Error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
