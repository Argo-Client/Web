import { NextPage } from "next";
import Link from "next/link";

import Page from "@components/Page";

const NotFound: NextPage = () => (
	<Page
		title="Pagina niet gevonden"
		description="De pagina is verwijderd of verplaatst"
	>
		<div>
			<h1>Pagina niet gevonden</h1>
			<h2>De pagina is verwijderd of verplaatst</h2>
			<Link href="/">Ga terug</Link>
		</div>
	</Page>
);

export default NotFound;
