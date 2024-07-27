import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getDiaryList() {
  const authorization = cookies().get("authorization")?.value;
  console.log(authorization);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/diary/list`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }
  );

  if (!res.ok) {
    redirect("/login");
  }

  const data = await res.json();
  // console.log(data.data);
  return data.data;
}
