"use client";

import { useEffect, useMemo, useState } from "react";

const identity =
  "Minun tehtäväni ei ole miellyttää yrittäjää. Minun tehtäväni on auttaa häntä näkemään, onko jäsenyys hänelle järkevä päätös — ja jos on, johdan hänet päätökseen.";

const openers = [
  "En lähde esittelemään kaikkea. Kysyn ensin pari asiaa ja sanon sitten suoraan, onko jäsenyydessä teille järkeä.",
  "Soitan siksi, että haluan nopeasti selvittää, olisiko tästä teille aidosti hyötyä.",
  "Pidän tämän tiiviinä: haluan ymmärtää, mikä teillä on yrittäjänä juuri nyt tärkeintä."
];

const closes = [
  "Kuulostaa siltä, että hyöty on selkeä. Otetaanko tämä nyt kuntoon?",
  "Mikä tässä estää päätöksen tänään?",
  "Lähdetäänkö tällä mukaan?",
  "Tehdäänkö jäsenyys nyt voimaan?",
  "Jos katsotaan tätä yrittäjän näkökulmasta, tämä on pieni päätös suhteessa hyötyyn. Laitetaanko voimaan?"
];

export default function Home() {
  const [section, setSection] = useState("kompassi");
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [saved, setSaved] = useState([]);
  const [morningDone, setMorningDone] = useState([false, false, false]);
  const [precallDone, setPrecallDone] = useState([false, false, false, false]);

  const [form, setForm] = useState({
    intentio: "",
    tila: "",
    ansa: "",
    ankkuri: "",
    future: "",
    aani: "",
    avaus: openers[0],
    klousi: closes[0],
    vakuuttava: "",
    hyvaksyntaa: "",
    huomenna: "",
    todiste: "",
    oppi: ""
  });

  useEffect(() => {
    const data = localStorage.getItem("huippumyyja-paivarutiini");
    if (data) setSaved(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (!running || timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((previous) => {
        if (previous <= 1) {
          clearInterval(interval);
          setRunning(false);
          alert("Harjoitus valmis.");
          return 0;
        }
        return previous - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running, timer]);

  const score = useMemo(() => {
    let points = 0;
    points += morningDone.filter(Boolean).length * 15;
    points += precallDone.filter(Boolean).length * 8;
    if (form.intentio.trim()) points += 8;
    if (form.ansa.trim()) points += 8;
    if (form.vakuuttava.trim()) points += 15;
    if (form.hyvaksyntaa.trim()) points += 10;
    if (form.huomenna.trim()) points += 14;
    return Math.min(points, 100);
  }, [morningDone, precallDone, form]);

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  function start(seconds) {
    setTimer(seconds);
    setRunning(true);
  }

  function format(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function toggleMorning(index) {
    const copy = [...morningDone];
    copy[index] = !copy[index];
    setMorningDone(copy);
  }

  function togglePrecall(index) {
    const copy = [...precallDone];
    copy[index] = !copy[index];
    setPrecallDone(copy);
  }

  function save() {
    const entry = { date: new Date().toISOString().slice(0, 10), score, ...form };
    const updated = [...saved, entry];
    setSaved(updated);
    localStorage.setItem("huippumyyja-paivarutiini", JSON.stringify(updated));
    alert("Päivä tallennettu.");
  }

  function clearCurrent() {
    if (!confirm("Tyhjennetäänkö tämän päivän lomake?")) return;
    setForm({
      intentio: "",
      tila: "",
      ansa: "",
      ankkuri: "",
      future: "",
      aani: "",
      avaus: openers[0],
      klousi: closes[0],
      vakuuttava: "",
      hyvaksyntaa: "",
      huomenna: "",
      todiste: "",
      oppi: ""
    });
    setMorningDone([false, false, false]);
    setPrecallDone([false, false, false, false]);
  }

  function clearSaved() {
    if (!confirm("Poistetaanko kaikki tallennetut päivät?")) return;
    setSaved([]);
    localStorage.removeItem("huippumyyja-paivarutiini");
  }

  return (
    <main className="container">
      <section className="hero">
        <div>
          <p className="eyebrow">Huippumyyjän käyttöjärjestelmä</p>
          <h1>Päivärutiini</h1>
          <p>Rutiini rakentaa tilan, jossa et hae hyväksyntää, vaan johdat keskustelua rauhallisesti, lämpimästi ja suoraan.</p>
        </div>
        <div className="scoreCard">
          <span>Päivän suoritus</span>
          <strong>{score}/100</strong>
          <div className="bar"><div style={{ width: `${score}%` }} /></div>
        </div>
      </section>

      <section className="timerBox">
        <div>
          <span className="small">Ajastin</span>
          <div className="timer">{timer === 0 && !running ? "00:00" : format(timer)}</div>
        </div>
        <div>
          <button className="secondary" onClick={() => setRunning(false)}>Pysäytä</button>
          <button className="secondary" onClick={() => { setRunning(false); setTimer(0); }}>Nollaa</button>
        </div>
      </section>

      <nav className="tabs">
        {[["kompassi", "Kompassi"], ["aamu", "Aamu 15 min"], ["puhelut", "Ennen soittoja"], ["ilta", "Päivän jälkeen"], ["pankki", "Voittopankki"]].map(([id, label]) => (
          <button key={id} className={section === id ? "tab active" : "tab"} onClick={() => setSection(id)}>{label}</button>
        ))}
      </nav>

      {section === "kompassi" && (
        <section className="grid">
          <Card title="30 päivän ydinlause" eyebrow="Identiteetti">
            <p className="quote">“{identity}”</p>
            <p className="small">Lue tämä ääneen ennen päivän ensimmäistä myyntiblokkia.</p>
          </Card>
          <Card title="Tämän päivän myyntikompassi" eyebrow="Tila ennen taktiikkaa">
            <label>Tämän päivän intentio</label>
            <textarea value={form.intentio} onChange={(e) => update("intentio", e.target.value)} placeholder="Esim. Johdan keskustelua rauhallisesti ja klousaan jokaisen relevantin keskustelun." />
            <label>Tavoitetila yhdellä sanalla</label>
            <textarea value={form.tila} onChange={(e) => update("tila", e.target.value)} placeholder="Esim. rauhallinen, terävä, lämmin, jämäkkä" />
          </Card>
          <Card title="Älä tee näitä tänään" eyebrow="Suoritusvirheet">
            <ul>
              <li>Älä selittele arvoa ennen kuin olet ymmärtänyt yrittäjän tilanteen.</li>
              <li>Älä kysy lupaa olla vakuuttava.</li>
              <li>Älä pehmennä klousia, jos hyöty on jo yhdessä todettu.</li>
              <li>Älä tulkitse “ei” hylkäykseksi. Se on dataa.</li>
            </ul>
          </Card>
          <Card title="Hyväksynnän hakemisen ansa" eyebrow="Tämän päivän vaarakohta">
            <textarea value={form.ansa} onChange={(e) => update("ansa", e.target.value)} placeholder="Missä tilanteessa alan miellyttää, kiirehtiä tai pehmentää? Miten toimin siinä kohdassa toisin?" />
          </Card>
        </section>
      )}

      {section === "aamu" && (
        <section className="card">
          <p className="eyebrow">Aamu</p>
          <h2>15 minuutin käynnistys</h2>
          <p className="lead">Tarkoitus: asenna tila, jossa olet lämmin, rauhallinen ja jämäkkä.</p>
          <Exercise title="Huippumyyjä-ankkuri" badge="1 · 7 min" checked={morningDone[0]} onCheck={() => toggleMorning(0)} onTimer={() => start(420)} button="Käynnistä 7 min">
            <p className="instruction">Muista 3 hetkeä, jolloin olit vakuuttava, itsevarma tai sait toisen ihmisen liikkeelle. Kun tunne on vahvimmillaan, purista peukalo ja keskisormi yhteen.</p>
            <textarea value={form.ankkuri} onChange={(e) => update("ankkuri", e.target.value)} placeholder="3 onnistumisen hetkeä..." />
          </Exercise>
          <Exercise title="Future pacing" badge="2 · 3 min" checked={morningDone[1]} onCheck={() => toggleMorning(1)} onTimer={() => start(180)} button="Käynnistä 3 min">
            <p className="instruction">Näe itsesi avaamassa keskustelu rauhallisesti, kysymässä tarkasti, käsittelemässä vastaväitteen ilman kiirettä ja tekemässä klousin luonnollisesti.</p>
            <textarea value={form.future} onChange={(e) => update("future", e.target.value)} placeholder="Miltä onnistunut myyntikeskustelu näyttää, kuulostaa ja tuntuu?" />
          </Exercise>
          <Exercise title="Ääniharjoitus" badge="3 · 5 min" checked={morningDone[2]} onCheck={() => toggleMorning(2)} onTimer={() => start(300)} button="Käynnistä 5 min">
            <p className="instruction">Lue avaus tai klousi kolmella tavalla: liian innokkaasti, liian varovasti ja lopuksi rauhallisesti kuin johtaja. Tempo 15 % alas.</p>
            <textarea value={form.aani} onChange={(e) => update("aani", e.target.value)} placeholder="Kirjoita päivän avaus tai klousauslause..." />
          </Exercise>
        </section>
      )}

      {section === "puhelut" && (
        <section className="card">
          <p className="eyebrow">Ennen soittoja</p>
          <h2>90 sekunnin tilaprotokolla</h2>
          <p className="lead">Hengitys → ryhti → ankkuri → ensimmäinen lause ääneen.</p>
          {["Hengitä 30 s: uloshengitys pidempänä kuin sisäänhengitys.", "Ryhti 30 s: hartiat alas, katse eteen.", "Ankkuri: peukalo + keskisormi yhteen.", "Sano ensimmäinen lause ääneen."].map((item, index) => (
            <label className="check" key={item}><input type="checkbox" checked={precallDone[index]} onChange={() => togglePrecall(index)} />{item}</label>
          ))}
          <button className="primary" onClick={() => start(90)}>Käynnistä 90 sek</button>
          <div className="grid">
            <Card title="Ensimmäinen lause" eyebrow="Avaus">
              <textarea value={form.avaus} onChange={(e) => update("avaus", e.target.value)} />
              {openers.map((line) => <button className="chip" key={line} onClick={() => update("avaus", line)}>{line}</button>)}
            </Card>
            <Card title="Klousi, jota et pehmennä" eyebrow="Päätös">
              <textarea value={form.klousi} onChange={(e) => update("klousi", e.target.value)} />
              {closes.map((line) => <button className="chip" key={line} onClick={() => update("klousi", line)}>{line}</button>)}
            </Card>
          </div>
          <p className="quote">“Minä en soita saadakseni. Minä soitan johtaakseni päätöstä.”</p>
        </section>
      )}

      {section === "ilta" && (
        <section className="card">
          <p className="eyebrow">Päivän jälkeen</p>
          <h2>7 minuutin voittopankki</h2>
          <p className="lead">Aivot eivät usko hypeä. Ne uskovat näyttöä.</p>
          <button className="primary" onClick={() => start(420)}>Käynnistä 7 min</button>
          <div className="grid">
            <Card title="Missä olin vakuuttava?" eyebrow="Voitto">
              <textarea value={form.vakuuttava} onChange={(e) => update("vakuuttava", e.target.value)} />
            </Card>
            <Card title="Missä menin hakemaan hyväksyntää?" eyebrow="Rehellinen havainto">
              <textarea value={form.hyvaksyntaa} onChange={(e) => update("hyvaksyntaa", e.target.value)} />
            </Card>
            <Card title="Mitä teen huomenna suoremmin?" eyebrow="Korjausliike">
              <textarea value={form.huomenna} onChange={(e) => update("huomenna", e.target.value)} />
            </Card>
            <Card title="Todiste identiteetistä" eyebrow="Näyttö">
              <textarea value={form.todiste} onChange={(e) => update("todiste", e.target.value)} />
            </Card>
          </div>
          <Card title="Päivän oppi" eyebrow="Oppiminen">
            <textarea value={form.oppi} onChange={(e) => update("oppi", e.target.value)} />
          </Card>
        </section>
      )}

      {section === "pankki" && (
        <section className="card">
          <p className="eyebrow">Data rakentaa identiteettiä</p>
          <h2>Voittopankki</h2>
          <button className="success" onClick={save}>Tallenna päivä</button>
          <button className="secondary" onClick={clearCurrent}>Tyhjennä lomake</button>
          <button className="danger" onClick={clearSaved}>Poista tallennetut</button>
          {saved.length === 0 ? <p className="small">Ei tallennettuja päiviä vielä.</p> : saved.slice().reverse().map((entry, index) => (
            <article className="entry" key={index}>
              <div className="entryHeader"><strong>{entry.date}</strong><span>{entry.score}/100</span></div>
              <p><strong>Vakuuttava:</strong> {entry.vakuuttava}</p>
              <p><strong>Hyväksynnän haku:</strong> {entry.hyvaksyntaa}</p>
              <p><strong>Huomenna suoremmin:</strong> {entry.huomenna}</p>
              <p><strong>Todiste:</strong> {entry.todiste}</p>
            </article>
          ))}
        </section>
      )}

      <section className="card">
        <h2>Tallenna päivän rutiini</h2>
        <p className="small">Tallennus tapahtuu tämän selaimen muistiin.</p>
        <button className="success" onClick={save}>Tallenna</button>
      </section>
    </main>
  );
}

function Card({ title, eyebrow, children }) {
  return <section className="card">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{children}</section>;
}

function Exercise({ title, badge, children, checked, onCheck, onTimer, button }) {
  return <section className="exercise"><span className="badge">{badge}</span><h3>{title}</h3>{children}<button className="primary" onClick={onTimer}>{button}</button><label className="done"><input type="checkbox" checked={checked} onChange={onCheck} />Tehty</label></section>;
}
