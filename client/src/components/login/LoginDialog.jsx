import React, { useSate } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const DialogContainer = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const LoginBanner = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  padding: 45px 35px;
  width: 33%;
  color: #fff;
  & > h5 {
    font-weight: 600;
  }
`;

const LoginWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
  text-align: center;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const PolicyText = styled(Typography)`
  font-size: 12px;
  color: #878787;
  text-align: left;
`;

const CreateAccountText = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountState.login);
  };

  const accountState = {
    login: {
      state: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    register: {
      state: "register",
      heading: "Looks like you're new here!",
      subHeading: "Sign up with your mobile number to get started",
    },
  };

  const [account, toggleAccount] = React.useState(accountState.login);
  const toggleDialog = () => {
    if (account.state === "login") {
      toggleAccount(accountState.register);
    } else {
      toggleAccount(accountState.login);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <DialogContainer>
        <Box style={{ display: "flex", height: "100%" }}>
          <LoginBanner>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </LoginBanner>
          {account.state === "login" ? (
            <LoginWrapper>
              <TextField
                variant="standard"
                label="Enter Email/Mobile number"
              ></TextField>
              <TextField variant="standard" label="Enter Password"></TextField>
              <PolicyText>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </PolicyText>
              <LoginButton variant="contained">Login</LoginButton>
              <Typography>OR</Typography>
              <OtpButton variant="contained">Request OTP</OtpButton>
              <CreateAccountText onClick={toggleDialog}>
                New to Flipkart? Create an account
              </CreateAccountText>
            </LoginWrapper>
          ) : (
            <LoginWrapper>
              <TextField
                variant="standard"
                label="Enter First Name"
              ></TextField>
              <TextField variant="standard" label="Enter Last Name"></TextField>
              <TextField variant="standard" label="Create Username"></TextField>
              <TextField variant="standard" label="Enter Email"></TextField>
              <TextField variant="standard" label="Create Password"></TextField>
              <TextField
                variant="standard"
                label="Enter Phone Number"
              ></TextField>
              <OtpButton variant="contained">Request OTP</OtpButton>
              <OtpButton variant="contained" onClick={toggleDialog}>
                Existing User? Log in
              </OtpButton>
            </LoginWrapper>
          )}
        </Box>
      </DialogContainer>
    </Dialog>
  );
};

export default LoginDialog;
