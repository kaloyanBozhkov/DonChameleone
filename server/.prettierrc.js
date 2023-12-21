const baseConfig = require("../.prettierrc.js")

module.exports = {
  ...baseConfig,
   plugins: [
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "-polyfill$",
    "<THIRD_PARTY_MODULES>",
    "^api/(.*)",
    "^types/(.*)$",
    "^stores/(.*)$",
    "^classes/(.*)$",
    "^@(.*)$",
    "^services/(.*)$",
    "^utils/(.*)$",
    "^constants/(.*)$",
    "^common/(.*)$",
    "^(../)",
  ],
}
