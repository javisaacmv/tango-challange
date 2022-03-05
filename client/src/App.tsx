import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";

function App() {
  const [number, setNumber] = React.useState<string>("");
  const [result, setResult] = React.useState<number | null>(null);
  console.log(number);

  const getFibonacci = async () => {
    if (number === "") return;
    const response = await fetch(
      `http://localhost:8080/api/fibonacci/${number}`
    );
    const res = await response.json();
    setResult(res.result);
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: "center", margin: 4, color: "whitesmoke" }}
          >
            Calculate Fibonacci!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="outlined-basic"
          label="Number"
          variant="filled"
          sx={{
            backgroundColor: "whitesmoke",
            margin: 2,
          }}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            padding: 2,
            width: "10rem",
          }}
          disabled={number === ""}
          onClick={getFibonacci}
        >
          Calculate
        </Button>
      </Grid>
      {result && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ textAlign: "center", margin: 4, color: "whitesmoke" }}
            >
              {`Fibonacci Result:   ${result}`}
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
