CREATE CONSTRAINT uq_id_dep FOR (d:Department) REQUIRE d.id IS UNIQUE;
CREATE CONSTRAINT uq_id_doc FOR (d:Doctor) REQUIRE d.id IS UNIQUE;
CREATE CONSTRAINT uq_id_pat FOR (p:Patient) REQUIRE p.id IS UNIQUE;

SHOW CONSTRAINT;

LOAD CSV WITH HEADERS FROM "file:///hospital/departments.csv" AS row
WITH row
CREATE (d:Department {id: row.id, name: row.name, location: row.location})

LOAD CSV WITH HEADERS FROM "file:///hospital/doctors.csv" AS row
WITH row
CREATE (d:Doctor {id: row.ID, name: row.Name, phone: row.Phone, speciality: row.Speciality, departmentID: row.DepartmentID})

LOAD CSV WITH HEADERS FROM "file:///hospital/patients.csv" AS row
WITH row
CREATE (p:Patient {id: row.ID, name: row.Name, gender: row.Gender, dateOfBirth: date(row.DateOfBirth), address: row.Address})


MATCH (d:Doctor), (dep:Department)
WHERE d.departmentID = dep.id
CREATE (d) -[:BELONG_TO]-> (dep)

LOAD CSV WITH HEADERS FROM "file:///hospital/treatments.csv" AS row
WITH row
WHERE row.PatientID IS NOT NULL AND row.DoctorID IS NOT NULL
MATCH (p:Patient {id: row.PatientID}), (d:Doctor {id: row.DoctorID})
CREATE (p) -[:BE_TREATED {startDate: date(row.StartDate), endDate: date(row.EndDate), diagnosis: row.Diagnosis}]-> (d)

CREATE (d:Doctor {
  id: 'DR.751',
  name: 'Tri',
  phone: '123456789',
  speciality: 'Dermatology Services',
//  departmentID: 'DEP001'
})
//WITH d
//MATCH (dep:Department {id: 'DEP001'})
//CREATE (d) -[:BELONG_TO]-> (dep)
//RETURN d


MATCH (d:Doctor) -[:BELONG_TO]-> (dep:Department {name: "Internal Medicine"})
RETURN d.speciality as speciality, COUNT(d) AS count


CREATE FULLTEXT INDEX txt_index_speciality FOR (d:Doctor) ON EACH [d.speciality];

CALL db.index.fulltext.queryNodes("txt_index_speciality", "Cardiology") YIELD node
RETURN node


MATCH (d:Doctor {id: 'DR.013'}) <-[r:BE_TREATED]- (p:Patient {id: 'PT007'})
WHERE r.endDate IS NULL
SET r.diagnosis = 'Pathology'
