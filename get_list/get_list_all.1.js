const path = require('path');
const fs = require('fs');

// ファイルタイプの列挙体（のつもり）
const FileType = {
  File: 'file',
  Directory: 'directory',
  Unknown: 'unknown'
}

/**
 * ファイルの種類を取得する
 * @param {string} path パス
 * @return {FileType} ファイルの種類
 */
const getFileType = path => {
  try {
    const stat = fs.statSync(path);

    console.log(stat);

    if(stat.isFile()){
      console.log(FileType.File);
      return FileType.File;
    }

    if(stat)

    switch (true) {
      case stat.isFile():
        return FileType.File;

      case stat.isDirectory():
        return FileType.Directory;

      default:
        return FileType.Unknown;
    }

  } catch(e) {
    return FileType.Unknown;
  }
}

/**
 * 指定したディレクトリ配下のすべてのファイルをリストアップする
 * @param {string} dirPath 検索するディレクトリのパス
 * @return {Array<string>} ファイルのパスのリスト
 */
const listFiles = dirPath => {
  const ret = [];
  const paths = fs.readdirSync(dirPath);

  paths.forEach(a => {
    const path = `${dirPath}/${a}`;

    switch (getFileType(path)) {
      case FileType.File:
        ret.push(path);
        break;

      case FileType.Directory:
        ret.push(...listFiles(path));
        break;

      default:
        /* noop */
    }
  })

  return ret;
};

const dirPath = path.resolve(__dirname, '../S3');
const list = listFiles(dirPath);

console.log(list);

const text=fs.readFileSync('src.txt', 'utf8');
fs.write('out.txt',text);



