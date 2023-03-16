export default function Form() {
  return (
    <form className="entry_form">
      <label htmlFor="motto">Motto</label>
      <input type="text" id="motto" />
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes" cols="20" rows="5"></textarea>
      <button type="submit" className="submit">
        Create
      </button>
    </form>
  );
}
