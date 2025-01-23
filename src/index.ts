import { setup } from "@server";

const server = setup();

server.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
