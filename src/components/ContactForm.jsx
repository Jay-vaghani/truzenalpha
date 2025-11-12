import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Alert,
  Snackbar,
  alpha,
  CircularProgress,
} from "@mui/material";
import {
  Close,
  Phone,
  Email,
  Person,
  Subject,
  Message,
} from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";

export default function ContactForm({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Prepare the data
      const formData = {
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        ...data,
      };

      console.log(formData);
      

      // Replace this URL with your actual backend endpoint
      // For demonstration, we'll simulate a successful response
      const response = { ok: true }; // await fetch(...)

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message received! We will contact you soon.",
          severity: "success",
        });
        reset();
        setTimeout(() => onClose(), 2000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: alpha("#00e5ff", 0.3),
      },
      "&:hover fieldset": {
        borderColor: "#00e5ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00e5ff",
        boxShadow: `0 0 10px ${alpha("#00e5ff", 0.3)}`,
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#00e5ff",
    },
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "rgba(10, 25, 47, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid",
            borderColor: alpha("#00e5ff", 0.3),
            boxShadow: `0 0 30px ${alpha("#00e5ff", 0.2)}`,
          },
        }}
      >
        <DialogContent sx={{ p: 4 }}>
          <Box sx={{ position: "relative", mb: 3 }}>
            <h2
              className="neon-glow"
              style={{
                textAlign: "center",
                marginBottom: "0.5rem",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#00e5ff",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              CONTACT US
            </h2>
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                right: -16,
                top: -16,
                color: "#00e5ff",
                "&:hover": { bgcolor: alpha("#00e5ff", 0.1) },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Name Field */}
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name *"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: "#00e5ff" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={textFieldStyles}
                  />
                )}
              />

              {/* Email Field */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email *"
                    fullWidth
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: "#00e5ff" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={textFieldStyles}
                  />
                )}
              />

              {/* Phone Field */}
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Please enter a valid phone number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile Number *"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    placeholder="Enter mobile number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone sx={{ color: "#00e5ff" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={textFieldStyles}
                  />
                )}
              />

              {/* Subject Field */}
              <Controller
                name="subject"
                control={control}
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Subject *"
                    fullWidth
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Subject sx={{ color: "#00e5ff" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={textFieldStyles}
                  />
                )}
              />

              {/* Message Field */}
              <Controller
                name="message"
                control={control}
                rules={{
                  required: "Message is required",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message *"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ alignSelf: "flex-start" }}
                        >
                          <Message sx={{ color: "#00e5ff" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={textFieldStyles}
                  />
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  bgcolor: "#00e5ff",
                  color: "#000",
                  fontWeight: 700,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontFamily: "'Rajdhani', sans-serif",
                  "&:hover": {
                    bgcolor: "#00e5ff",
                    boxShadow: `0 0 20px ${alpha("#00e5ff", 0.5)}`,
                  },
                  "&:disabled": {
                    bgcolor: alpha("#00e5ff", 0.3),
                    color: alpha("#000", 0.5),
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#000" }} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            bgcolor:
              snackbar.severity === "success"
                ? alpha("#00e5ff", 0.9)
                : alpha("#f44336", 0.9),
            color: "#000",
            fontWeight: 600,
            border: "1px solid",
            borderColor:
              snackbar.severity === "success" ? "#00e5ff" : "#f44336",
            boxShadow: `0 0 20px ${alpha(
              snackbar.severity === "success" ? "#00e5ff" : "#f44336",
              0.4
            )}`,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
