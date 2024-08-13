"use server";

export async function postCountData(props: any) {
  console.log(props);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/access`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ip: props.ip,
        service: props.service,
      }),
    }
  );

  if (res.ok) {
    return;
  }
}
