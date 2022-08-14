const Manager = require("../lib/Manager");

// Tests to see if the managers name is correct

describe("Manager", () => {
  it("should have correct name", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      officenumber = "test";

    const int = new Manager(name, id, email, role, officenumber);

    expect(int.getName()).toBe(name);
  });

  // Tests to see if the managers id is correct

  it("should have correct id", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      officenumber = "test";

    const int = new Manager(name, id, email, role, officenumber);

    expect(int.getId()).toBe(id);
  });

  // Tests to see if the managers email is correct

  it("should have correct email", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      officenumber = "test";

    const int = new Manager(name, id, email, role, officenumber);

    expect(int.getEmail()).toBe(email);
  });

  // Tests to see if the managers role is correct

  it("should have correct role", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      officenumber = "test";

    const int = new Manager(name, id, email, role, officenumber);

    expect(int.getRole()).toBe("Manager");
  });

  // Tests to see if the managers office number is correct

  it("should have correct officenumber", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      officenumber = "test";

    const int = new Manager(name, id, email, role, officenumber);

    expect(int.getOfficeNumber()).toBe(officenumber);
  });
});
