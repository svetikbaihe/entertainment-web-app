import type { LocaleObject } from "yup";

const locale: LocaleObject = {
  string: {
    email: { id: "yup.form.errors.invalidEmail" },
    min: ({ min }) => ({ id: "yup.form.errors.minLength", values: { min } }),
    max: ({ max }) => ({ id: "yup.form.errors.maxLength", values: { max } }),
  },
};

export default locale;
