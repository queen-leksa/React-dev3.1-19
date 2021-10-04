/*
    Содать массив из всх картинок:
    {src: "path", title: "Agra"}
*/
const desk = [
    {src: "/images/Tilda_Icons_44_travel_Agra.svg", title: "Agra"},
    {src: "/images/Tilda_Icons_44_travel_backpack.svg", title: "backpack"},
    {src: "/images/Tilda_Icons_44_travel_bagage.svg", title: "bagage"},
    {src: "/images/Tilda_Icons_44_travel_beach.svg", title: "beach"},
    {src: "/images/Tilda_Icons_44_travel_bicycle.svg", title: "bicycle"},
    {src: "/images/Tilda_Icons_44_travel_bus.svg", title: "bus"},
    {src: "/images/Tilda_Icons_44_travel_car.svg", title: "car"},
    {src: "/images/Tilda_Icons_44_travel_diving.svg", title: "diving"},
    {src: "/images/Tilda_Icons_44_travel_earth.svg", title: "earth"},
    {src: "/images/Tilda_Icons_44_travel_fire.svg", title: "fire"},
    {src: "/images/Tilda_Icons_44_travel_fishing.svg", title: "fishing"},
    {src: "/images/Tilda_Icons_44_travel_funicular.svg", title: "funicular"},
    {src: "/images/Tilda_Icons_44_travel_irbaloon.svg", title: "irbaloon"},
    {src: "/images/Tilda_Icons_44_travel_Kairo.svg", title: "Kairo"},
    {src: "/images/Tilda_Icons_44_travel_kayaking.svg", title: "kayaking"},
    {src: "/images/Tilda_Icons_44_travel_mountains.svg", title: "mountains"},
    {src: "/images/Tilda_Icons_44_travel_museum.svg", title: "museum"},
    {src: "/images/Tilda_Icons_44_travel_Paris.svg", title: "Paris"},
    {src: "/images/Tilda_Icons_44_travel_passport.svg", title: "passport"},
    {src: "/images/Tilda_Icons_44_travel_photography.svg", title: "photography"},
    {src: "/images/Tilda_Icons_44_travel_plane.svg", title: "plane"},
    {src: "/images/Tilda_Icons_44_travel_Rio.svg", title: "Rio"},
    {src: "/images/Tilda_Icons_44_travel_roadmap.svg", title: "roadmap"},
    {src: "/images/Tilda_Icons_44_travel_Rome.svg", title: "Rome"},
    {src: "/images/Tilda_Icons_44_travel_ship.svg", title: "ship"},
    {src: "/images/Tilda_Icons_44_travel_surfing.svg", title: "surfing"},
    {src: "/images/Tilda_Icons_44_travel_tarin.svg", title: "tarin"},
    {src: "/images/Tilda_Icons_44_travel_tent.svg", title: "tent"},
    {src: "/images/Tilda_Icons_44_travel_trees.svg", title: "trees"}
];
const getNumber = (max = desk.length, min = 3) => Math.floor(Math.random() * (max - min) + min);

let cnt = Math.floor(getNumber() / 3) * 3;
let game = [];

while (cnt) {
    const newPic = desk[getNumber(desk.length, 0)].src;
    if (!desk.includes(newPic)) {
        game.push(newPic);
        game.push(newPic);
        cnt--;
    }
}

game.sort(() => Math.random() - 0.5)

export default game;