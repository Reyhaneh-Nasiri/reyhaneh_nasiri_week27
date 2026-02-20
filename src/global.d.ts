import fa from "../messages/fa.js";

type Messages = typeof fa;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
