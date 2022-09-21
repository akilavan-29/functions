const catalystSDK = require('zcatalyst-sdk-node');

const MAX_LIMIT = 5;

module.exports = async (context, basicIO) => {
	try {
		const catalyst = catalystSDK.initialize(context);

		const table = catalyst.datastore().table('t1');

		for (let i = 1; i <= MAX_LIMIT; i++) {
            await table.insertRows({
				name1: "s1",
				name2: "s2",
                name3: "s3",
                name4: "s4"
			});
		}
	} catch (err) {
		console.log(err);
	}
	context.close(); //end of application
};