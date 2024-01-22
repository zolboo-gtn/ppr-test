import * as v from "valibot";

const Schema = v.object({
  date: v.string(),
  milliseconds_since_epoch: v.number(),
  time: v.string(),
});
type Schema = v.Output<typeof Schema>;
export const StaticComponent: React.FC = async () => {
  const data: Schema = await fetch("http://date.jsontest.com/").then(
    (response) => response.json(),
  );

  return (
    <div>
      <div>static:</div>
      <div>{JSON.stringify(data)}</div>
      <div>{Date.now()}</div>
    </div>
  );
};
