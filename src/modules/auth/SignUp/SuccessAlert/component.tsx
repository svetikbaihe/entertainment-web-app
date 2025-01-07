import Alert from "@mui/material/Alert";
import type React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import useContainer from "./hook";
import { Typography } from "@mui/material";
import { successfulAlertBtnText, successfulAlertText, successfulAlertBtn } from "./styles";
import { FormattedMessage } from "react-intl";

const SuccessAlert: React.FC = () => {
  const { handleNavigateToLogin } = useContainer();

  return (
    <Alert
      icon={<CheckIcon fontSize="inherit" />}
      severity="success"
      action={
        <Button size="small" onClick={handleNavigateToLogin} variant="text" sx={successfulAlertBtn}>
          <Typography variant="button" sx={successfulAlertBtnText}>
            <FormattedMessage id="successfulAlert.btn" />
          </Typography>
        </Button>
      }
    >
      <Typography variant="button" sx={successfulAlertText}>
        <FormattedMessage id="successfulAlert.message" />
      </Typography>
    </Alert>
  );
};

export default SuccessAlert;
