import React, { Component } from "react";

import styles from "./Photovoltaics.module.css";
import FirstSection from "../FirstSection/FirstSection";
import BasicSection from "../BasicSection/BasicSection";
import Button from "../UI/Button/Button";
import Services from "./Services/Services";

class Photovoltaics extends Component {
  contactButtonClickedHandler = () => {
    this.props.history.push({ pathname: "/kontakt" });
  };

  render() {
    return (
      <React.Fragment>
        <FirstSection
          title="Fotowoltaika dla Twojego domu i biznesu"
          content="Postaw na odnawialne źródła energii wykorzystując nowoczesne rozwiązania z zakresu technologii fotowoltaicznych i obniż swój rachunek za prąd."
          backgroundImage="https://opton.net.pl/wp-content/uploads/2020/09/pexels-pixabay-356036-scaled.jpg"
          contactButton
        />
        <BasicSection>
          <div className={styles.Wrapper}>
            <div className={styles.FirstStepTitle}>
              <h2>
                Zrób pierwszy krok, <br /> my zrobimy drugi
              </h2>
            </div>
            <div className={styles.FirstStepContent}>
              <p>
                Zacznijmy od zebrania rachunków za energię elektryczną z okresu
                jednego roku. Dogłębna analiza pozwoli nam na precyzyjne
                określenie zużycia energii elektrycznej w Twoim gospodarstwie.
                Na tej podstawie określimy wielkość instalacji fotowoltaicznej.
              </p>
              <p>
                Bardzo ważną kwestią jest wybór miejsca montażu instalacji
                fotowoltaicznej. Podczas spotkania określamy dostępność
                powierzchni montażowej oraz wyznaczymy orientację – najlepsze
                uzyski będą z instalacji skierowanych na stronę południową.
                Powierzchnia zajmowana przez domowe instalacje fotowoltaiczne
                zależy oczywiście od mocy takiej instalacji, czyli ilości
                zamontowanych modułów. Odchylenia na stronę wschodnią lub
                zachodnią nie wykluczają montażu instalacji.
              </p>
              <p>
                Informacje, które zgromadzimy podczas przechodzenia przez
                poszczególne kroki, pozwolą nam opracować ofertę. Po pozytywnej
                decyzji klienta umawiamy dogodny termin i realizujemy zlecenie.
              </p>
            </div>
          </div>
        </BasicSection>
        <BasicSection>
          <Services />
        </BasicSection>
        <BasicSection customClass={styles.Contact}>
          <h2>Dołącz do grona naszych klientów!</h2>
          <Button clicked={this.contactButtonClickedHandler}>
            SKONTAKTUJ SIĘ Z NAMI
          </Button>
        </BasicSection>
      </React.Fragment>
    );
  }
}

export default Photovoltaics;
