import Adhar from "./components/AdharData/Adhar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Adhar />
    </div>
  );
};

export default App;
