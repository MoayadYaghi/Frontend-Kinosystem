import React, { Component } from "react";
import "./SmorollImpres.css";
import { Link } from "react-router-dom";

class DealDW extends Component {
  

  render() {
    const ShopLink = "/Shop";

    return (
      <div className="Informationen" id="AGB">
        <div className="Inf-Box">AGBs</div>
      <div className="Gesamtdiv">
      
        <div className="Überschrift2">Allgemeine Verkaufsbedingungen</div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Geltungsbereich
          </div>
          <div className="Text">
            Diese Geschäftsbedingungen gelten für alle Käufe bei Kreative Gruppe
            42, die von Privatkunden getätigt werden. Privatkunden in diesem
            Sinne sind Personen mit Wohnsitz und Lieferadresse in der
            Bundesrepublik Deutschland, soweit die von ihnen bestellten Waren
            weder ihrer gewerblichen noch ihrer selbstständigen beruflichen
            Tätigkeit zugerechnet werden können.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Preise und Versandkosten
          </div>
          <div className="Text">
            Die ausgezeichneten Preise sind Endpreise inkl. Umsatzsteuer. Es
            gilt der Betrag, der jeweils zum Zeitpunkt der verbindlichen
            Bestellung ausgewiesen ist. Hinzu kommen Versandkosten, die von der
            Versandart und der Größe und dem Gewicht der von Ihnen bestellten
            Ware(n) abhängig sind. Über die Einzelheiten können Sie sich unter{" "}
            <Link to={ShopLink}>Shop</Link> informieren. Die regelmäßigen Kosten
            der Rücksendung, die im Falle einer Rückgabe der Ware durch Sie in
            Ausübung Ihres Widerrufsrechts entstehen, tragen wir . Bei Ausübung
            Ihres Widerrufsrechts erstatten wir Ihnen auch die Versandkosten
            zurück.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Zahlung
          </div>
          <div className="Text">
            Die Bezahlung erfolgt bei Lieferung mittels <br />
            - Kreditkarte <br />
            - PayPal <br />
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Zahlungsverzug
          </div>
          <div className="Text">
            Kommen Sie in Zahlungsverzug, so ist Kreative Gruppe 42 berechtigt,
            Verzugszinsen in Höhe von 5 Prozentpunkten über dem von der
            Deutschen Bundesbank für den Zeitpunkt der Bestellung bekannt
            gegebenen Basiszinssatz p.a. zu fordern. Falls Kreative Gruppe 42
            ein höherer Verzugsschaden nachweisbar entstanden ist, ist Kreative
            Gruppe 42 berechtigt, diesen geltend zu machen.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Zurückbehaltungsrecht
          </div>
          <div className="Text">
            Zur Ausübung eines Zurückbehaltungsrechts ist der Kunde nur insoweit
            befugt, als sein Gegenanspruch auf demselben Vertragsverhältnis
            beruht.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Lieferung
          </div>
          <div className="Text">
            (1) Die Lieferung erfolgt an die vom Kunden angegebene
            Lieferanschrift, innerhalb von <br />
            - Deutschland <br />
            - Schweiz <br />
            (2) Macht höhere Gewalt (Naturkatastrophen, Krieg, Bürgerkrieg,
            Terroranschlag) die Lieferung oder eine sonstige Leistung dauerhaft
            unmöglich, ist eine Leistungspflicht von Kreative Gruppe 42
            ausgeschlossen. Bereits gezahlte Beträge werden von Kreative Gruppe
            42 unverzüglich erstattet. <br />
            (3) Kreative Gruppe 42 kann außerdem die Leistung verweigern, soweit
            diese einen Aufwand erfordert, der unter Beachtung des Inhalts des
            Kaufvertrages und der Gebote von Treu und Glauben in einem groben
            Missverhältnis zu dem Interesse des Kunden an der Erfüllung des
            Kaufvertrages steht. Bereits gezahlte Beträge werden von Kreative
            Gruppe 42 unverzüglich erstattet. <br />
            (4) Sperrgut (Pakete mit einem größeren Volumen als 1 qm) werden in
            der Regel per Spedition geliefert. Kreative Gruppe 42 weist
            ausdrücklich darauf hin, dass diese Ware nicht ins Haus getragen
            wird.  <br />
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Günstige Versandart bei Rücksendung
          </div>
          <div className="Text">
            (1) Bitte verwenden Sie bei der Rücksendung der Ware und des
            Zubehörs nach Möglichkeit die Originalverpackung, auch wenn diese
            durch eine Öffnung zur Funktionsprüfung beschädigt sein sollte.{" "}
            <br />
            (2) Bitte verwenden Sie zur Rücksendung den der Warenlieferung
            beigefügten, vollständig frankierten und adressierten
            Rücksendeaufkleber. Es handelt sich dabei um die einfachste und
            kostengünstigste Versandmöglichkeit. Sie trifft keine Verpflichtung
            zur Verwendung dieses Rücksendeverfahrens. Wenn Sie allerdings eine
            unnötig teure Versandart wählen, können Sie unter Umständen
            verpflichtet sein, die gegenüber einer günstigen Versandart erhöhten
            Kosten an uns zu zahlen. <br />
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Eigentumsvorbehalt
          </div>
          <div className="Text">
            Bis zur vollständigen Begleichung aller gegen den Kunden bestehender
            Ansprüche aus dem Kaufvertrag bleibt die gelieferte Ware im Eigentum
            von Kreative Gruppe 42. Solange dieser Eigentumsvorbehalt besteht,
            darf der Kunde die Ware weder weiterveräußern noch über die Ware
            verfügen; insbesondere darf der Kunde Dritten vertraglich keine
            Nutzung an der Ware einräumen.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Mängelrechte
          </div>
          <div className="Text">
            (1) Ein bereits bei der Lieferung mangelhaftes Produkt
            (Gewährleistungsfall) wird Kreative Gruppe 42 nach Wahl des Kunden
            auf Kosten von Kreative Gruppe 42 durch ein mangelfreies ersetzen
            oder fachgerecht reparieren lassen (Nacherfüllung). Der Kunde wird
            darauf hingewiesen, dass kein Gewährleistungsfall vorliegt, wenn das
            Produkt bei Gefahrübergang die vereinbarte Beschaffenheit hatte. Ein
            Gewährleistungsfall liegt insbesondere in folgenden Fällen nicht
            vor: <br />
            a) bei Schäden, die beim Kunden durch Missbrauch oder unsachgemäßen
            Gebrauch entstanden sind, <br />
            b) bei Schäden, die dadurch entstanden sind, dass die Produkte beim
            Kunden schädlichen äußeren Einflüssen ausgesetzt worden sind
            (insbesondere extremen Temperaturen, Feuchtigkeit, außergewöhnlicher
            physikalischer oder elektrischer Beanspruchung,
            Spannungsschwankungen, Blitzschlag, statischer Elektrizität, Feuer).{" "}
            <br />
            (2) Kreative Gruppe 42 leistet ferner keine Gewähr für einen Fehler,
            der durch unsachgemäße Reparatur durch einen nicht vom Hersteller
            autorisierten Servicepartner entstanden ist. <br />
            (3) Erfordert die vom Kunden gewünschte Art der Nacherfüllung
            (Ersatzlieferung oder Reparatur) einen Aufwand, der in Anbetracht
            des Produktpreises unter Beachtung des Vertragsinhaltes und der
            Gebote von Treu und Glauben in einem groben Missverhältnis zu dem
            Leistungsinteresse des Kunden steht – wobei insbesondere der Wert
            des Kaufgegenstandes im mangelfreien Zustand, die Bedeutung des
            Mangels und die Frage zu berücksichtigen sind, ob auf die andere
            Art der Nacherfüllung ohne erhebliche Nachteile für den Kunden
            zurückgegriffen werden kann – beschränkt sich der Anspruch des
            Kunden auf die jeweils andere Art der Nacherfüllung. Das Recht von
            Kreative Gruppe 42, auch diese andere Art der Nacherfüllung unter
            der vorgenannten Voraussetzung zu verweigern, bleibt unberührt. {" "}
            <br />
            (4) Sowohl für den Fall der Reparatur als auch für den Fall der
            Ersatzlieferung ist der Kunde verpflichtet, das Produkt auf Kosten
            von Kreative Gruppe 42 unter Angabe der Auftragsnummer an die von
            ihr angegebene Rücksendeadresse einzusenden. Vor der Einsendung hat
            der Kunde von ihm eingefügte Gegenstände aus dem Produkt zu
            entfernen. Kreative Gruppe 42 ist nicht verpflichtet, das Produkt
            auf den Einbau solcher Gegenstände zu untersuchen. Für den Verlust
            solcher Gegenstände haftet Kreative Gruppe 42 nicht, es sei denn, es
            war bei Rücknahme des Produktes für Kreative Gruppe 42 ohne Weiteres
            erkennbar, dass ein solcher Gegenstand in das Produkt eingefügt
            worden ist (in diesem Fall informiert Kreative Gruppe 42 den Kunden
            und hält den Gegenstand für den Kunden zur Abholung bereit; der
            Kunde trägt die dabei entstehenden Kosten). Der Kunde hat zudem,
            bevor er ein Produkt zur Reparatur oder zum Austausch einsendet,
            gegebenenfalls separate Sicherungskopien der auf dem Produkt
            befindlichen Systemsoftware, der Anwendungen und aller Daten auf
            einem separaten Datenträger zu erstellen und alle Passwörter zu
            deaktivieren. Eine Haftung für Datenverlust wird nicht übernommen.
            Ebenso obliegt es dem Kunden, nachdem ihm das reparierte Produkt
            oder das Ersatzprodukt zurückgesandt worden ist, die Software und
            Daten zu installieren und die Passwörter zu reaktivieren.  <br />
            (5) Sendet der Kunde die Ware ein, um ein Austauschprodukt zu
            bekommen, richtet sich die Rückgewähr des mangelhaften Produktes
            nach folgender Maßgabe: Sofern der Kunde die Ware zwischen Lieferung
            und Rücksendung in mangelfreiem Zustand benutzen konnte, hat dieser
            den Wert der von ihm gezogenen Nutzungen zu erstatten. Für einen
            nicht durch den Mangel eingetretenen Untergang oder die weitere
            Verschlechterung der Ware sowie für die nicht durch den Mangel
            eingetretene Unmöglichkeit der Herausgabe der Ware im Zeitraum
            zwischen Lieferung der Ware und Rücksendung der Ware hat der Kunde
            Wertersatz zu leisten. Der Kunde hat keinen Wertersatz für die durch
            den bestimmungsgemäßen Gebrauch der Ware entstandene
            Verschlechterung der Ware zu leisten. Die Pflicht zum Wertersatz
            entfällt für die Rücksendung eines mangelhaften Produktes im
            Gewährleistungsfall ferner, <br />
            a) wenn sich der zum Rücktritt berechtigende Mangel erst während der
            Verarbeitung oder Umgestaltung gezeigt hat, <br />
            b) wenn Kreative Gruppe 42 die Verschlechterung oder den Untergang
            zu vertreten hat oder der Schaden auch bei Kreative Gruppe 42
            eingetreten wäre, <br />
            c) wenn die Verschlechterung oder der Untergang beim Kunden
            eingetreten ist, obwohl dieser diejenige Sorgfalt beachtet hat, die
            er in eigenen Angelegenheiten anzuwenden pflegt. <br />
            (6) Die Schadensersatzpflicht des Kunden bei einer vom Kunden zu
            vertretenden Verletzung der Rücksendungspflicht richtet sich nach
            Maßgabe der gesetzlichen Bestimmungen. <br />
            (7) Der Kunde kann nach seiner Wahl vom Vertrag zurücktreten oder
            den Kaufpreis mindern, wenn die Reparatur oder Ersatzlieferung
            innerhalb einer angemessenen Frist nicht zu einem vertragsgerechten
            Zustand des Produktes geführt hat. 
            <br />
            (8) Darüber hinaus können auch Ansprüche gegen den Hersteller im
            Rahmen einer von diesem eingeräumten Garantie bestehen, die sich
            nach den entsprechenden Garantiebedingungen richten. 
            <br />
            (9) Die gesetzliche Gewährleistung von Kreative Gruppe 42 endet zwei
            Jahre ab Lieferung der Ware. Die Frist beginnt mit dem Erhalt der
            Ware.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Anwendbares Recht
          </div>
          <div className="Text">
            Der zwischen Ihnen und Kreative Gruppe 42 abgeschlossene Vertrag
            unterliegt ausschließlich dem Recht der Bundesrepublik Deutschland
            unter ausdrücklichem Ausschluss des UN-Kaufrechts. Unberührt davon
            bleiben die zwingenden Bestimmungen des Staates, in dem Sie Ihren
            gewöhnlichen Aufenthalt haben.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Gerichtsstand
          </div>
          <div className="Text">
            Sofern Sie entgegen Ihren Angaben bei der Bestellung keinen Wohnsitz
            in der Bundesrepublik Deutschland haben oder nach Vertragsabschluss
            Ihren Wohnsitz ins Ausland verlegen oder Ihr Wohnsitz zum Zeitpunkt
            der Klageerhebung nicht bekannt ist, ist Gerichtsstand für alle
            Streitigkeiten aus und im Zusammenhang mit dem Vertragsverhältnis
            Deutschland.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Jugendschutz
          </div>
          <div className="Text">
            Sollten Waren gekauft werden, die dem Jugendschutz unterliegen, wird
            durch geeignete Maßnahmen eine Altersverifikation durchgeführt, um
            die Identität und das Alter des Käufers zu überprüfen. Eine Übergabe
            der Ware erfolgt nur, wenn der Kunde die Volljährigkeit nachweisen
            konnte.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Streitbeilegung
          </div>
          <div className="Text">
            Allgemeine Informationspflichten zur alternativen Streitbeilegung
            nach Art. 14 Abs. 1 ODR-VO und § 36 VSBG
            (Verbraucherstreitbeilegungsgesetz): <br />
            Die europäische Kommission stellt eine Plattform zur
            Online-Streitbelegung (OS) zur Verfügung, die Sie unter dieser
            Adresse finden: http://ec.europa.eu/consumers/odr/ . Zur Teilnahme
            an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle sind wir nicht verpflichtet und auch
            nicht bereit.
          </div>
        </div>

        <div>
          <div className="unterÜberschrift">
            <br />
            Schlussbestimmungen
          </div>
          <div className="Text">
            (1) Sollten einzelne Bestimmungen dieses Vertrages ganz oder
            teilweise unwirksam oder nichtig sein oder werden, so wird dadurch
            die Wirksamkeit des Vertrages im Übrigen nicht berührt, insoweit ein
            Vertragspartner hierdurch nicht unangemessen benachteiligt wird.{" "}
            <br />
            (2) Änderungen oder Ergänzungen dieses Vertrages bedürfen der
            Schriftform.
          </div>
        </div>

        <p>
          Quelle: <a href="https://www.advocado.de/">advocado </a>
        </p>
      </div></div>
    );
  }
}
export default DealDW;
