// import { NavBudgetsIcon } from "./assets/icons";

import { Icon, Image, Avatar } from './components/ui';
import authenticationImage from './assets/images/illustration-authentication.svg';

function App(): React.ReactElement {
  return (
    <main>
      <h1>React App</h1>
      <div>
        <Icon name="bill-paid" size={16} />
      </div>
      <div>
        <Image
          src={authenticationImage}
          alt="Authentication"
          width={360}
          height={720}
        />
      </div>
      <br />
      <div>
        <Avatar
          name="ella-phillip"
          user="Ella Phillips"
          shape="circle"
          size="sm"
        />
      </div>
    </main>
  );
}

export default App;
