import { DateTime } from "luxon";
import { shifts } from "./mockData";
import "./App.css";

function Shift() {
  const getTime = (obj) => {
    const startDate = DateTime.fromMillis(obj.startTime);
    const startHours = startDate.hour;
    const startMins = startDate.minute;
    const endDate = DateTime.fromMillis(obj.endTime);
    const endHours = endDate.hour;
    const endMins = endDate.minute;

    let startTime = "";

    if (startMins === 0) {
      startTime = `${startHours}:00`;
    } else {
      startTime = `${startHours}:${startMins}`;
    }

    let endTime = "";

    if (endMins === 0) {
      endTime = `${endHours}:00`;
    } else {
      endTime = `${endHours}:${endMins}`;
    }

    const time = `${startTime} - ${endTime}`;

    return (
      <div key={obj.id}>
        <div className="shiftCont">
          <div className="shiftTimeCont">
            <div className="shiftTime">
              <div className="shiftHoursMins">{time}</div>
              <div className="shiftLocation">{obj.area}</div>
            </div>
          </div>
          <div className="cancelCont">
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="todayHeader">
        <div className="todayHeaderTextCont">
          <div className="todayCont">Today</div>
          <div className="todayShiftCont">2 shifts, 4h</div>
        </div>
      </div>
      {shifts.map(getTime)}
    </div>
  );
}

export default Shift;
