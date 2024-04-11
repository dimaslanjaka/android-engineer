const { exec } = require("child_process");
const glob = require("glob");
const fm = require("front-matter");
const fs = require("fs");
const path = require("path");
const yaml = require("yaml");
const hpp = require("hexo-post-parser");

const config = yaml.parse(
	fs.readFileSync(path.join(__dirname, "/../_config.yml"), "utf-8")
);

// Define the pattern to match Markdown files
const pattern = "**/*.md";
const cwd = process.cwd();
async function main() {
	// Use glob to find Markdown files
	const files = await glob.glob(pattern, {
		cwd,
		ignore: ["node_modules/**", "vendor/**", "_site/**"],
	});
	// Iterate over each Markdown file
	for (let i = 0; i < files.length; i++) {
		const file = path.join(cwd, files[i]);
		// Execute Git command to get creation date of the file
		exec(
			`git log --format=%ad --date=format:'%Y-%m-%dT%H:%M:%S%z' --diff-filter=A -- ${file}`,
			async (error, stdout, stderr) => {
				if (error) {
					console.error(
						`Error getting creation date of ${file}:`,
						error.message
					);
					return;
				}
				if (stderr) {
					console.error(`Error getting creation date of ${file}:`, stderr);
					return;
				}

				// Get the creation date from the Git output
				const creationDate = stdout.trim();

				console.log(`File: ${file}, Creation Date: ${creationDate}`);
				const ignore = [path.join(cwd, "readme.md")];
        if (ignore.includes(file)) return;
				const parse = await hpp.parsePost(file, { config });
				parse.metadata.date = creationDate;
				delete parse.metadata.description;
				delete parse.metadata.subtitle;
				delete parse.metadata.excerpt;
        delete parse.metadata.type;
				const md = hpp.buildPost(parse);
				fs.writeFileSync(file, md);
				// const read = fs.readFileSync(path.join(process.cwd(), file), {
				// 	encoding: "utf-8",
				// });
				// try {
				// 	const parse = fm(read);
				// 	parse.attributes.date = creationDate;
				// 	// console.log(parse);
				// } catch (error) {
				// 	console.error(`fail parse ${file}`);
				// }
			}
		);
	}
}

main();
