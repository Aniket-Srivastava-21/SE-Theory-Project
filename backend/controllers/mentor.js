import TimeTable from "../model/timetable.js";

export let setTimeTable = async (req, res) => {
    try {
        console.log(req.body);
        // TimeTable.findOne({exam: req.body.exam}).then((timetable) => {
        //     timetable.monday.push()
        // })
        // // var a = new Array()
        
    }
    catch(error) {
        console.log(error);
    }
}