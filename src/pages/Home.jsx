import axios from "axios";
import France from "@socialgouv/react-departements";

function Home() {
  axios
    .get("https://data-gouv-server.herokuapp.com/" | "http://localhost:3000/")
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <>
      <div>Home</div>
      <France departements={[33]} />;
    </>
  );
}

export default Home;
