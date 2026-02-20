import auth from "./en/auth.json";
import checkout from "./en/checkout.json";
import common from "./en/common.json";
import dashboard from "./en/dashboard.json";
import errors from "./en/errors.json";
import home from "./en/home.json";
import layout from "./en/layout.json";
import tours from "./en/tours.json";

const en = {
  common,
  errors,
  layout,
  home,
  auth,
  tours,
  checkout,
  dashboard,
} as const;

export default en;
