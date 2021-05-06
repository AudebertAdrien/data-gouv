import France from "@socialgouv/react-departements";

function FranceDepartements({ incidenceData }) {
  console.log(incidenceData);
  return (
    <div>
      <France departements={[33, 66]} />
    </div>
  );
}

export default FranceDepartements;
