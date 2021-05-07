import France from "@socialgouv/react-departements";

function FranceDepartements() {
  return (
    <div>
      <France departements={[92, 93]} color={"red"} highlightColor={"blue"} />
    </div>
  );
}

export default FranceDepartements;
