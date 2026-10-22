"use client";

import { useEffect, useMemo, useState } from "react";

const CZK_TO_PLN = 0.180128;
const money = (czk: number) =>
  `${czk.toLocaleString("pl-PL")} CZK (${Math.round(czk * CZK_TO_PLN).toLocaleString("pl-PL")} PLN)`;

const checks = [
  "Potwierdzić, że oglądamy dokładnie część domu oferowaną w ogłoszeniu.",
  "Sprawdzić stan okien, instalacji, ścian, podłóg i dachu od środka.",
  "Sprawdzić suchą piwnicę i potwierdzić jej faktyczną powierzchnię.",
  "Sprawdzić kocioł gazowy i poprosić o rok produkcji / ostatni serwis.",
  "Poprosić o rzeczywiste rachunki za gaz z ostatnich 12 miesięcy.",
  "Potwierdzić miesięczny koszt prądu oraz sposób przepisania licznika.",
  "Potwierdzić koszt wody, ścieków, odpadów i ewentualne inne opłaty.",
  "Wyjaśnić sprzeczność: oferta bez prowizji vs prowizja jednego czynszu.",
  "Potwierdzić wysokość kaucji oraz termin i zasady jej zwrotu.",
  "Sprawdzić ogród, granicę części domu i poziom prywatności względem właściciela.",
  "Ustalić najwcześniejszy termin podpisania umowy i przekazania kluczy.",
  "Poprosić o projekt umowy przed wpłatą jakichkolwiek pieniędzy.",
];

