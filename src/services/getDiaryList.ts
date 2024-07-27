import { cookies } from "next/headers";

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

  const data = await res.json();
  console.log(data.data);
  return data.data;
}
