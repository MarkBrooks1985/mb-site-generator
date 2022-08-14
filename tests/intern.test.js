const Intern = require("../lib/Intern");

// Tests to see if the interns name is correct

describe("Intern", () => {
  it("should have correct name", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      school = "test";

    const int = new Intern(name, id, email, role, school);

    expect(int.getName()).toBe(name);
  });

  // Tests to see if the interns id is correct

  it("should have correct id", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      school = "test";

    const int = new Intern(name, id, email, role, school);

    expect(int.getId()).toBe(id);
  });

  // Tests to see if the interns email is correct

  it("should have correct email", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      school = "test";

    const int = new Intern(name, id, email, role, school);

    expect(int.getEmail()).toBe(email);
  });

  // Tests to see if the interns role is correct

  it("should have correct role", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      school = "test";

    const int = new Intern(name, id, email, role, school);

    expect(int.getRole()).toBe("Intern");
  });

  // Tests to see if the interns school is correct

  it("should have correct school", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      school = "test";
    // act
    const int = new Intern(name, id, email, role, school);

    expect(int.getSchool()).toBe(school);
  });
});
