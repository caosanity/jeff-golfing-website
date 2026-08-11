/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent `next dev` from auto-appending agent-guidance notes to CLAUDE.md
  agentRules: false,

  // Static export for Cloudflare Pages — every route in this site is static,
  // so no Node/edge server is needed at all.
  output: "export",
};

export default nextConfig;
