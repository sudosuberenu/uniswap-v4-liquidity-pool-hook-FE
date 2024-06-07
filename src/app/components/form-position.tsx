import { useState } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

import { Button, CircularProgress, FormControl } from "@mui/material";
import { styled } from "@mui/system";

export default function FormPosition() {
  const CustomTextField = styled(TextFieldElement)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [liquidity, setLiquidity] = useState<number>(3814.1);

  const submit = async function (data: { amount: string }) {
    setLoading(true);
    setTimeout(() => {
      console.log("Submitted data:", data);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="w-full bg-[#0e1a1e] p-10 rounded-md">
      <div className="text-white mb-4">Liquidity: {liquidity} ETH</div>
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
            >
              Long
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
            >
              Short
            </Button>
          </div>
          <FormControl className="flex-grow mb-4">
            <CustomTextField
              name="amount"
              required
              placeholder="Enter amount in ETH"
              type="number"
              variant="outlined"
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
