import Entries from "../Entries/entries";
import Form from "../Form";

export default function Main() {
  return (
    <main className="main">
      <h2 className="h2-title">NEW ENTRY</h2>
      <Form />

      <div className="tabs">
        <span>All Entries</span>
        <span>Favourites</span>
      </div>

      <Entries />
      <Entries />
      <Entries />
      <Entries />
    </main>
  );
}
