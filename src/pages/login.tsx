import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useIntl } from "react-intl";

const Login = () => {
  const intl = useIntl();

  return (
    <div className="flex flex-col items-center">
      <TextField required label={intl.formatMessage({ id: "USERNAME" })} />
      <TextField
        required
        label={intl.formatMessage({ id: "PASSWORD" })}
        className="mt-5"
      />

      <Button variant="contained" size="large" className="mt-8 bg-blue-500">
        {intl.formatMessage({ id: "LOGIN" })}
      </Button>
    </div>
  );
};

export default Login;
