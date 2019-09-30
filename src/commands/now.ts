import { Command, flags } from "@oclif/command";

export default class Now extends Command {
  static description = "you really know what time is it, right?";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Now);

    const name = flags.name || "world";
    this.log(
      `hello ${name} from /Users/furkan/Workspace/_play/oclif-tryout/src/commands/now.ts`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
