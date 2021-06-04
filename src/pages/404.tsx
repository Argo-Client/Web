import Page from "@components/Page";
import { NextPage } from "next";

const NotFound: NextPage = () => (
  <Page title="Pagina niet gevonden" description="De pagina is verwijderd of verplaatst">
    <div>
      <h1>Pagina niet gevonden</h1>
      <h2>De pagina is verwijderd of verplaatst</h2>
      <a href="/">Ga terug</a>
    </div>
  </Page>
);

export default NotFound;
