import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { useState } from "react";
import { Button, CircularProgress, FormControl } from "@mui/material";

export default function FormPosition() {
  const [loading, setLoading] = useState<boolean>(false);
  const [liquidity, setLiquidity] = useState<number>(3814.1); // Liquidez actual simulada

  const submit = async function (data: { amount: string }) {
    setLoading(true);
    // Simula un retraso para la operación
    setTimeout(() => {
      console.log("Submitted data:", data);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="w-full bg-[#0e1a1e] p-10 rounded-md">
      <h2 className="text-white text-xl mb-4">Create Order</h2>
      <div className="text-white mb-4">Current Liquidity: {liquidity} ETH</div>
      <FormContainer
        defaultValues={{ amount: "" }}
        onSuccess={(data) => submit(data)}
      >
        <div className="flex flex-col">
          <div className="flex mb-4">
            <Button
              className="w-full rounded-sm mr-2"
              variant="contained"
              style={{
                color: "black",
                backgroundColor: loading ? "#17453f" : "#50d2c1",
                boxShadow: "none",
                fontSize: "0.75rem",
                marginTop: "0.5rem",
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size="1.5rem" color="inherit" />
              ) : (
                "Long"
              )}
            </Button>
            <Button
              className="w-full rounded-sm"
              variant="contained"
              style={{
                color: "black",
                backgroundColor: loading ? "#17453f" : "#50d2c1",
                boxShadow: "none",
                fontSize: "0.75rem",
                marginTop: "0.5rem",
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size="1.5rem" color="inherit" />
              ) : (
                "Short"
              )}
            </Button>
          </div>
          <FormControl className="flex-grow mb-4">
            <TextFieldElement
              name="amount"
              required
              placeholder="Enter amount in ETH"
              variant="outlined"
              sx={{ borderColor: "white" }}
            />
          </FormControl>

          <div className="mt-4">
            <Button
              type="submit"
              className="w-full rounded-sm"
              variant="contained"
              style={{
                color: "black",
                backgroundColor: loading ? "#17453f" : "#50d2c1",
                boxShadow: "none",
                fontSize: "0.75rem",
                marginTop: "0.5rem",
              }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size="1.5rem" color="inherit" />
              ) : (
                "Deposit"
              )}
            </Button>
          </div>
        </div>
      </FormContainer>
    </section>
  );
}
