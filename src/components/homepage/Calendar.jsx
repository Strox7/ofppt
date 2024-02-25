import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          "& span": { color: "white !important" },
          "& svg": { color: "white !important" },
          "& button": { color: "white !important" },
          "& .css-jgls56-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
            { backgroundColor: "#1976d2" },
        }}
      />
    </LocalizationProvider>
  );
}
