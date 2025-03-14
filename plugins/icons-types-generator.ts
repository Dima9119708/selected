import fs from 'node:fs'
import path from 'node:path'
import { PluginOption, ViteDevServer } from 'vite'

const iconsDir = path.join(process.cwd(), 'src', 'shared', 'ui', 'ui-icon', 'icons')
const typesFilePath = path.join(process.cwd(), 'src', 'shared', 'ui', 'ui-icon', 'types.ts')

function generateTypes() {
    const files = fs.readdirSync(iconsDir)
    const iconNames = files.filter((file) => file.endsWith('.vue')).map((file) => file.replace('.vue', ''))

    const typeDefinition = `export type TIcons = ${iconNames.map((name) => `'${name}'`).join(' | ')};\n`

    fs.writeFileSync(typesFilePath, typeDefinition)
}

export function iconsTypeGeneratorVitePlugin(): PluginOption {
    return {
        name: 'icon-types-generator',
        configureServer(server: ViteDevServer) {
            const watcher = server.watcher

            generateTypes()

            watcher.on('all', (_, path) => {
                if (path.startsWith(iconsDir)) {
                    generateTypes()
                }
            })
        },
    }
}
