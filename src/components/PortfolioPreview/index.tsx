import type { MarkdownInstance } from 'astro';
import Styles from './styles.module.scss';

type Props = {
	project: MarkdownInstance<Record<string, any>>;
}

function PortfolioPreview({ project }: Props) {
	const { frontmatter } = project;
	return (
		<div className={Styles.card}>
			{/* @ts-expect-error: inline-css-react */}
			<div className={Styles.titleCard} style={`background-image:url(${frontmatter.img})`}>
				<h1 className={Styles.title}>{frontmatter.title}</h1>
			</div>
			<div className="pa3">
				<p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
				<div className={Styles.tags}>
					Tagged:
					{frontmatter.tags.map((t: string) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a className={Styles.link} href={project.url}>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
