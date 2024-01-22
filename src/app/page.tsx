import { Suspense } from "react";

import { DynamicComponent } from "./dynamic_component";
import { StaticComponent } from "./static_component";

const HomePage: React.FC = async () => {
  return (
    <main>
      <StaticComponent />
      <Suspense
        fallback={
          <div>
            <div>dynamic:</div>
          </div>
        }
      >
        <DynamicComponent />
      </Suspense>
    </main>
  );
};

export default HomePage;
