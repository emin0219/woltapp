import Cities from './Cities';
import { DateTime } from 'luxon';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";

function Available() {
    const { v4: uuidv4 } = require('uuid');
    const shiftTime = (dateObj, shiftDays = 0) =>
        DateTime.fromObject(dateObj).plus({ days: shiftDays }).valueOf();

    const createMockShift = (values) => Object.assign({
        id: uuidv4(),
        booked: false,
    }, values);

    const shifts = [
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 12 }),
            endTime: shiftTime({ hour: 14 }),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 10 }),
            endTime: shiftTime({ hour: 12 }),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 16 }),
            endTime: shiftTime({ hour: 17, minutes: 30 }),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 16 }),
            endTime: shiftTime({ hour: 17, minutes: 30 }),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 11 }),
            endTime: shiftTime({ hour: 13 }),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 10 }),
            endTime: shiftTime({ hour: 15 }),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 10 }),
            endTime: shiftTime({ hour: 11, minutes: 30 }),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 11 }),
            endTime: shiftTime({ hour: 13 }),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 10 }),
            endTime: shiftTime({ hour: 12 }),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 18 }),
            endTime: shiftTime({ hour: 20 }),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 9 }),
            endTime: shiftTime({ hour: 12 }),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 10 }),
            endTime: shiftTime({ hour: 12 }),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 12 }),
            endTime: shiftTime({ hour: 14 }),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 14 }),
            endTime: shiftTime({ hour: 16, minutes: 30 }),
        }),

        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 12 }, 1),
            endTime: shiftTime({ hour: 14 }, 1),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 14 }, 1),
            endTime: shiftTime({ hour: 16, minutes: 30 }, 1),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 12 }, 1),
            endTime: shiftTime({ hour: 14 }, 1),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 14 }, 1),
            endTime: shiftTime({ hour: 16, minutes: 30 }, 1),
        }),

        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 9 }, 3),
            endTime: shiftTime({ hour: 10 }, 3),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 10 }, 3),
            endTime: shiftTime({ hour: 12, minutes: 30 }, 3),
        }),
        createMockShift({
            area: 'Turku',
            startTime: shiftTime({ hour: 12, minutes: 30 }, 3),
            endTime: shiftTime({ hour: 15 }, 3),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 10 }, 3),
            endTime: shiftTime({ hour: 14, minutes: 30 }, 3),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 14 }, 3),
            endTime: shiftTime({ hour: 16, minutes: 30 }, 3),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 10 }, 3),
            endTime: shiftTime({ hour: 12 }, 3),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 12 }, 3),
            endTime: shiftTime({ hour: 14 }, 3),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 13 }, 3),
            endTime: shiftTime({ hour: 15 }, 3),
        }),

        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 9 }, 4),
            endTime: shiftTime({ hour: 11 }, 4),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 11 }, 4),
            endTime: shiftTime({ hour: 13, minutes: 30 }, 4),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 12 }, 4),
            endTime: shiftTime({ hour: 15 }, 4),
        }),
        createMockShift({
            area: 'Helsinki',
            startTime: shiftTime({ hour: 18 }, 4),
            endTime: shiftTime({ hour: 21 }, 4),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 9 }, 4),
            endTime: shiftTime({ hour: 12 }, 4),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 12 }, 4),
            endTime: shiftTime({ hour: 15, minutes: 30 }, 4),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 15 }, 4),
            endTime: shiftTime({ hour: 18 }, 4),
        }),
        createMockShift({
            area: 'Tampere',
            startTime: shiftTime({ hour: 17 }, 4),
            endTime: shiftTime({ hour: 20 }, 4),
        })
    ]

    const getTime = (obj) => {
        const startDate = DateTime.fromMillis(obj.startTime)
        const startHours = startDate.hour
        const startMins = startDate.minute
        const endDate = DateTime.fromMillis(obj.endTime);
        const endHours = endDate.hour;
        const endMins = endDate.minute;
        const startday = startDate.day
        const ss = startDate.month

        let startTime = ""

        if (startMins === 0) {
            startTime = `${startHours}:00`
        }
        else {
            startTime = `${startHours}:${startMins}`
        }

        let endTime = ""

        if (endMins === 0) {
            endTime = `${endHours}:00`
        }
        else {
            endTime = `${endHours}:${endMins}`
        }

        const time = `${startTime} - ${endTime}`

        console.log(obj.startTime)


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


    return (
        <div>
            <Cities />
            <div className="todayHeader">
                <div className="todayHeaderTextCont">
                    <div className="todayCont">Today</div>
                </div>
            </div>
            {shifts.map(getTime)}
            
        </div>
    )

}
export default Available