import axios from "axios";

function Home() {
  axios
    .get("http://localhost:3000/")
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <>
      <div>Home</div>
    </>
  );
}

export default Home;
