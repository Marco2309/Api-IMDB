export default function withoutPassword(userObj) {
  const { id, firstName, lastName, email, createdAt, updatedAt } = userObj;
  const returnUser = {
    id,
    firstName,
    lastName,
    email,
    createdAt,
    updatedAt,
  };
  return returnUser;
}

