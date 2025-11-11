const students = [
  { id: 101, name: "Alice", grade: "A" },
  { id: 102, name: "Bob", grade: "B" },
  { id: 103, name: "Charlie", grade: "A" },
  { id: 104, name: "David", grade: "C" },
  { id: 105, name: "Eve", grade: "B" },
  { id: 106, name: "Fiona", grade: "A" },
  { id: 107, name: "George", grade: "D" },
  { id: 108, name: "Hannah", grade: "B" },
  { id: 109, name: "Ian", grade: "C" },
  { id: 110, name: "Jasmine", grade: "A" },
];

const studentNames = students.map((x) => x.name);
console.log("\nList of Students :", studentNames);

const studentsWithAGrade = students.filter((x) => x.grade === "A");
console.log("\nList of Students with A Grade :", studentsWithAGrade);

const removeCGradeStudents = (list, details) => {
  if (details.grade === "C") {
    return list;
  }
  list.push(details);
  return list;
};

const newList = students.reduce(removeCGradeStudents, []);
console.log("\n List after removing students with C grade", newList);
