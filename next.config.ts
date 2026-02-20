import type { NextConfig } from "next";
import createNextInputPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};
const withNextIntl = createNextInputPlugin();
export default withNextIntl(nextConfig);
