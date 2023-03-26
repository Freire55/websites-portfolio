import NavBar from "./components/NavBar";
import "./App.css"

function App() {

  const projects = [
    {
      name: "Calculator",
      link: "",
    },
    {
      name: "Counter",
      link: "",
    },
  ]

  return (
    <>
      <NavBar />
          <h1 className="my-16 text-center text-5xl font-extrabold">Welcome.</h1>
      <div className="flex px-10 gap-40">
      <div style={{ width: "50%" }}>
        <div>
          <h1 className="text-3xl mb-4 font-bold">Hello</h1>
        </div>
        <div className="flex flex-col gap-6">
          <p>
            My name is Tomás Freire. I'm an 18 year-old self-taught
            frontend-developer from Madeira, Portugal. I have a deep knowledge
            of HTML, CSS, Javascript and React which I used to develop many
            projects in order to build my developer portfolio
          </p>
          <p>
            I love building building interactive and engaging websites and
            applications. I also like the constant leraning and growth
            opportunities that come with the job, as the field is always
            evolving with different technologies. Being able to create something
            that impacts users in a positive way is phenomenal
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-3xl mb-4 font-bold">My projects</h2>
        </div>
        <div>
          {projects.map((item) => (
            <a className="list-item mx-5 text-lg font-semibold underline" href={item.link}>{item.name}</a>
            ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
