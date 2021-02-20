'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const replace = require('gulp-string-replace');
const fs = require('fs-extra');

exports.build_electron_script = () => {
        return gulp.src('electron/src/**/*.ts')
            .pipe(ts({
                noImplicitAny: true
            }))
            .pipe(gulp.dest('dist'));
}

exports.add_electron_config_file = () => {
    return fs.copy('electron/config/*.json', 'dist/');
}

exports.fix_angular_index = () => {
    var anchor = '<app-root></app-root>';
    return gulp.src('dist/index.html')
      .pipe(replace(anchor, anchor + '\n<script src="preload.js"></script>'))
      .pipe(gulp.dest('dist'));
}

exports.import_node_lib = async () => {
    let angularCustomModules = [
        'custom-electron-titlebar'
    ];

    fs.mkdirSync('dist/node_modules');

    angularCustomModules.forEach(function(moduleName) {
        let moduleSrc = `node_modules/${moduleName}`;
        let moduleDest = `dist/node_modules/${moduleName}`;

        fs.copySync(moduleSrc, moduleDest);
        console.log(`Copied ${moduleSrc} to ${moduleDest}`);
    });
}

var build = gulp.series(
        exports.build_electron_script, 
        exports.fix_angular_index,
        exports.import_node_lib
    );

exports.default = build;