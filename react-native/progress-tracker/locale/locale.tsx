interface Locale {
  english: string;
  nepali: string;
}

export const AppLocale: Record<string, Locale> = {
  EMAIL: {
    english: "Email",
    nepali: "ईमेल",
  },
  PASSWORD: {
    english: "Password",
    nepali: "पासवर्ड",
  },
  LOGIN: {
    english: "Login",
    nepali: "लॉगिन",
  },
  DO_NOT_HAVE_ACCOUNT: {
    english: "Don't have an account?",
    nepali: "कुनै खाता छैन?",
  },
  REGISTER: {
    english: "Register",
    nepali: "रजिस्टर",
  },
};

export default function LocalizedString(key: string): string {
  return AppLocale[key].english;
}
