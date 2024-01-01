import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

function App() {
  const localizar = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-01-10T12:00:00").toDate(),
      end: dayjs("2024-01-10T13:00:00").toDate(),
      title: "Evento 1",
    },
  ];
  return (
    <div
      style={{
        height: "95vh",
        width: "70vw",
      }}
    >
      <Calendar localizer={localizar} events={events} />
    </div>
  );
}

export default App;
