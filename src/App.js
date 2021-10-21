import { GroupProvider } from "./Providers/Groups";
import { HabitsProvider } from "./Providers/Habits";
import { LoginProvider } from "./Providers/Login";
import { SpecificGroupProvider } from "./Providers/SpecificGroup";
import { SubscriptionProvider } from "./Providers/Subscripitons";

import Routes from "./Routes/index";
import Global from "./Styles/Global";

function App() {
  return (
    <div className="App">
      <div>
        <LoginProvider>
          <HabitsProvider>
            <SubscriptionProvider>
              <GroupProvider>
                <SpecificGroupProvider>
                  <Routes />
                </SpecificGroupProvider>
              </GroupProvider>
            </SubscriptionProvider>
          </HabitsProvider>
        </LoginProvider>

        <Global />
      </div>
    </div>
  );
}

export default App;
