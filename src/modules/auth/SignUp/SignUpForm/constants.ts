import {
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_PASSWORD,
  MIN_ONE_LOWER_LETTER_REGEX,
  MIN_ONE_NUM_REGEX,
  MIN_ONE_SPECIAL_CHAR_REGEX,
  MIN_ONE_UPPER_LETTER_REGEX,
} from "@constants/app";
import yup from "@lib/yup";
import { IntlMessage } from "@type/app";

export const SCHEMA = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Can't be empty"),
    password: yup
      .string()
      .min(MIN_LENGTH_PASSWORD)
      .max(MAX_LENGTH_PASSWORD)
      .matches(MIN_ONE_UPPER_LETTER_REGEX, {
        message: {
          id: "shared.form.errors.upperLetterRegex" as IntlMessage["id"],
        },
      })
      .matches(MIN_ONE_LOWER_LETTER_REGEX, {
        message: {
          id: "shared.form.errors.lowerLetterRegex" as IntlMessage["id"],
        },
      })
      .matches(MIN_ONE_NUM_REGEX, {
        message: { id: "shared.form.errors.oneNumRegex" as IntlMessage["id"] },
      })
      .matches(MIN_ONE_SPECIAL_CHAR_REGEX, {
        message: {
          id: "shared.form.errors.oneSpecialCharRegex" as IntlMessage["id"],
        },
      })
      .trim()
      .required({ id: "shared.form.errors.required" as IntlMessage["id"] }),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], {
        id: "shared.form.errors.matchPasswords" as IntlMessage["id"],
      })
      .required({ id: "shared.form.errors.required" as IntlMessage["id"] }),
  })
  .required();
