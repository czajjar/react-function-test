import "./App.css";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const users = [
    { name: "John", age: 22 },
    { name: "Max", age: 43 },
  ];
  return (
    <>
      <section className="users-form">
        <UserForm />
      </section>
      <section className="users">
        <UserList users={users} />
      </section>
    </>
  );
}

export default App;
