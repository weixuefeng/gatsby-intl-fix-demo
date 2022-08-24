import React from 'react'
import { injectIntl, Link, FormattedMessage } from "../../plugins/gatsby-plugin-intl"

const  hello = ({ intl }) => {
  return (
    <div>
        {intl.formatMessage({ id: "start" })}
        {/* OR <FormattedMessage id="go_page2" /> */}
        <Link to="/communities/a">
        {intl.formatMessage({ id: "start" })}
        {/* OR <FormattedMessage id="go_page2" /> */}
      </Link>
    </div>
  )
}
export default injectIntl(hello)