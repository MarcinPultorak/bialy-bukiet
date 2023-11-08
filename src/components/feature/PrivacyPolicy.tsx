import { FC } from "react";
import Link from "next/link";

const PrivacyPolicy: FC = () => {
  const hClasses = "text-center text-slate-600 text-base sm:text-xl lg:text-2xl font-bold mt-12";
  const pClasses = "text-slate-600 text-justify text-xs sm:text-sm lg:text-base mt-4";
  const ulClasses = "text-slate-600 mt-4 list-disc list-inside space-y-1 text-xs sm:text-sm lg:text-base";

  return (
    <section className="max-w-screen-2xl mx-auto w-full h-full py-20 px-5 sm:px-10">
      <h2 className="text-center text-slate-600 text-3xl">Polityka Prywatności</h2>
      <h3 className={hClasses}>§ 1 Postanowienia ogólne</h3>
      <p className={pClasses}>
        1.Administratorem danych osobowych jest firma MAGDA GRAJEK-ANTONOWICZ EVENT, z siedzibą przy Łasko 52B, 73-240 Bierzwnik, o numerze NIP: 2810057211. Z
        MAGDA GRAJEK-ANTONOWICZ EVENT można kontaktować się pisemnie na adres wskazany w zdaniu poprzedzającym lub drogą e-mailową na adres:
        bialybukietweddingplanner@gmail.com
      </p>
      <p className={pClasses}>2.Na podstawie Art. 37 RODO, firma &quot;MAGDA GRAJEK-ANTONOWICZ EVENT&quot; nie powołała Inspektora Ochrony Danych.</p>
      <p className={pClasses}>
        3.Polityka prywatności stanowi integralną część Regulaminu. Korzystając z oferowanych przez nas usług, powierzasz nam swoje informacje. Niniejszy
        dokument służy jedynie jako pomoc w zrozumieniu, jakie informacje i dane są zbierane i w jakim celu oraz do czego są wykorzystywane. Te dane są bardzo
        dla nas ważne, dlatego prosimy o dokładne zapoznanie się z tym dokumentem gdyż określa on zasady oraz sposoby przetwarzania i ochrony danych osobowych.
        Dokument ten określa także zasady stosowania plików „Cookies”.
      </p>
      <p className={pClasses}>
        4.Informujemy, że przestrzegamy zasad ochrony danych osobowych oraz wszelkich uregulowań prawnych, które są przewidziane Ustawą o ochronie danych
        osobowych oraz Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
        przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.
      </p>
      <p className={pClasses}>
        5.Na żądanie osoby, której dane osobowe są przetwarzane udzielamy wyczerpujących informacji w jaki sposób wykorzystujemy jego dane osobowe. Zawsze w
        jasny sposób staramy się poinformować o danych, które gromadzimy, w jaki sposób je wykorzystujemy, jakim celom mają służyć i komu je przekazujemy, jaką
        zapewniamy ochronę tych danych przy przekazaniu innym podmiotom oraz udzielamy informacji o instytucjach, z którymi należy się skontaktować w razie
        wątpliwości.
      </p>
      <h3 className={hClasses}>§ 2 Zasady prywatności</h3>
      <p className={pClasses}>1.Szanujemy Twoją prywatność. Pragniemy zagwarantować Ci wygodę korzystania z naszych usług.</p>
      <p className={pClasses}>
        2.Cenimy zaufanie, jakim Nas obdarzasz, powierzając nam swoje dane osobowe w celu realizacji usług. Zawsze korzystamy z danych osobowych w sposób
        uczciwy oraz tak, aby nie zawieść Twojego zaufania, tylko w zakresie niezbędnym do realizacji usług.
      </p>
      <p className={pClasses}>
        3.Jako Użytkownik masz prawo do uzyskania pełnych i jasnych informacji o tym, w jaki sposób wykorzystujemy Twoje dane osobowe i do jakich celów są
        niezbędne. Zawsze w klarowny sposób informujemy o danych, które zbieramy, w jaki sposób i komu je udostępniamy oraz udzielamy informacji o podmiotach, z
        którymi należy się skontaktować w razie wątpliwości.
      </p>
      <p className={pClasses}>
        4.W razie wątpliwości odnośnie wykorzystywania przez nas Twoich danych osobowych, niezwłocznie podejmiemy działania w celu wyjaśnienia i rozwiania
        takich wątpliwości. W sposób wyczerpujący odpowiadamy na wszystkie pytania z tym związane.
      </p>
      <p className={pClasses}>5.Podejmiemy wszystkie uzasadnione działania, aby chronić Twoje dane przed nienależytym i niekontrolowanym wykorzystaniem</p>
      <p className={pClasses}>6.Podstawą prawną przetwarzania Twoich danych osobowych jest:</p>
      <ul className={ulClasses}>
        <li>
          art. 6 ust. 1 lit. a osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbieokreślonych celów
        </li>
      </ul>
      <p className={pClasses}>
        7.Twoje dane osobowe związane z zawarciem i realizacją umowy przetwarzane będą przez okres jej realizacji, a także przez okres nie dłuższy niż
        przewidują to przepisy prawa, w tym przepisy Kodeksu cywilnego oraz ustawy o rachunkowości, tj. nie dłużej niż przez 10 lat, licząc od końca roku
        kalendarzowego w którym ostatnia umowa została wykonana.
      </p>
      <p className={pClasses}>8.Twoje dane osobowe przetwarzane w celu zawarcia i wykonania przyszłych umów będą przetwarzane do czasu zgłoszenia sprzeciwu.</p>
      <p className={pClasses}>
        9.Przysługuje Ci prawo do: dostępu do swoich danych osobowych i otrzymania kopii danych osobowych podlegających przetwarzaniu, sprostowania swoich
        nieprawidłowych danych; żądania usunięcia danych (prawo do bycia zapomnianym) w przypadku wystąpienia okoliczności przewidzianych w art. 17 RODO;
        żądania ograniczenia przetwarzania danych w przypadkach wskazanych w art. 18 RODO, wniesienia sprzeciwu wobec przetwarzania danych w przypadkach
        wskazanych w art. 21 RODO, przenoszenia dostarczonych danych, przetwarzanych w sposób zautomatyzowany.
      </p>
      <p className={pClasses}>
        10.eżeli uważasz, że Twoje dane osobowe są przetwarzane niezgodnie z prawem, możecie wnieść skargę do organu nadzorczego (Urząd Ochrony Danych
        Osobowych, ul. Stawki 2, Warszawa). Jeśli potrzebujesz dodatkowych informacji związanych z ochroną danych osobowych lub chcesz skorzystać z
        przysługujących praw, skontaktuj się z nami listownie na adres korespondencyjny
      </p>
      <p className={pClasses}>
        11.Przestrzegamy wszystkich obowiązujących przepisów i regulacji dotyczących ochrony danych i będziemy współpracować z organami zajmującymi się ochroną
        danych oraz uprawnionymi do tego organami ścigania. W przypadku braku przepisów dotyczących ochrony danych, będziemy postępować zgodnie z ogólnie
        przyjętymi zasadami ochrony danych, zasadami współżycia społecznego jak i ustalonymi zwyczajami.
      </p>
      <p className={pClasses}>
        12.W razie pytań, zapraszamy do kontaktu za pomocą strony, z której zostałeś przekierowany do niniejszej Polityki prywatności. Prośba o kontakt zostanie
        niezwłocznie przekazana do odpowiedniej powołanej do tego osoby.
      </p>
      <p className={pClasses}>13.Aby ułatwić nam odpowiedź bądź ustosunkowanie się do podanych informacji, prosimy o podanie imienia i nazwiska</p>
      <h3 className={hClasses}>§ 3 Zakres i cel zbierania danych osobowych</h3>
      <p className={pClasses}>1.Przetwarzamy niezbędne dane osobowe w celu realizacji usług oraz w celach księgowych i tylko takich.</p>
      <p className={pClasses}>2.Zbieramy, przetwarzamy i przechowujemy następujące dane użytkowników:</p>
      <ul className={ulClasses}>
        <li>imię i nazwisko,</li>
        <li>adres poczty elektronicznej (e-mail),</li>
        <li>numer telefonu (komórkowy, stacjonarny),</li>
        <li>inne dobrowolnie przekazane nam dane osobowe.</li>
      </ul>
      <p className={pClasses}>3.Podanie powyższych danych przez jest całkowicie dobrowolne ale także i niezbędne do pełnej realizacji usług.</p>
      <p className={pClasses}>
        4.Możemy przesyłać dane osobowe do serwerów znajdujących się poza krajem Twojego zamieszkania lub do podmiotów powiązanych, stron trzecich z siedzibą w
        innych krajach w tym krajach z obszaru EOG (Europejski Obszar Gospodarczy, EOG ang. European Economic Area, EEA – strefa wolnego handlu i Wspólny Rynek,
        obejmujące państwa Unii Europejskiej i Europejskiego Stowarzyszenia Wolnego Handlu EFTA) w celu przetwarzania danych osobowych przez takie podmioty w
        naszym imieniu zgodnie z postanowieniami niniejszej Polityki prywatności oraz obowiązującymi przepisami prawa, zwyczajami jak i regulacjami dotyczącymi
        ochrony danych.
      </p>
      <p className={pClasses}>5.Dostęp do Twoich danych mogą posiadać podmioty świadczące dla usługi niezbędne do prowadzenia serwisu tj.:</p>
      <ul className={ulClasses}>
        <li>Firmy hostingowe, świadczące usługi hostingu lub usług pokrewnych dla Administratora</li>
      </ul>
      <h3 className={hClasses}>§ 4 Pliki Cookie</h3>
      <p className={pClasses}>
        1.Stosuje pliki cookie lub podobne technologie (zwane dalej łącznie: „plikami cookie”) poprzez które należy rozumieć dane informatyczne, w szczególności
        pliki tekstowe, przeznaczone do korzystania ze strony internetowej i przechowywane w urządzeniach końcowych Użytkowników przeglądających strony.
        Informacje zbierane przy pomocy plików cookie pozwalają dostosowywać usługi i treści do indywidualnych potrzeb, a także preferencji użytkowników, jak
        również służą do opracowywania ogólnych statystyk dotyczących korzystania przez użytkowników ze stron. Dane gromadzone przy użyciu plików cookie są
        zbierane wyłącznie w celu wykonywania określonych funkcji na rzecz Użytkowników i są zaszyfrowane w sposób uniemożliwiający dostęp do nich osobom
        nieuprawnionym
      </p>
      <p className={pClasses}>2.Na naszej stronie stosujemy pliki cookie</p>
      <p className={pClasses}>
        3.W ramach naszej strony internetowej, stosowane są następujące rodzaje plików cookie ze względu na niezbędność do realizacji usług:
      </p>
      <p className={pClasses}>
        4.Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookie w urządzeniu
        końcowym. Użytkownik przeglądający stronę internetową może samodzielnie i w każdym czasie zmienić ustawienia dotyczące plików cookie, określając warunki
        ich przechowywania i uzyskiwania dostępu przez pliki cookie do swojego urządzenia. Zmiany ustawień, o których mowa w zdaniu poprzednim, Klient może
        dokonać za pomocą ustawień przeglądarki internetowej. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną
        obsługę plików cookie w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym zamieszczeniu plików cookie na urządzeniu Użytkownika.
        Szczegółowe informacje o możliwości i sposobach obsługi plików cookie dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).
      </p>
      <p className={pClasses}>
        5.Korzystanie ze strony internetowej, bez zmiany ustawień w zakresie plików cookie, oznacza wyrażenie zgody na zapisywanie plików cookie. Klienta zawsze
        może wycofać zgodę poprzez zmianę ustawień dotyczących plików cookie.Informacje w jaki sposób dokonać konfiguracji ustawień plików cookie w
        przykładowych przeglądarkach internetowych Użytkownik może znaleźć tutaj:
      </p>
      <ul className={ulClasses}>
        <li>
          <Link
            target="_blank"
            href="https://support.microsoft.com/pl-pl/microsoft-edge/wy%C5%9Bwietlanie-i-usuwanie-historii-przegl%C4%85darki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4"
          >
            Edge
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://support.microsoft.com/pl-pl/topic/jak-usun%C4%85%C4%87-pliki-cookie-w-programie-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
          >
            Internet Explorer
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://support.google.com/chrome/answer/95647?hl=pl">
            Chrome
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac">
            Safari
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl"
          >
            Firefox
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://help.opera.com/pl/latest/web-preferences/#cookies">
            Opera
          </Link>
        </li>
      </ul>
      <p className={pClasses}>Urządzenia mobilne:</p>
      <ul className={ulClasses}>
        <li>
          <Link target="_blank" href="https://support.google.com/chrome/answer/95647?hl=pl">
            Android{" "}
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://support.apple.com/pl-pl/HT201265">
            Safari (iOS)
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://support.microsoft.com/pl-pl/windows/windows-phone-7-3ebc303c-59c0-d367-3995-f258b184fabb">
            Windows Phone
          </Link>
        </li>
      </ul>

      <h3 className={hClasses}>§ 5 Prawa i obowiązki</h3>
      <p className={pClasses}>
        1.Mamy prawo a w przypadkach prawem określonych także i ustawowy obowiązek do przekazania wybranych bądź wszystkich informacji dotyczących danych
        osobowych organom władzy publicznej bądź osobom trzecim, które zgłoszą takie żądanie udzielenia informacji na podstawie obowiązujących przepisów prawa
        polskiego.
      </p>
      <p className={pClasses}>2.Użytkownik ma prawo do:</p>
      <ul className={ulClasses}>
        <li>
          dostępu do danych osobowych Użytkownikowi przysługuje prawo uzyskania dostępu do swoich danych osobowych, realizowane na żądanie złożone do
          Administratora
        </li>
        <li>
          sprostowania danych osobowych Użytkownikowi przysługuje prawo żądania od Administratora niezwłocznego sprostowania danych osobowych, które są
          nieprawidłowe lub / oraz uzupełnienia niekompletnych danych osobowych, realizowane na żądanie złożone do Administratora
        </li>
        <li>
          usunięcia danych osobowychUżytkownikowi przysługuje prawo żądania od Administratora niezwłocznego usunięcia danych osobowych, realizowane na żądanie
          złożone do Administratora W przypadku kont użytkowników, usunięcie danych polega na anonimizacji danych umożliwiających identyfikację Użytkownika.
          Administrator zastrzega sobie prawo wstrzymania realizacji żądania usunięcia danych w celu ochrony prawnie uzasadnionego interesu Administratora (np.
          w gdy Użytkownik dopuścił się naruszenia Regulaminu czy dane zostały pozyskane wskutek prowadzonej korespondencji). W przypadku usługi Newsletter,
          Użytkownik ma możliwość samodzielnego usunięcia swoich danych osobowych korzystając z odnośnika umieszczonego w każdej przesyłanej wiadomości e-mail.
        </li>
        <li>
          ograniczenia przetwarzania danych osobowych Użytkownikowi przysługuje prawo ograniczenia przetwarzania danych osobowych w przypadkach wskazanych w
          art. 18 RODO, m.in. kwestionowania prawidłowość danych osobowych, realizowane na żądanie złożone do Administratora
        </li>
        <li>
          przenoszenia danych osobowych Użytkownikowi przysługuje prawo uzyskania od Administratora, danych osobowych dotyczących Użytkownika w
          ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego, realizowane na żądanie złożone do Administratora
        </li>
        <li>
          wniesienia sprzeciwu wobec przetwarzania danych osobowych Użytkownikowi przysługuje prawo wniesienia sprzeciwu wobec przetwarzania jego danych
          osobowych w przypadkach określonych w art. 21 RODO, realizowane na żądanie złożone do Administratora
        </li>
        <li>wniesienia skargi Użytkownikowi przysługuje prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.</li>
      </ul>
    </section>
  );
};

export default PrivacyPolicy;