export default function OpavaBriefing() {
  const [done, setDone] = useState<boolean[]>(Array(checks.length).fill(false));
  const [notes, setNotes] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("opava-briefing-v1");
      if (!saved) return;
      const parsed = JSON.parse(saved) as { done?: boolean[]; notes?: string };
      if (Array.isArray(parsed.done)) {
        setDone(checks.map((_, i) => Boolean(parsed.done?.[i])));
      }
      if (typeof parsed.notes === "string") setNotes(parsed.notes);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("opava-briefing-v1", JSON.stringify({ done, notes }));
    } catch {}
  }, [done, notes]);

  const completed = useMemo(() => done.filter(Boolean).length, [done]);

  return (
    <div className="min-h-screen bg-[#f6f6f1] text-[#101010]">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <header className="border-b-4 border-black pb-6">
          <p className="font-mono text-xs font-bold uppercase tracking-wider">
            Briefing przed oględzinami
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase leading-none sm:text-6xl">
            Holasovice 166
          </h1>
          <p className="mt-3 text-lg font-semibold">
            Piątek 23.10.2026 · 13:00 · Holasovice koło Opawy
          </p>
        </header>

        <section className="mt-6 border-2 border-black bg-white p-5 shadow-[6px_6px_0_#000]">
          <p className="font-mono text-xs font-black uppercase">Dojazd</p>
          <p className="mt-2 text-2xl font-black">11:58 · Ostrava hl.n.</p>
          <p className="mt-1">Odbiór samochodem na dworcu głównym w Ostrawie.</p>
          <p className="mt-3 font-semibold">
            Planowany przejazd do Holasovic: ok. 45–50 min. Realny przyjazd: ok. 12:45–12:50.
          </p>
          <p className="mt-2 text-sm">
            <strong>Rezerwa:</strong> tylko około 10–15 minut. Po odbiorze najlepiej ruszyć od razu.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              className="border-2 border-black px-3 py-2 font-bold"
              href="https://www.google.com/maps/search/?api=1&query=Holasovice+166"
              target="_blank"
              rel="noreferrer"
            >
              Nawigacja
            </a>
            <a
              className="border-2 border-black px-3 py-2 font-bold"
              href="https://reality.byrfin.cz/hlavni-stranka/1547-pronajem-prostorne-poloviny-dvojdomu-se-zahradou-a-dvema-koupelnami-holasov"
              target="_blank"
              rel="noreferrer"
            >
              Ogłoszenie
            </a>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black uppercase">1. Najważniejsze dane</h2>
          <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <div className="border border-black bg-white p-3"><strong>Typ:</strong> połowa domu bliźniaczego</div>
            <div className="border border-black bg-white p-3"><strong>Powierzchnia:</strong> ok. 200 m² wg ogłoszenia</div>
            <div className="border border-black bg-white p-3"><strong>Piwnica:</strong> 20 m² wg rozmowy — do potwierdzenia</div>
            <div className="border border-black bg-white p-3"><strong>Ogrzewanie:</strong> gaz + ciepła woda</div>
            <div className="border border-black bg-white p-3"><strong>Ogród:</strong> ok. 400 m² wg ogłoszenia</div>
            <div className="border border-black bg-white p-3"><strong>Właściciel:</strong> mieszka w drugiej części domu z psem</div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black uppercase">2. Koszty</h2>
          <div className="mt-3 overflow-hidden border-2 border-black bg-white">
            {[
              ["Czynsz", 19990],
              ["Gaz", 4000],
              ["Prąd", 1500],
              ["Woda i ścieki", 650],
            ].map(([label, value]) => (
              <div
                key={String(label)}
                className="flex justify-between gap-4 border-b border-black p-3 last:border-b-0"
              >
                <span className="font-semibold">{label}</span>
                <span className="text-right font-mono">{money(Number(value))}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xl font-black">
            Razem miesięcznie: {money(26090)}–{money(26190)}
          </p>
          <p className="mt-2 text-sm">
            Kaucja wg ogłoszenia: {money(40000)}. Jeżeli rzeczywiście obowiązuje prowizja jednego czynszu,
            koszt wejścia wyniósłby około {money(79980)}.
          </p>
          <p className="mt-2 text-xs">
            Przelicznik orientacyjny: 1 CZK = 0,180128 PLN (22.10.2026).
          </p>
        </section>

        <section className="mt-8 border-l-8 border-black bg-[#fff2a8] p-4">
          <h2 className="text-xl font-black uppercase">3. Rzeczy do wyjaśnienia</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong>Prowizja:</strong> pojawia się zarówno „bez prowizji”, jak i prowizja w wysokości jednego czynszu.</li>
            <li><strong>Piwnica:</strong> rozmowa wskazuje 20 m²; materiały ogłoszeniowe mogą podawać inną powierzchnię.</li>
            <li><strong>Koszt gazu:</strong> {money(4000)} przy 23°C — poprosić o realne rachunki zimowe.</li>
            <li><strong>Prywatność:</strong> druga połowa domu jest zajmowana przez właściciela, ogród rozdziela przezroczyste ogrodzenie.</li>
          </ul>
        </section>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-2xl font-black uppercase">4. Checklist</h2>
            <span className="font-mono text-sm font-bold">{completed}/{checks.length}</span>
          </div>
          <div className="mt-3 space-y-2">
            {checks.map((item, i) => (
              <label
                key={item}
                className="flex cursor-pointer items-start gap-3 border-2 border-black bg-white p-4 active:translate-y-px"
              >
                <input
                  aria-label={item}
                  className="mt-1 h-6 w-6 shrink-0 accent-black"
                  type="checkbox"
                  checked={done[i]}
                  onChange={() =>
                    setDone((v) => v.map((x, j) => (j === i ? !x : x)))
                  }
                />
                <span className={done[i] ? "line-through opacity-50" : ""}>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black uppercase">5. Notatki na miejscu</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Pisz tutaj — notatki zapisują się automatycznie na tym urządzeniu."
            className="mt-3 min-h-52 w-full border-2 border-black bg-white p-4 text-base outline-none focus:ring-4 focus:ring-black/20"
          />
          <button
            className="mt-2 border-2 border-black bg-black px-4 py-2 font-bold text-white"
            onClick={() => {
              if (confirm("Usunąć checklistę i notatki zapisane na tym urządzeniu?")) {
                setDone(Array(checks.length).fill(false));
                setNotes("");
              }
            }}
          >
            Wyczyść zapis
          </button>
        </section>

        <section className="mt-8 border-t-4 border-black pt-6">
          <h2 className="text-2xl font-black uppercase">6. Kontakt</h2>
          <p className="mt-3">
            <strong>Michal Chmiel · ByrFin</strong><br />
            <a className="underline" href="tel:+420735517249">+420 735 517 249</a><br />
            <a className="underline" href="mailto:michal.chmiel@byrfin.cz">michal.chmiel@byrfin.cz</a>
          </p>
          <p className="mt-5 font-semibold">Pytanie końcowe:</p>
          <blockquote className="mt-2 border-l-4 border-black pl-4 italic">
            Jeśli zdecydujemy się na wynajem po obejrzeniu domu, jaki jest najwcześniejszy możliwy termin podpisania umowy i przekazania kluczy? Czy możemy wcześniej otrzymać projekt umowy oraz dokładne zestawienie wszystkich opłat?
          </blockquote>
        </section>
      </div>
    </div>
  );
}
