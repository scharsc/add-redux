import { Id, Color } from "./state/RenderModel_LaW";

type NewElemListener = (id: Id) => void;
type ChangeColorListener = (id: Id, col: Color) => void;
type ClearWallsListener = () => void;
type ToggleLodListener = () => void;

class Database {
  // database modification
  addWall = (id: Id) => {
    console.log("Database: wall " + id.toString() + " added!");
    this.newElemsListeners.forEach((f) => f(id));
  };
  changeColor = (id: Id, col: Color) => {
    console.log(
      "Database: wall " + id.toString() + " changed to color " + col.toString()
    );
    this.changeColorListeners.forEach((f) => f(id, col));
  };
  clearWalls = () => {
    console.log("Database: clear walls");
    this.clearWallsListeners.forEach((f) => f());
  };
  toggleLod = () => {
    console.log("Database: toggle lod");
    this.toggleLodListeners.forEach((f) => f());
  };

  // adding new event listeners
  addNewElemsListener(listener: NewElemListener) {
    this.newElemsListeners.push(listener);
  }
  addChangeColorListener(listener: ChangeColorListener) {
    this.changeColorListeners.push(listener);
  }
  addClearWallsListener(listener: ClearWallsListener) {
    this.clearWallsListeners.push(listener);
  }
  addToggleLodListener(listener: ToggleLodListener) {
    this.toggleLodListeners.push(listener);
  }

  // lists of event listeners
  newElemsListeners: NewElemListener[] = [];
  changeColorListeners: ChangeColorListener[] = [];
  clearWallsListeners: ClearWallsListener[] = [];
  toggleLodListeners: ToggleLodListener[] = [];
}

export default Database;
