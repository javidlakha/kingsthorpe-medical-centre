import dayjs from "dayjs";
import { PRACTICE_TRAINING_DAYS } from "../constants";

/**
 * Returns the first `n` practice training days (sorted chronologically) after
 * today's date, in full English - e.g. 'Wednesday, 6 June 2022'
 */
export function practiceTrainingDays(
  n: number = Number.MAX_SAFE_INTEGER
): string[] {
  return PRACTICE_TRAINING_DAYS.map((date) => dayjs(date))
    .filter((date) => date.isAfter(dayjs()))
    .sort((x, y) => (x.isAfter(y) ? 1 : -1))
    .map((date) => date.format("dddd, DD MMMM YYYY"))
    .slice(0, n);
}
