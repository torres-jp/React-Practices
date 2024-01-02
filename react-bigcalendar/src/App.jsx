import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { CiCalendarDate } from "react-icons/ci";
import "dayjs/locale/es";
import "./App.css";

dayjs.locale("es");

function App() {
  const localizar = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-01-10T09:00:00").toDate(),
      end: dayjs("2024-01-10T10:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 20,
      },
    },
    {
      start: dayjs("2024-01-01T09:00:00").toDate(),
      end: dayjs("2024-01-02T15:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 10,
      },
    },
  ];

  const components = {
    event: (props) => {
      const { data } = props.event;

      if (data.x > 15) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              background: "red",
            }}
          >
            <CiCalendarDate />
            {props.title}
          </div>
        );
      } else {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              background: "green",
            }}
          >
            <CiCalendarDate />
            {props.title}
          </div>
        );
      }
    },
  };

  return (
    <div
      style={{
        height: "95vh",
        width: "70vw",
      }}
    >
      <Calendar
        localizer={localizar}
        events={events}
        defaultView="month"
        toolbar={true}
        date={dayjs("2024-01-02T12:00:00").toDate()}
        min={dayjs("2024-01-01T08:00:00").toDate()}
        max={dayjs("2024-01-31T18:00:00").toDate()}
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
        components={components}
      />
    </div>
  );
}

export default App;
