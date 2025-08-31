import { useParams } from "react-router";

const TestDemo = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Welcome back!</h1> <p>Hello, {username}</p>
    </div>
  );
};

export default TestDemo;
