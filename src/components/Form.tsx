"use client";
import { FormEvent, useState } from "react";
import { Button, TextField, Text, FormControl, View } from "reshaped";

const genericError = "Oh noes! Something went wrong, please try again";

export function Form() {
  const [email, setEmail] = useState<string>("");
  const [successMessage, setSuccessMessages] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(event.currentTarget.action, {
      method: event.currentTarget.method,
      body: new FormData(event.currentTarget),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessages("Thank you, we'll keep you posted!");
        } else {
          response.json().then((data) => {
            if (data.error === "Validation errors") {
              setError("Please provide a valid email adress");
              return;
            }
          });
          setError(genericError);
        }
      })
      .catch(() => {
        setError(genericError);
      });
  };

  return (
    <>
      {successMessage || (
        <form
          action="https://formspree.io/f/mpqlkpag"
          method="POST"
          onSubmit={onSubmit}
        >
          <View direction="column" align="center" gap={2}>
            <Text>Be the first to know when we have news</Text>
            <TextField
              name="email"
              value={email}
              onChange={({ value }) => setEmail(value)}
              placeholder="your@email.com"
              endSlot={
                <Button
                  size="small"
                  color="primary"
                  type="submit"
                  disabled={!email}
                >
                  Submit
                </Button>
              }
              hasError={!!error}
              inputAttributes={{ type: "email" }}
              attributes={{ style: { width: "300px" } }}
            />
          </View>
          {error && <Text color="critical">{error}</Text>}
        </form>
      )}
    </>
  );
}
