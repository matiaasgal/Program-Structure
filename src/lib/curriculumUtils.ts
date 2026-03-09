import type { Course } from "./types";

export function isUnlocked(course: Course, approved: Set<string>): boolean {
  return course.requirements.every((req) => approved.has(req));
}
