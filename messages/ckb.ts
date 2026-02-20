import auth from "./ckb/auth.json";
import checkout from "./ckb/checkout.json";
import common from "./ckb/common.json";
import dashboard from "./ckb/dashboard.json";
import errors from "./ckb/errors.json";
import home from "./ckb/home.json";
import layout from "./ckb/layout.json";
import tours from "./ckb/tours.json";

const ckb = {
  common,
  errors,
  layout,
  home,
  auth,
  tours,
  checkout,
  dashboard,
} as const;

export default ckb;
