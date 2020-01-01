// @flow
/**
 * @author [Ehtesham Ul Haq]
 */

import * as React from "react"
import ErrorBasePage from "./ErrorBasePage"

type Props = {}
function ErrorNotFound(props: Props) {
	return (
		<ErrorBasePage>
			<p>The page that you are looking for doesn't exit</p>
		</ErrorBasePage>
	)
}

export default ErrorNotFound
