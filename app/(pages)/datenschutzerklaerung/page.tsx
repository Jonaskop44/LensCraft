"use client";

import Footer from "@/app/components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar color="#FFFFFF" />
      <Hero
        heading="DSGVO"
        button="Zur Datenschutzerklärung"
        link="/datenschutzerklaerung/#datenschutzerklärung"
      />
      <div id="datenschutzerklärung" className="max-w-[1240px] mx-auto">
        <h1 id="impressum" className="text-2xl font-bold text-center p-4">
          Datenschutzerklärung
        </h1>
        <div className="flex justify-center items-center ">
          <div className="m-20 p-16 shadow-xl">
            <div className="mb-9">
              <h1 className="text-lg font-medium mb-5">
                1. Datenschutz auf einen Blick Allgemeine Hinweise
              </h1>
              <p className="mb-5">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h1 className="text-lg font-medium">
                Datenerfassung auf dieser Website
              </h1>
              <h1 className="text-lg font-medium mb-5">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </h1>
              <p className="mb-5">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur Verantwortlichen Stelle“ in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Wie erfassen wir Ihre Daten?
              </h1>
              <p className="mb-5">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
              </p>
              <p className="mb-5">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT- Systeme erfasst. Das
                sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Wofür nutzen wir Ihre Daten?
              </h1>
              <p className="mb-5">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h1>
              <p className="mb-5">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="mb-5">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
                sich jederzeit an uns wenden.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Analyse-Tools und Tools von Drittanbietern
              </h1>
              <p className="mb-5">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                ausgewertet werden. Das geschieht vor allem mit sogenannten
                Analyseprogrammen.
              </p>
              <p className="mb-5">
                Detaillierte Informationen zu diesen Analyseprogrammen finden
                Sie in der folgenden Datenschutzerklärung.
              </p>
              <h1 className="text-lg font-medium mb-5">
                2. Hosting und Content Delivery Networks (CDN) Externes Hosting
              </h1>
              <p className="mb-5">
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert.
                Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                Namen, Websitezugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
              </p>
              <p className="mb-5">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mb-5">
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
                zur Erfüllung seiner Leistungspflichten erforderlich ist und
                unsere Weisungen in Bezug auf diese Daten befolgen.
              </p>
              <p className="mb-5">Wir setzen folgenden Hoster ein: All Inkl</p>
              <h1 className="text-lg font-medium mb-5">
                3. Allgemeine Hinweise und Pflichtinformationen Datenschutz
              </h1>
              <p className="mb-5">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-5">
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben.
              </p>
              <p className="mb-5">
                Personenbezogene Daten sind Daten, mit denen Sie persönlich
                identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und
                wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
                Zweck das geschieht.
              </p>
              <p className="mb-5">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
                B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                Dritte ist nicht möglich.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Hinweis zur verantwortlichen Stelle
              </h1>
              <p className="mb-5">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p>Name</p>
              <p>Adresse</p>
              <p>Telefonnummer</p>
              <p className="mb-5">E-Mail: example@gmail.com</p>
              <p className="mb-5">
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              <h1 className="text-lg font-medium mb-5">Speicherdauer</h1>
              <p className="mb-5">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben (z.B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h1>
              <p className="mb-5">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                sowie gegen Direktwerbung (Art. 21 DSGVO)
              </h1>
              <p className="mb-5">
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
              </p>
              <p className="mb-5">
                SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
                PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
                FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE
                JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
                ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH
                EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN
                NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE
                SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE
                INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
                VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS.
                1 DSGVO).
              </p>
              <p className="mb-5">
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
              </p>
              <h1 className="text-lg font-medium mb-5">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h1>
              <p className="mb-5">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Recht auf Datenübertragbarkeit
              </h1>
              <p className="mb-5">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
              <h1 className="text-lg font-medium mb-5">
                SSL- bzw. TLS-Verschlüsselung
              </h1>
              <p className="mb-5">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS- Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>
              <p className="mb-5">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Auskunft, Löschung und Berichtigung
              </h1>
              <p className="mb-5">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit an uns wenden.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Recht auf Einschränkung der Verarbeitung
              </h1>
              <p className="mb-5">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit an uns wenden. Das Recht auf Einschränkung der
                Verarbeitung besteht in folgenden Fällen:
              </p>
              <p className="mb-5">
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Wenn die Verarbeitung
                Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                können Sie statt der Löschung die Einschränkung der
                Datenverarbeitung verlangen.
              </p>
              <p className="mb-5">
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Wenn Sie einen Widerspruch
                nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung
                zwischen Ihren und unseren Interessen vorgenommen werden.
                Solange noch nicht feststeht, wessen Interessen überwiegen,
                haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </p>
              <p className="mb-5">
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
                abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
              </p>
              <h1 className="text-lg font-medium mb-5">Server-Log-Dateien</h1>
              <p className="mb-5">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log- Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <p className="mb-5">
                Browsertyp und Browserversion verwendetes Betriebssystem
                Referrer URL Hostname des zugreifenden Rechners Uhrzeit der
                Serveranfrage IP-Adresse
              </p>
              <p className="mb-5">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen.
              </p>
              <p className="mb-5">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
                1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der
                Optimierung seiner Website – hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>
              <h1 className="text-lg font-medium mb-5">Kontaktformular</h1>
              <p className="mb-5">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p className="mb-5">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
              <p className="mb-5">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
              <h1 className="text-lg font-medium mb-5">
                Anfrage per E-Mail, Telefon oder Telefax
              </h1>
              <p className="mb-5">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mb-5">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
              <p className="mb-5">
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener
                Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
                – insbesondere gesetzliche Aufbewahrungsfristen – bleiben
                unberührt.
              </p>
              <h1 className="text-lg font-medium mb-5">
                7. Newsletter Newsletterdaten
              </h1>
              <p className="mb-5">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen
                möchten, benötigen wir von Ihnen eine E- Mail-Adresse sowie
                Informationen, welche uns die Überprüfung gestatten, dass Sie
                der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
                Empfang des Newsletters einverstanden sind. Weitere Daten werden
                nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten
                verwenden wir ausschließlich für den Versand der angeforderten
                Informationen und geben diese nicht an Dritte weiter.
              </p>
              <p className="mb-5">
                Die Verarbeitung der in das Newsletteranmeldeformular
                eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte
                Einwilligung zur Speicherung der
              </p>
              <p className="mb-5">
                Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des
                Newsletters können Sie jederzeit widerrufen, etwa über den
                „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits
                erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf
                unberührt.
              </p>
              <p className="mb-5">
                Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
                hinterlegten Daten werden von uns bis zu Ihrer Austragung aus
                dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter
                gespeichert und nach der Abbestellung des Newsletters oder nach
                Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir
                behalten uns vor, E-Mail-Adressen aus unserem
                Newsletterverteiler nach eigenem Ermessen im Rahmen unseres
                berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu
                löschen oder zu sperren.
              </p>
              <p className="mb-5">
                Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre
                E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf.
                in einer Blacklist gespeichert, um künftige Mailings zu
                verhindern. Die Daten aus der Blacklist werden nur für diesen
                Zweck verwendet und nicht mit anderen Daten zusammengeführt.
                Dies dient sowohl Ihrem Interesse als auch unserem Interesse an
                der Einhaltung der gesetzlichen Vorgaben beim Versand von
                Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1
                lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich
                nicht befristet. Sie können der Speicherung widersprechen,
                sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
