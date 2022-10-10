import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { plugins } from './gulp/config/plugins.js';
import { server } from './gulp/tasks/server.js';
import { css } from './gulp/tasks/css.js';
import { js } from './gulp/tasks/main.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { video } from './gulp/tasks/video.js';

global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins,
};

const watcher = () => {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.fonts, fonts)
    gulp.watch(path.watch.video, video)
};

const mainTasks = gulp.parallel(html, css, images, video, fonts, js);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);