import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { ArenguForm } from "gatsby-plugin-arengu-forms";

function KontaktPage() {
  return (
    <Layout>
      <SEO
        title="Kontakt - Itana GmbH"
       
        description="Können wir Dir bei Deinen Fragen helfen? Kontaktiere uns unverbindlich - wir freuen uns!"
      />

      <h1>Kontaktieren Sie uns. Wir antworten so schnell wie möglich.</h1>

      <section className="mx-auto md:w-1/2">
        <ArenguForm id="157298306400350768"></ArenguForm>
      </section>

      <section>
        <h2>Itana GmbH</h2>
        <p>
          Itana GmbH <br />
          Maulbronner Weg 33
          <br />
          71706 Markgröningen
          <br />
          Telefon:{" "}
          <a href="tel:+4971149066450" className="text-itana-green">
            +49 711 49066 450
          </a>
          <br />
          Telefax: +49 711 49066 455
          <br />
          E-Mail:{" "}
          <a
            href="mailto:info@itana.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-itana-green"
          >
            info@itana.de
          </a>
        </p>
      </section>
    </Layout>
  );
}

export default KontaktPage;
