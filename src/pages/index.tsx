import { NextPage } from "next";

import Page from "@components/Page";

import { Header, Download, Features, Version, Feedback, Creators, Build, Links } from "@components/Home";

const Home: NextPage = () => {
	return (
		<Page title="Home" description="Ontdek en download de Argo app hier!">
			<Header />
			<Download />
			<Features />
			<Version />
			<Feedback />
			<Creators />
			<Build />
			<Links />
		</Page>
	);
};

export default Home;
