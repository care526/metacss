#!/usr/bin/env node

const FS = require('fs')
const PATH = require('path')
const { argv } = process

const docsPath = PATH.resolve(__dirname, '../docs/index.md')

const [command, willPath] = argv.slice(2)

if (command && willPath) {
    FS.readFile(docsPath, (err, data) => {
        if(err) throw new Error('something wrong was happended');
        FS.writeFile(PATH.resolve(__dirname, '../../../', willPath), data, err => {
            if(err) throw new Error('something wrong was happended');
            console.log('复制成功~')
        })
    })
} else {
    console.warn('请查看命令说明文档')
    console.log(`
        care-metacss docs path(待复制路径)
    `)
}