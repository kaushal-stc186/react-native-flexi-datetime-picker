export { default as DatePicker } from "react-native-flexi-date-selector";
export { default as TimePicker } from "react-native-flexi-time-selector";


export type {
  DatePickerProps,
  DatePickerPreset,
  DatePickerTheme,
  DatePickerLabels,
  DatePickerLocale,
  DatePickerStyles,
  DayData,
  MonthData,
  DateState,
  MarkedDates
} from "react-native-flexi-date-selector/src/DatePicker/types";

export type {
  TimePickerProps,
  TimePickerTheme,
  TimePickerStyles,
  TimeConfig
} from "react-native-flexi-time-selector/src/TimePicker/types";

import DatePicker from "react-native-flexi-date-selector";
import TimePicker from "react-native-flexi-time-selector";

export default { DatePicker, TimePicker };
