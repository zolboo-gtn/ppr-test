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
            <div>dynamic1:</div>
          </div>
        }
      >
        <DynamicComponent ms={1000} />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <div>dynamic2:</div>
          </div>
        }
      >
        <DynamicComponent ms={2000} />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <div>dynamic3:</div>
          </div>
        }
      >
        <DynamicComponent ms={3000} />
      </Suspense>
    </main>
  );
};

export default HomePage;
