const fs = require('fs');
const config = require('config');

const InputDataPath = config.get('inputDataPath');

inputFileService = () => {
    return new Promise((resolve, reject) => {
        return fs.readFile(InputDataPath, (error, data) => {
            if (error) {
                return reject(error);
            }

            try {
                return resolve(JSON.parse(data));
            } catch (error) {
                return reject(error);
            }
        })
    });
};

module.exports = inputFileService;