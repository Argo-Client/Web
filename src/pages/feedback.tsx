import { NextPage } from "next";
import ReCAPTCHA from "react-google-recaptcha";

import Page from "@components/Page";

const formURL = "https://forms.guusvanmeerveld.dev/argo";

const Feedback: NextPage = () => {
  return (
    <Page title="Feedback" description="Geef je hier je Argo feedback">
      <h1>Feedback</h1>
      <form
        encType="application/x-www-form-urlencoded"
        action={formURL}
        className="content"
        method="POST"
        name="contact"
      >
        <label htmlFor="email">Email adres</label>
        <input name="email" type="email" required placeholder="Je email adres" id="email" />
        <br />

        <label htmlFor="type">Bericht type</label>
        <select name="type[]" id="type">
          <option value="bug">Probleem</option>
          <option value="question">Vraag</option>
          <option value="suggestion">Sugestie</option>
          <option value="other">Anders</option>
        </select>
        <br />

        <label htmlFor="message">Bericht</label>
        <textarea required name="message" placeholder="Je bericht" id="message"></textarea>
        <br />

        <ReCAPTCHA theme="dark" sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY} />
        <br />

        <button className="button submit" type="submit">
          Send
        </button>
      </form>
    </Page>
  );
};

export default Feedback;
