import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/images/`,
        video: `${buildFolder}/video/`,
    },
    src: {
        css: `${srcFolder}/css/*.css`,
        html: `${srcFolder}/*.html`,
        fonts: `${srcFolder}/fonts/*.*`,
        js: `${srcFolder}/js/*.*`,
        images: `${srcFolder}/images/*.*`,
        video: `${srcFolder}/video/*.*`,
    },
    watch: {
        css: `${srcFolder}/css/**/*.css`,
        html: `${srcFolder}/**/*.html`,
        fonts: `${buildFolder}/fonts/*.*`,
        js: `${srcFolder}/js/*.*`,
        images: `${srcFolder}/images/*.*`,
        video: `${srcFolder}/video/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}