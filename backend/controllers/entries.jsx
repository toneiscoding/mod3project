


const getEntries = async (req, res) => {
    let databaseResponse = await Entry.find();
    res.send(databaseResponse)
}

module.exports = {
    getEntries
}