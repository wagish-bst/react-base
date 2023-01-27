import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dateTimePicker.scss";

export enum DateTimePickerType {
  time,
  dateTime,
  date,
  dateRange,
  month,
  year,
}

interface IDateTimePickerParams {
  dateTimePickerType: DateTimePickerType;
  selectedDate?: Date;

  selectsRange?: boolean;
  startDate?: Date;
  endDate?: Date;
  showWeekNumbers?: boolean;

  minValue?: Date;
  maxValue?: Date;
  showTimeInput?: boolean;
  timeIntervalss?: number;

  isClearable?: boolean;
  placeholderText?: string;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
}
const DateTimePicker = (props: IDateTimePickerParams) => {
  const [dateFormat, setDateFormat] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showMonthYearPicker, setShowMonthYearPicker] = useState<boolean>();
  const [showYearPicker, setShowYearPicker] = useState<boolean>();

  const [selectsRange, setSelectsRange] = useState<boolean>();
  const [monthsShown, setMonthsShown] = useState<number>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [showWeekNumbers, setShowWeekNumbers] = useState<boolean>();

  const [minDate, setMinDate] = useState<Date>();
  const [maxDate, setMaxDate] = useState<Date>();

  const [minTime, setMinTime] = useState<Date>();
  const [maxTime, setMaxTime] = useState<Date>();
  const [showTimeInput, setShowTimeInput] = useState<boolean>();
  const [showTimeSelect, setShowTimeSelect] = useState<boolean>();
  const [showTimeSelectOnly, setShowTimeSelectOnly] = useState<boolean>();
  const [timeIntervals, setTimeIntervals] = useState<number>();

  useEffect(() => {
    switch (props.dateTimePickerType) {
      case DateTimePickerType.time:
        setDateFormat("h:mm aa");
        setShowTimeSelectOnly(true);
        if (props.selectedDate != null) setSelectedDate(props.selectedDate);
        if (props.minValue != null) setMinTime(props?.minValue);
        if (props.maxValue != null) setMaxTime(props?.maxValue);
        if (props.showTimeInput != null) setShowTimeInput(props.showTimeInput);
        else {
          setShowTimeSelect(true);
          if (props.timeIntervalss != null)
            setTimeIntervals(props.timeIntervalss);
        }
        break;
      case DateTimePickerType.dateTime:
        setDateFormat("ddMMM,yyyy hh:mm aa");
        if (props.selectedDate != null) setSelectedDate(props.selectedDate);
        if (props.minValue != null) setMinDate(props.minValue);
        if (props.maxValue != null) setMaxDate(props.maxValue);
        if (props.showWeekNumbers != null)
          setShowWeekNumbers(props.showWeekNumbers);
        if (props.showTimeInput != null) setShowTimeInput(props.showTimeInput);
        else {
          setShowTimeSelect(true);
          if (props.timeIntervalss != null)
            setTimeIntervals(props.timeIntervalss);
        }
        break;
      case DateTimePickerType.date:
        setDateFormat("ddMMM,yyyy");
        if (props.selectedDate != null) setSelectedDate(props.selectedDate);
        if (props.minValue != null) setMinDate(props.minValue);
        if (props.maxValue != null) setMaxDate(props.maxValue);
        if (props.showWeekNumbers != null)
          setShowWeekNumbers(props.showWeekNumbers);
        break;
      case DateTimePickerType.dateRange:
        setDateFormat("ddMMM,yyyy");
        setSelectsRange(true);
        setMonthsShown(2);
        if (props.startDate != null) setStartDate(props.startDate);
        if (props.endDate != null) setEndDate(props.endDate);
        if (props.minValue != null) setMinDate(props.minValue);
        if (props.maxValue != null) setMaxDate(props.maxValue);
        if (props.showWeekNumbers != null)
          setShowWeekNumbers(props.showWeekNumbers);
        break;
      case DateTimePickerType.month:
        setDateFormat("MMM,yyyy");
        setShowMonthYearPicker(true);
        if (props.selectedDate != null) setSelectedDate(props.selectedDate);
        if (props.minValue != null) setMinDate(props.minValue);
        if (props.maxValue != null) setMaxDate(props.maxValue);
        break;
      case DateTimePickerType.year:
        setDateFormat("yyyy");
        setShowYearPicker(true);
        if (props.selectedDate != null) setSelectedDate(props.selectedDate);
        if (props.minValue != null) setMinDate(props.minValue);
        if (props.maxValue != null) setMaxDate(props.maxValue);
        break;
    }
  }, [props.dateTimePickerType]);

  // const renderDayContents = (dayOfMonth: number, date?: Date | undefined) => {
  //   const tooltipText = `Tooltip for date: ${date}`;
  //   return <span title={tooltipText}>{dayOfMonth}</span>;
  // };
  return (
    <div className="dateTimePicker">
      <DatePicker
      className="datePicker-display datePicker-display-icon"
        dateFormat={dateFormat}
        isClearable={props.isClearable}
        placeholderText={props.placeholderText}
        showTimeInput={showTimeInput}
        showTimeSelect={showTimeSelect}
        showMonthYearPicker={showMonthYearPicker}
        timeIntervals={timeIntervals}
        minDate={minDate}
        maxDate={maxDate}
        showWeekNumbers={showWeekNumbers}
        selected={selectedDate}
        selectsRange={selectsRange}
        startDate={startDate}
        endDate={endDate}
        monthsShown={monthsShown}
        showTimeSelectOnly={showTimeSelectOnly}
        showYearPicker={showYearPicker}
        minTime={minTime}
        maxTime={maxTime}
        calendarStartDay={1}
        onChange={(param: any) => {
          switch (props.dateTimePickerType) {
            case DateTimePickerType.time:
            case DateTimePickerType.date:
            case DateTimePickerType.month:
            case DateTimePickerType.year:
            case DateTimePickerType.dateTime:
              setSelectedDate(param);
              break;
            case DateTimePickerType.dateRange:
              setStartDate(param[0]);
              setEndDate(param[1]);
              break;
          }
        }}
        onCalendarClose={() => {
          if (props.onCalendarClose) props.onCalendarClose();
        }}
        onCalendarOpen={() => {
          if (props.onCalendarOpen) props.onCalendarOpen();
        }}
        // renderDayContents={(dayOfMonth: number, date?: Date | undefined) =>
        //   renderDayContents(dayOfMonth, date)
        // }
      />
    </div>
  );
};

export default DateTimePicker;
