import { cookies } from "next/headers";

import SkinCareDiary from "@/components/pages/SkinCareDiary";
import WriteHeader from "@/components/layout/WriteHeader";
import WriteNavBar from "@/components/layout/WirteNavBar";
import { getRecentInfo } from "@/services/getRecentInfo";

export default async function Page() {
  const authorization = cookies().get("authorization")?.value;
  const data = await getRecentInfo();
  return (
    <main>
      <WriteHeader />
      <SkinCareDiary authorization={authorization} data={data} />
      {/* <WriteNavBar /> */}
    </main>
  );
}
