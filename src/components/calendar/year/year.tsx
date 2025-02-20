// http://api.github.com/repos/facebook/react/stats/commit_activity

async function getCommitHistory() {
  const response = await fetch(
    "http://api.github.com/repos/facebook/react/stats/commit_activity"
  );
  const data = await response.json();

  const a = data as { total: number; week: number; days: number[] }[];
  const b = a.map(({ week, days }) => ({
    id: week,
    date: new Date(week * 1000),
    days: days.map((contributions, index) => {
      const date = new Date(
        week * 1000 + index * 1000 * 60 * 60 * 24 * (index + 1)
      );
      date.setDate(date.getDate() - 1);
      return {
        date,
        contributions,
      };
    }),
  }));
  return b;
}

async function Year() {
  const weeks = await getCommitHistory();

  return (
    <section
      className="grid gap-2 grid-flow-col"
      style={{
        gridTemplateColumns: `repeat(${weeks.length}, auto)`,
        gridTemplateRows: `repeat(${weeks[0].days.length + 1}, auto)`,
      }}
    >
      <span />
      {weeks[0].days.map((day) => (
        <span key={day.date.toDateString()} className="even:invisible w-12">
          {day.date.toLocaleDateString("default", {
            weekday: "short",
          })}
        </span>
      ))}

      {weeks.map((week, weekIndex) => [
        <span
          key={week.id}
          className={
            week.date.getMonth() === weeks[weekIndex - 1]?.date.getMonth()
              ? `invisible`
              : ""
          }
        >
          {week.date.toLocaleDateString("default", {
            month: "short",
          })}
        </span>,
        week.days.map((day) => (
          <span
            key={day.date.toISOString()}
            className="h-8 w-8"
            title={`${
              day.contributions
            } commits on ${day.date.toLocaleDateString()}`}
            style={{
              backgroundColor:
                day.contributions === 0
                  ? "#fff"
                  : day.contributions <= 12
                  ? "green"
                  : day.contributions <= 41
                  ? "yellow"
                  : day.contributions <= 62
                  ? "orange"
                  : "red",
            }}
          ></span>
        )),
      ])}
    </section>
  );
}

export default Year;
