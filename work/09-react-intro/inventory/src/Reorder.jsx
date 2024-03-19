import './Reorder.css'; // Assuming custom CSS for animation

function Reorder({ onReorder }) {
  return (
    <div className="reorder">
      <button onClick={onReorder}>Reorder</button>
    </div>
  );
}

export default Reorder;