const MissionCommander = require("./../app/missionCommander");

describe("Pruebas para la clase MissionCommander", () => {
  test("1. Crear un objeto", () => {
    const woopa = new MissionCommander("Woopa");
    expect(woopa.name).toBe("Woopa");
  });
});
