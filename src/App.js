import { GroupProvider } from "./Providers/Groups";
import { HabitsProvider } from "./Providers/Habits";
import { LoginProvider } from "./Providers/Login";

import Routes from "./Routes/index";
import Global from "./Styles/Global";

function App() {
  return (
    <div className="App">
      <div>
        <LoginProvider>
          <HabitsProvider>
            <GroupProvider>
              <Routes />
            </GroupProvider>
          </HabitsProvider>
        </LoginProvider>
        <Global />
      </div>
    </div>
  );
}

export default App;
