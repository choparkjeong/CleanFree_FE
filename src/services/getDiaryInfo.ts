import { cookies } from "next/headers";

export async function getDiaryInfo(pathName: any) {
  const authorization = cookies().get("authorization")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/diary/${pathName}`,
    {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }
  );

  const data = await res.json();
  console.log(data);
  return data.data;
}
