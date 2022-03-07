import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";

interface Response {
  result: number;
}

function App() {
  const [number, setNumber] = React.useState<string>("");
  const [result, setResult] = React.useState<number | null>(null);

  const getFibonacci = async () => {
    if (number === "") return;
    try {
      const response = await fetch(
        `http://localhost:8080/api/fibonacci/${number}`
      );
      const res = (await response.json()) as any as Response;
      setResult(res.result);
    } catch (err) {
      console.error(err);
    }
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
          placeholder="Number"
          label="Number"
          variant="filled"
          data-testid="input"
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
          data-testid="button"
        >
          Calculate
        </Button>
      </Grid>
      {result && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              data-testid="result"
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
