export const dateConvert = (date?: string, time?: string) => {
    if (!date || !time) return new Date();
    const dateList = date.split("/");
    const timeList = time.split(":");
    
    return new Date(
      parseInt(dateList[2]),
      parseInt(dateList[1]) - 1,
      parseInt(dateList[0]),
      parseInt(timeList[1]),
      parseInt(timeList[0])
    );
  };

  export const getDateTimeFromString = (date: string) => {
    const resDate = new Date(Date.parse(date || "")).toLocaleDateString("vi-VN");
    
    const time =
      new Date(Date.parse(date || "")).getHours().toString().padStart(2, "0") +
      ":" +
      new Date(Date.parse(date || "")).getMinutes().toString().padStart(2, "0");
  
    return {
      date: resDate,
      time: time,
    };
  };