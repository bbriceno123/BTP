/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["custom/myfirstapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
