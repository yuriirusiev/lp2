let columnBox = document.querySelector(".sale-plan__columnbox");
let columns = columnBox.querySelectorAll(".sale-plan__columnbox__column");

let widthOnHoverElement = `40%`;
let widthNeighborsOfHovered = `30%`;

let changeWidthOnHover = (indexHovered, indexNeighbor1, indexNeighbor2) =>  {
    if (window.matchMedia("(min-width: 769px)").matches) {

        columns[indexHovered].onmouseover = () => {
            columns[indexHovered].style.width = widthOnHoverElement;
            columns[indexNeighbor1].style.width = widthNeighborsOfHovered;
            columns[indexNeighbor2].style.width = widthNeighborsOfHovered;
        };

        columns[indexHovered].onmouseout = () => {
            columns[indexHovered].style.width = "";
            columns[indexNeighbor1].style.width = "";
            columns[indexNeighbor2].style.width = "";
        };

    } else {
        columns[indexHovered].onmouseover = () => {
            columns[indexHovered].style.width = "";
            columns[indexNeighbor1].style.width = "";
            columns[indexNeighbor2].style.width = "";
        };
    }
};

let initChangeWidthOnHover = () => {
    changeWidthOnHover(0,1,2);
    changeWidthOnHover(1,0,2);
    changeWidthOnHover(2,0,1);
}

initChangeWidthOnHover();

window.addEventListener("resize", initChangeWidthOnHover);