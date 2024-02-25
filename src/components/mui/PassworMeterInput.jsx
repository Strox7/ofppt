import * as React from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";

export default function PasswordMeterInput() {
  const [value, setValue] = React.useState("");
  const minLength = 12;
  return (
    <Stack
      spacing={0.5}
      sx={{
        "--hue": Math.min(value.length * 10, 120),
      }}
    >
      <Input
        id="password"
        sx={{
          backgroundColor: "transparent !important",
          color: "white",
          padding: "10px 20px",
          marginBottom: "20px",
        }}
        type="password"
        placeholder="Password"
        startDecorator={<Key />}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <LinearProgress
        determinate
        size="sm"
        value={Math.min((value.length * 100) / minLength, 100)}
        sx={{
          bgcolor: "background.level3",
          color: "hsl(var(--hue) 80% 40%)",
        }}
      />
      <Typography
        level="body-xs"
        sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 80% 30%)" }}
      >
        {value.length < 3 && "Very weak"}
        {value.length >= 3 && value.length < 6 && "Weak"}
        {value.length >= 6 && value.length < 10 && "Strong"}
        {value.length >= 10 && "Very strong"}
      </Typography>
    </Stack>
  );
}
2;
