import { useCallback, useState } from "react";
import { User } from "./types";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import { getRandomNumber } from "./utils/randomNumber";
import { getUserById } from "./services/jsonplaceholder";
import { useThrottle } from "./hooks/useThrottle";

function App() {
  const [item, setItem] = useState<User | null>(null);

  const receiveUser = useCallback(async () => {
    const id = getRandomNumber(1, 10);
    const randomUser = await getUserById(id);
    if (randomUser) {
      setItem(randomUser);
    }
  }, []);

  const handleThrottledButtonClick = useThrottle(receiveUser, 3000);

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handleThrottledButtonClick} />
      {item && <UserInfo user={item} />}
    </div>
  );
}

export default App;
