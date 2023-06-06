import { shifts } from "./mockData";
import Cities from "./Cities";
import { DateTime } from "luxon";

import "./App.css";

function Helsinki() {
    
    const getHelsinki = (obj) => {
        const startDate = DateTime.fromMillis(obj?.startTime);
        const startHours = startDate.hour;
        const startMins = startDate.minute;
        const endDate = DateTime.fromMillis(obj?.endTime);
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

        

        if (obj.area === "Helsinki") {


            return (
                <div key={obj.id}>
                    <div className="availableShiftCont">
                        <div className="availableShiftTimeCont">
                            <div className="availableShiftTime">
                                <div className="shiftHoursMins">{time}</div>
                            </div>
                        </div>
                        <div className="cancelCont">
                            <button className="book">Book</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <Cities />
            <div className="todayHeader">
                <div className="todayHeaderTextCont">
                    <div className="todayCont">Today</div>
                </div>
            </div>
            {shifts.map(getHelsinki)}
        </div>
    )
}

export default Helsinki