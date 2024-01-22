import { unstable_noStore as noStore } from "next/cache";
import * as v from "valibot";

const Schema = v.object({
  date: v.string(),
  milliseconds_since_epoch: v.number(),
  time: v.string(),
});
type Schema = v.Output<typeof Schema>;
type Props = {
  ms: number;
};
export const DynamicComponent: React.FC<Props> = async ({ ms }) => {
  noStore();
  const data: Schema = await fetch("http://date.jsontest.com/").then(
    (response) => response.json(),
  );
  await new Promise((r) => setTimeout(r, ms));

  return (
    <div>
      <div>dynamic:</div>
      <div>{JSON.stringify(data)}</div>
      <div>{Date.now()}</div>
    </div>
  );
};
