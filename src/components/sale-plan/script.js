let columns = document.querySelectorAll(".sale-plan__columnbox__column");

let widthOnHoverElement = `40%`;
let widthNeighborsOfHovered = `30%`;

let changeWidthOnHover = (indexHovered, indexNeighbor1, indexNeighbor2) =>  {

    columns[indexHovered].onmouseover = columns[indexHovered].onmouseout = () => {
        columns.forEach(item => item.style.width = "");
    };

    if (window.matchMedia("(min-width: 769px)").matches) {

        columns[indexHovered].onmouseover = () => {
            columns[indexHovered].style.width = widthOnHoverElement;
            columns[indexNeighbor1].style.width = widthNeighborsOfHovered;
            columns[indexNeighbor2].style.width = widthNeighborsOfHovered;
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