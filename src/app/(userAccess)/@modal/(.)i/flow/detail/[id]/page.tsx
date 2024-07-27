import Detail from "@/components/pages/Detail";
import { getDiaryInfo } from "@/services/getDiaryInfo";

export default async function Page(props: any) {
  const pathName = props.params.id;
  const data = await getDiaryInfo(pathName);
  return (
    <>
      <Detail data={data} pathName={pathName} />
    </>
  );
}
