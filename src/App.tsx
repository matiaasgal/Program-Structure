import "./App.css";
import { useState, useEffect } from "react";
import { curriculum } from "./lib/classData";
import { isUnlocked } from "./lib/curriculumUtils";
import { saveData, loadData } from "./lib/userProgress";

const initialSet = loadData();

const lookId = new Map(
  curriculum.semesters
    .flatMap((semester) => semester.classes)
    .map((course) => [course.id, course.displayName]),
);

const App = () => {
  const [approved, setApproved] = useState<Set<string>>(initialSet);

  useEffect(() => {
    saveData(approved);
  }, [approved]);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Malla Licenciatura en Ciencia de la Computación
          </h1>
          <p className="mt-2 text-sm text-cyan-100 sm:text-base">
            Marca los ramos que aprobaste para guardar tu avance. Dale que tú puedes
            :)
          </p>
          <p className="mt-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
            Aprobados: {approved.size}
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {curriculum.semesters.map((semester) => (
            <section
              key={semester.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h2 className="mb-4 text-lg font-semibold text-slate-800">
                {semester.displayName}
              </h2>

              <div className="space-y-2">
                {semester.classes.map((course) => {
                  const unlocked = isUnlocked(course, approved);
                  const isApproved = approved.has(course.id);
                  const blocked = !unlocked && !isApproved;

                  const requirementsLabel = course.requirements
                    .map((reqId) => lookId.get(reqId) ?? reqId)
                    .join(", ");

                  const styleByState = isApproved
                    ? "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
                    : blocked
                      ? "border-slate-200 bg-slate-100 text-slate-400"
                      : "border-sky-300 bg-sky-50 text-sky-900 hover:bg-sky-100";

                  const statusLabel = isApproved
                    ? "Aprobado"
                    : blocked
                      ? "Bloqueado"
                      : "Disponible";

                  return (
                    <button
                      key={course.id}
                      type="button"
                      disabled={blocked}
                      onClick={() => {
                        setApproved((prev) => {
                          const next = new Set(prev);
                          if (next.has(course.id)) {
                            next.delete(course.id);
                          } else if (isUnlocked(course, next)) {
                            next.add(course.id);
                          }
                          return next;
                        });
                      }}
                      className={`w-full rounded-xl border px-3 py-2 text-left transition ${styleByState}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-medium">
                          {course.displayName}
                        </span>
                        <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-semibold">
                          {statusLabel}
                        </span>
                      </div>

                      {course.requirements.length > 0 && (
                        <p className="mt-1 text-xs opacity-80">
                          Requiere: {requirementsLabel}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
