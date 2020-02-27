import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"


const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)

    return (
        <footer className={ footerStyles.footer }>
			<div className={ footerStyles.footerContent }>
				© {new Date().getFullYear()} - Built and developed by
				{` `}
				<a href="https://github.com/razak17" target="_blank" rel="nofollow noopener noreferrer">{data.site.siteMetadata.author}
				</a>
		  	</div>
        </footer>
    )
}

export default Footer