import { db } from './dbManager';

const readAllTally = () => {
    try {
        const query = `SELECT * FROM tally`;
        const readQuery = db.prepare(query);
        const rowList = readQuery.all();
        return rowList;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const insertTally = (id: number, count: number) => {
    try {
        const insertQuery = db.prepare(
            `INSERT INTO tally (id, count) VALUES ('${id}' , ${count})`
        );

        const transaction = db.transaction(() => {
            const info = insertQuery.run();
            console.log(
                `Inserted ${info.changes} rows with last ID ${info.lastInsertRowid} into tally`
            );
        });
        transaction();
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export { readAllTally, insertTally };
