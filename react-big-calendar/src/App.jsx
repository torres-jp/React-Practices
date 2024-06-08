/* eslint-disable react/prop-types */
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { CiCalendarDate } from "react-icons/ci";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "./App.css";

dayjs.locale("es");

function HomePage() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-06-08T12:00:00").toDate(),
      end: dayjs("2024-06-08T13:00:00").toDate(),
      title: "Event 01",
      data: {
        x: 20,
      },
    },
    {
      start: dayjs("2024-06-10T08:00:00").toDate(),
      end: dayjs("2024-06-12T12:00:00").toDate(),
      title: "Event 02",
      data: {
        x: 10,
      },
    },
  ];

  const components = {
    event: (props) => {
      const { data } = props.event;
      console.log(data);

      if (data.x > 15) {
        return (
          <div
            style={{
              background: "green",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
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
              background: "red",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
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
        localizer={localizer}
        events={events}
        views={["month", "week", "day"]}
        // view={"month"}
        date={dayjs("2024-06-13T12:00:00").toDate()}
        toolbar={true}
        defaultView="month"
        min={dayjs("2024-06-09T08:00:00").toDate()}
        max={dayjs("2024-06-09T18:00:00").toDate()}
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

export default HomePage;
