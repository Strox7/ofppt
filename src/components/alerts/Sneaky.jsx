import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  enqueueSnackbar("This is a success message!", { variant: "success" });
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
