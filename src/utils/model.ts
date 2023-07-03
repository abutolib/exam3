import { createHash } from "crypto";

const hashPassword = (password:string) =>
	createHash("sha256").update(password).digest("hex");

export {hashPassword};