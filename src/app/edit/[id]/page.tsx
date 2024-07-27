import SkinCareDiary from "@/components/pages/SkinCareDiary";
import WriteNavBar from "@/components/layout/WirteNavBar";
import { getDiaryInfo } from "@/services/getDiaryInfo";
import Edit from "@/components/pages/Edit";
import { cookies } from "next/headers";
import EditHeader from "@/components/layout/EditHeader";

export default async function Page(props: any) {
  const authorization = cookies().get("authorization")?.value;
  const pathName = props.params.id;
  const data = await getDiaryInfo(pathName);
  console.log(data);
  return (
    <main>
      <EditHeader />
      <Edit data={data} authorization={authorization} pathName={pathName} />
      {/* <WriteNavBar /> */}
    </main>
  );
}
