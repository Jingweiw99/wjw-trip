import dayjs from "dayjs";

export function formatMonthDay(date) {
  return dayjs(date).format("MM月DD日")
} 
// 相差的天数
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}