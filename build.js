const fs = require("fs");
const path = require("path");

const template = fs.readFileSync(path.join(__dirname, "index.template.html"), "utf8");

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("WARNING: SUPABASE_URL or SUPABASE_ANON_KEY not set in environment variables.");
}

const output = template
  .replace("__SUPABASE_URL__", supabaseUrl)
  .replace("__SUPABASE_ANON_KEY__", supabaseAnonKey);

const outDir = path.join(__dirname, "public");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, "index.html"), output);

console.log("Build complete: public/index.html generated with env values injected.");
