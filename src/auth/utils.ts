import bcrypt from "bcrypt";

// Hash password for registration
export async function saltAndHashPassword(
  plainTextPassword: string
): Promise<string> {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(plainTextPassword, saltRounds);
  return hashed;
}

// Compare during login
export async function verifyPassword(
  plainTextPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(plainTextPassword, hashedPassword);
}
