import { say } from "cowsay";
import "dotenv/config.js";

const { MY_NAME, MY_CAMPUS } = process.env;

console.log(
	say({
		text: `My name's ${MY_NAME} and i live in ${MY_CAMPUS}`,
		e: "oO",
		T: "U",
	}),
);
