const Engineer = require("../lib/Engineer");

// Tests to see if the engineers name is correct

describe("Engineer", () => {
  it("should have correct name", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      github = "https://github.com/test";

    const eng = new Engineer(name, id, email, role, github);

    expect(eng.getName()).toBe(name);
  });

  // Tests to see if the engineers id is correct

  it("should have correct id", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      github = "https://github.com/test";

    const eng = new Engineer(name, id, email, role, github);

    expect(eng.getId()).toBe(id);
  });

  // Tests to see if the engineers email is correct

  it("should have correct email", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      github = "https://github.com/test";

    const eng = new Engineer(name, id, email, role, github);

    expect(eng.getEmail()).toBe(email);
  });

  // Tests to see if the engineers role is correct

  it("should have correct role", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      github = "https://github.com/test";

    const eng = new Engineer(name, id, email, role, github);

    expect(eng.getRole()).toBe("Engineer");
  });

  // Tests to see if the engineers github is correct

  it("should have correct github", () => {
    let name = "test",
      id = "123",
      email = "test@example.com",
      role = "test",
      github = "test";

    const eng = new Engineer(name, id, email, role, github);

    expect(eng.getGithub()).toBe(github);
  });
});
