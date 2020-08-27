export { makeCalendar };

const nowDate = new Date();

function makeCalendar(options) {
    const currentMonth = (options.currentMonth) ? options.currentMonth : 0;
    const startDay = (options.startDay >= 0 && options.startDay < 7) ? options.startDay : 0;
    
    const month = nowDate.getMonth() + currentMonth;
    const firstDay = new Date(nowDate.getFullYear(), month, 1);
    const lastDay = new Date(nowDate.getFullYear(), month + 1, 0);
    
    let weeks = [];
    let week = [];
    let dateNumber = firstDay.getDay() - startDay;
    dateNumber = (dateNumber >= 0) ? dateNumber : dateNumber + 7;
    
    // 1日以前の空白を埋める
    for (let i = 0; i < dateNumber; i++) {
        week.push('-');
    }
    // 末日まで7つずつweeksに格納する
    for (let i = 0; i < lastDay.getDate(); i++) {
        week.push(i+1);
        dateNumber++;
        if ( dateNumber === 7) {
            dateNumber = 0;
            weeks.push([...week]);
            week = [];
        }
    };
    // 末日以降の空白を埋める
    if (dateNumber !== 0) {
        for (let i = dateNumber; i < 7; i++) {
            week.push('-');
        }
        weeks.push([...week]);
    }

    return weeks;
}
