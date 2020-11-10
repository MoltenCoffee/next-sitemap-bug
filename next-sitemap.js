module.exports = {
  siteUrl: "https://domain.nl",
  generateRobotsTxt: true,
  robotsTxtOptions: { policies: [{ userAgent: "*", disallow: "/api/" }] },
};
