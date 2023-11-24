// Import necessary dependencies from MUI
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Define the Poster function component
function Poster(props) {
  // Render the Poster component
  return React.createElement("div", { className: "poster" },
    React.createElement("h2", null, props.titles),
    React.createElement("img", { src: props.images, className: "images" }),
    React.createElement("p", null, "Seasons: ", props.season),
    React.createElement("p", null, "Genres: ", props.genre),
    React.createElement("p", null, "Updated: ", props.updates),
    React.createElement("img", { src: "./i.png", className: "icon-" }),
    React.createElement("img", { src: "./", className: "icon" })
  );
}

// Export the Poster component
module.exports = Poster;
