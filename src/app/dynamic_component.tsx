import { unstable_noStore as noStore } from "next/cache";
import * as v from "valibot";

const Schema = v.object({
  date: v.string(),
  milliseconds_since_epoch: v.number(),
  time: v.string(),
});
type Schema = v.Output<typeof Schema>;
export const DynamicComponent: React.FC = async () => {
  noStore();
  const data: Schema = await fetch("http://date.jsontest.com/").then(
    (response) => response.json(),
  );

  return (
    <div>
      <div>dynamic:</div>
      <div>{JSON.stringify(data)}</div>
      <div>{Date.now()}</div>
    </div>
  );
};
