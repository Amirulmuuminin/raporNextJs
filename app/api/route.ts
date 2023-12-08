import { type NextRequest } from "next/server";
import { generate } from "./generatedoc";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id)
    return new Response("id tidak ada", {
      status: 404,
    });

  const data = await generate(parseInt(id));

  // return new Response("sek sek", { status: 200 });

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Disposition": "attachment; filename=output.docx",
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
  });
}
