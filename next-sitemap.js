module.exports = {
  siteUrl: "https://ifmsa.nl",
  generateRobotsTxt: true,
  robotsTxtOptions: { policies: [{ userAgent: "*", disallow: "/api/" }] },
};
