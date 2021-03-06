/* tslint:disable:no-conditional-assignment */
import { readFile, writeFile } from 'fs';
import glob from 'glob-promise';
import { join, relative } from 'path';
import { promisify } from 'util';

// TODO: Activate TypeScript 3.8 and use top level await instead of wrapped code by main function

main();

async function main() {
    const COMMENTS = [
        '🏭 GENERATED WITH generate-main-exports',
        '⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!',
    ];

    const filesPath = await glob(join(__dirname, '../../src/**/*.ts'));
    const files = await Promise.all(
        filesPath.map(async (path) => ({
            path,
            content: await promisify(readFile)(path, 'utf8'),
        })),
    );

    const exports: Array<{ path: string; name: string }> = [];
    for (const file of files) {
        let execArray: any; // RegExpExecArray | null;
        const regExp =
            /^(export\s+)(abstract\s+)?(async\s+)?(?<type>[a-z]+\s+)(?<name>[a-zA-Z0-9_]+)/gm;
        while ((execArray = regExp.exec(file.content))) {
            const { name } = execArray.groups!;
            exports.push({ path: file.path, name });
        }
    }

    let content = '';

    content += COMMENTS.map((comment) => `// ${comment}`).join('\n');
    content += '\n\n';

    content += exports
        .map(
            ({ name, path }) =>
                `import { ${name} } from './${relative(
                    join(__dirname, '../../src'),
                    path,
                )
                    .split('\\')
                    .join('/')
                    .replace(/\.tsx?$/, '')}';`,
        )
        .join('\n');
    content += '\n\n';

    content += `export {\n${exports
        .sort(
            (a, b) =>
                a.name.length > b.name.length
                    ? 1
                    : -1 /* TODO: Maybe some better sorting */,
        )
        .map(({ name }) => name)
        .join(',\n')}\n};`;

    const indexPath = join(__dirname, '../../src/index.ts');
    await promisify(writeFile)(indexPath, content);

    console.log('\x1b[36m%s\x1b[0m', `Index file generates to:\n${indexPath}`);

    // Note: Here is not prettier due to prettier will be triggered automatically by prettier-watch script
}
