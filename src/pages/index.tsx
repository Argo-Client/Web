import { NextPage } from "next";

import Page from "@components/Page";

import { AiFillAndroid } from "react-icons/ai";
import { FaAppStoreIos, FaGooglePlay, FaGithub, FaCoffee, FaTwitter } from "react-icons/fa";

const LinkButton = ({ href, children }: { href: string; children: JSX.Element }) => (
  <a href={href}>
    <button>{children}</button>
  </a>
);

const Home: NextPage = () => {
  return (
    <Page title="Home" description="Ontdek en download de Argo app hier!">
      <div>
        <h1 id="home">Argo voor Magister 6</h1>
        <p>
          Argo is een moderne en simpele app voor Magister 6. Het doel is om de normale Magister app compleet te kunnen
          vervangen door deze veel kleinere app.
        </p>
        <p>De app is beschikbaar voor Android, IOS and binnenkort nog meer platformen!</p>

        <h2 id="download">Download</h2>
        <LinkButton href="https://play.google.com/store/apps/details?id=nl.noxus.argo">
          <FaGooglePlay size={25} />
        </LinkButton>
        <LinkButton href="">
          <FaAppStoreIos size={25} />
        </LinkButton>
        <LinkButton href="">
          <AiFillAndroid size={25} />
        </LinkButton>

        <h2 id="features">Features</h2>
        <ul>
          <li>Mooie, handige agenda waarin je precies kan zien wanneer je een tussenuur hebt.</li>
          <li>
            Een overzichtelijke thuispagina waarop je recente berichten, cijfers en absent-meldingen te zien krijgt.
          </li>
          <li>
            Een handige manier om te berekenen welke cijfer je moet halen voor je volgende toets om nog voldoende te
            staan.
          </li>
          <li>
            Het pinnen van bronnen, studiewijzers of leermiddelen zodat je ze makkelijk terug kan vinden in je
            thuispagina.
          </li>
          <li>Een uitgebreid assortiment aan instellingen zodat je Argo precies zo hebt zoals jij het wilt.</li>
        </ul>

        <table>
          <caption>
            <h2 id="version">Versie info</h2>
          </caption>
          <tbody>
            <tr>
              <th>Versie</th>
              <td>0.3.0</td>
            </tr>
            <tr>
              <th>Bestand</th>
              <td>Placeholder</td>
            </tr>
          </tbody>
        </table>

        <h2 id="feedback">Feedback</h2>
        <p>
          Wil je een suggestie doen of een probleem melden? Laat het ons weten op onze{" "}
          <a href="/feedback">feedback pagina</a>! We zullen proberen zo snel mogelijk je bericht te lezen en te
          verwerken.
        </p>

        <h2 id="creators">Makers</h2>
        <ul>
          <li>
            <a href="https://samtaen.nl">Sam Taen</a>
          </li>
          <li>
            <a href="https://guusvanmeerveld.dev">Guus van Meerveld</a>
          </li>
          <li>
            <a href="https://mboosterhuis.nl">Martijn Oosterhuis</a>
          </li>
        </ul>

        <h2 id="building">Zelf bouwen</h2>

        <h3>Vereisten</h3>
        <ul>
          <li>Flutter</li>
          <li>Git</li>
        </ul>

        <h3>Stappen</h3>
        <p>
          Om Argo zelf te kunnen bouwen, moet je eerst Flutter hebben. Als je dit nog niet hebt, kan je dit downloaden
          op <a href="https://flutter.dev/docs/get-started/install">de officiële website van Flutter</a>.
        </p>
        <p>Vervolgens kan je de source code downloaden door middel van het volgende commando:</p>
        <pre>
          <code>
            git clone https://github.com/Argo-Client/app Argo <br />
            cd Argo
          </code>
        </pre>

        <p>Nu je de source code hebt, kan je de app bouwen met het volgende commando:</p>
        <pre>
          <code>flutter build</code>
        </pre>
      </div>

      <h2 id="links">Links</h2>
      <LinkButton href="https://github.com/argo-client/app">
        <FaGithub size={25} />
      </LinkButton>
      <LinkButton href="https://ko-fi.com/guusvanmeerveld">
        <FaCoffee size={25} />
      </LinkButton>
      <LinkButton href="https://twitter.com/ClientArgo">
        <FaTwitter size={25} />
      </LinkButton>
    </Page>
  );
};

export default Home;
