const KEY = "cursos";

export const saveData = (approved: Set<string>) => {
    localStorage.setItem(KEY, JSON.stringify([...approved]));
    console.log("data guardada");
}

export function loadData() :Set<string> {
    const raw = localStorage.getItem(KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
}