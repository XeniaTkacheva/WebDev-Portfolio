import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/connect";
import "./scripts/reviews";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/parallax";