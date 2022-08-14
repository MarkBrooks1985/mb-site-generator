const Employee = require("../lib/Employee");

// Tests to see if the employees name is correct

describe("Employee", () => {
  it("should have correct name", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test";

    const emp = new Employee(name, id, email, role);

    expect(emp.getName()).toBe(name);
  });

  // Tests to see if the employees id is correct

  it("should have correct id", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test";

    const emp = new Employee(name, id, email, role);

    expect(emp.getId()).toBe(id);
  });

  // Tests to see if the employees email is correct

  it("should have correct email", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test";

    const emp = new Employee(name, id, email, role);

    expect(emp.getEmail()).toBe(email);
  });

  // Tests to see if the employees role is correct

  it("should have correct role", () => {
    // Arrange - arrange data
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test";
    // act
    const emp = new Employee(name, id, email, role);

    expect(emp.getRole()).toBe("Employee");
  });
});
