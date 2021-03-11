import { Link } from "gatsby"
import * as React from "react"

import SEO from "../components/utils/seo"
import { Para, SubHeading } from "../primitives/Typography"

const NotFoundPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SEO title="404: Not found" />
    <SubHeading>404: Not Found</SubHeading>
    <Para>You just hit a route that doesn&#39;t exist... the sadness.</Para>
    <br />
    <Para>
      <Link to="/" style={{ color: "inherit" }}>
        Go Back
      </Link>
    </Para>
  </div>
)

export default NotFoundPage
