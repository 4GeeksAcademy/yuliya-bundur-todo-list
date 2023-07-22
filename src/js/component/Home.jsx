import React from "react";
import ReactDOM from "react-dom";
import MyList from "./MyList";
import ListItem from "./ListItem";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">todos</h1>
			<MyList />,
			<ListItem />,
			
			<p>
				Made by{" "}
				<a href="https://www.linkedin.com/in/yuliya-bundur/">Yuliya Bundur</a>, with
				love!
			</p>
		</div>
	);
};

ReactDOM.render(<Home />, document.querySelector("#app"));


export default Home;


