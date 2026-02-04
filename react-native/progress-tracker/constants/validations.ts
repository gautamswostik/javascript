export const validateEmailAddress = (text: string) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text)) {
    return "Email is invalid";
  }
  return "";
};

export const validatePassword = (text: string) => {
  if (!/[A-Z]/.test(text)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[a-z]/.test(text)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[0-9]/.test(text)) {
    return "Password must contain at least one number";
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(text)) {
    return "Password must contain at least one special character";
  }
  if (text.length < 8) {
    return "Password must be at least 8 characters";
  }
  return "";
};
