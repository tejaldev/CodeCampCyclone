const Leaderboard = () => {
    // Dummy data for now
    const scores = [
      { name: "Alice", level: 3 },
      { name: "Bob", level: 2 },
      { name: "You", level: 1 },
    ];
  
    return (
      <div className="absolute top-4 right-4 bg-white shadow p-4 rounded max-w-xs">
        <h3 className="font-bold mb-2">🏆 Leaderboard</h3>
        <ul>
          {scores.map((s, i) => (
            <li key={i}>
              {s.name} - Level {s.level}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Leaderboard;
  