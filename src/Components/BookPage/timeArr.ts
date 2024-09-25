/**
 *
 * @param startTime Start time of the booking, format as "xx:xx"
 * @param endTime End time of the booking, format as "xx:xx"
 * @param interval Interval of the booking, unit: minute
 */

export default function getTimeArr(startTime: string, endTime: string, interval: number) {
	if (
		typeof Number(startTime.split(":")[0]) !== "number" ||
		typeof Number(endTime.split(":")[0]) !== "number" ||
		typeof Number(startTime.split(":")[1]) !== "number" ||
		typeof Number(endTime.split(":")[1]) !== "number"
	) {
		console.log("wrong input1");
		return;
	}
	const startTimeObj = { hour: Number(startTime.split(":")[0]), minute: Number(startTime.split(":")[1]) };
	const endTimeObj = { hour: Number(endTime.split(":")[0]), minute: Number(endTime.split(":")[1]) };
	if (
		startTimeObj.hour > endTimeObj.hour ||
		startTimeObj.hour < 0 ||
		endTimeObj.hour > 23 ||
		startTimeObj.minute < 0 ||
		endTimeObj.minute < 0 ||
		endTimeObj.minute > 59 ||
		startTimeObj.minute > 59
	) {
		console.log("wrong time input2");
		return;
	}
	let arr: string[] = [];
	let currentHour = startTimeObj.hour;
	let currentMin = startTimeObj.minute;
	while (currentHour * 60 + currentMin <= endTimeObj.hour * 60 + endTimeObj.minute) {
		if (currentMin == 0) {
			arr.push(currentHour + ":00");
		} else {
			arr.push(currentHour + ":" + currentMin);
		}
		if (currentMin + interval >= 60) {
			currentHour += 1;
			currentMin = currentMin + interval - 60;
		} else {
			currentMin += interval;
		}
	}
	return arr;
}
