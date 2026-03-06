export type ClassId = string;

export type Course = {
    id: ClassId;
    displayName: string;
    requirements: ClassId[];
};

export type Semester = {
    id: number;
    displayName: string;
    classes: Course[];
};

export type Curriculum = {
    semesters: Semester[];
};

export type UserProgress = {
  approved: Set<ClassId>;
};