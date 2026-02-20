import auth from "./fa/auth.json";
import checkout from "./fa/checkout.json";
import common from "./fa/common.json";
import dashboard from "./fa/dashboard.json";
import errors from "./fa/errors.json";
import home from "./fa/home.json";
import layout from "./fa/layout.json";
import tours from "./fa/tours.json";

const fa = {
  common,
  errors,
  layout,
  home,
  auth,
  tours,
  checkout,
  dashboard,
} as const;

export default fa;
