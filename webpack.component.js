const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const glob = require('glob');
const list = {};
async function makeList(dirPath,list){
    const files = glob.sync(`${dirPath}/**/index.js`);
    for(let file of files){
        const component = file.split(/[/.]/)[2];
        // const component = file.split(/\//)[2]; //index.js会出错，打包成index.js.umd.js
        list[component] = `./${file}`;
       
    }
}
makeList('components/lib',list)
module.exports = {
    mode: 'development',
    entry: list,
    output: {
        filename:'[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [ new VueLoaderPlugin() ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}