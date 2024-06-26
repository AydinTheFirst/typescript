import crypto from "node:crypto";

export * from "@/utils/crypto";

export const uuid = () => {
  return crypto.randomUUID();
};
