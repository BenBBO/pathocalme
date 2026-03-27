"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import evenements from "@/data/evenements.json";
import EvenementCard from "@/app/components/evenementCard";
import EvenementModal from "@/app/components/evenementModal";
import { parseEventDate } from "@/utils/dates";

export default function Evenements() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { aVenir, passes } = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const sorted = [...evenements].sort(
      (a, b) => parseEventDate(a.date) - parseEventDate(b.date)
    );

    const aVenir = sorted.filter((e) => parseEventDate(e.date) >= now);
    const passes = sorted
      .filter((e) => parseEventDate(e.date) < now)
      .reverse();

    return { aVenir, passes };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-event py-14">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-nature md:text-6xl lg:text-7xl">
            Événements
          </h1>
          <p className="mb-6 text-2xl font-normal text-text-nature lg:text-3xl sm:px-16 lg:px-48">
            Des animations tout au long de l&apos;année&nbsp;!
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Tout au long de l&apos;année, Path&apos;O Calme organise des
            événements spéciaux pour petits et grands&nbsp;: chasses aux œufs à
            Pâques, activités frissonnantes à Halloween, et moments festifs pour
            célébrer les fêtes de fin d&apos;année.
          </p>
        </div>
      </section>

      {/* ─── Événements à venir ──────────────────────────────────────── */}
      <motion.section
        className="bg-white py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <span className="text-4xl" aria-hidden="true">
              📅
            </span>
            <h2 className="text-3xl font-extrabold text-secondary tracking-tight">
              Événements à venir
            </h2>
          </div>

          {aVenir.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aVenir.map((evt) => (
                <EvenementCard
                  key={evt.id}
                  evenement={evt}
                  isPast={false}
                  onClick={() => setSelectedEvent(evt)}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Aucun événement à venir pour le moment. Restez informés en nous
              suivant sur nos réseaux sociaux&nbsp;!
            </p>
          )}
        </div>
      </motion.section>

      {/* ─── Événements passés ───────────────────────────────────────── */}
      {passes.length > 0 && (
        <motion.section
          className="bg-primary py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="text-4xl" aria-hidden="true">
                🕰️
              </span>
              <h2 className="text-3xl font-extrabold text-secondary tracking-tight">
                Événements passés
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {passes.map((evt) => (
                <EvenementCard
                  key={evt.id}
                  evenement={evt}
                  isPast={true}
                  onClick={() => setSelectedEvent(evt)}
                />
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ─── Modal ───────────────────────────────────────────────────── */}
      {selectedEvent && (
        <EvenementModal
          evenement={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}
