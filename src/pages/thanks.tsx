import Page from "@components/Page";
import { NextPage } from "next";

const Thanks: NextPage = () => (
  <Page title="Bedankt!" description="Bedankt voor je feedback!">
    <h1>Bedankt!</h1>
    <h2>We zullen je feedback zo snel mogelijk verwerken</h2>
    <a href="/">Ga terug</a>
  </Page>
);

export default Thanks;
