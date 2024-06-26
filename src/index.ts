import chalk from "chalk";
import { decrypt, encrypt, uuid } from "@/utils";

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
};

const key = uuid();
const text = randomString(16);
console.log(chalk.green("Text: "), text);
console.log(chalk.green("Key: "), key);

const encrypted = encrypt(text, key);
console.log(chalk.green("Encrypted: "), encrypted);

const decrypted = decrypt(encrypted, key);
console.log(chalk.green("Decrypted: "), decrypted);
