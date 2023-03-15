import "./styles.css";

export default function App() {
  return <Greeting name="Dusan" />;
}
function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name === "Dusan" ? "coach" : { name }} </h1>
    </div>
  );
}
