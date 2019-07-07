module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: "./app/data",
                        src: ["**"],
                        dest: "./dist/data"
                    },
                    {
                        expand: true,
                        cwd: "./build",
                        src: "**/*",
                        dest: "./dist/public"
                    },
                ]
            }
        },
        ts: {
            app: {
                files: [{
                    src: ["app/\*\*/\*.ts", "!app/.baseDir.ts"],
                    dest: "./dist"
                }],
                options: {
                    module: "commonjs",
                    target: "es6",
                    lib: ["esnext"],
                    sourceMap: false,
                    rootDir: "app"
                }
            }
        },
        watch: {
            ts: {
                files: ["src/\*\*/\*.ts"],
                tasks: ["ts"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask("default", [
        "copy",
        "ts"
    ]);

};