var onRun = function(context) {

	var doc = context.document;
	var selectedLayers = context.selection

	if (selectedLayers.count() == 1) {

		var originalLayer = selectedLayers.firstObject();
		var originalLayerY = originalLayer.frame().y();

		// Import an alert
		@import "alert.js";

		// Set up a blur settings
		const blur = MSStyleBlur.new();
		blur.isEnabled = true;
		blur.type = 0;
		blur.radius = settings.blur;
		blur.center = {x:0.5, y:0.5};

		// Dublicate an original layer and rename it
		var dublicate = originalLayer.duplicate()
		dublicate.name = originalLayer.name() + " image shadow"

		dublicate.style().blur = blur;
		[MSLayerMovement moveBackward: [dublicate]];
		dublicate.multiplyBy(settings.scale);
		dublicate.frame().midX = originalLayer.frame().midX();
		dublicate.frame().maxY = originalLayer.frame().maxY() + settings.offset

		dublicate.style().addStylePartOfType(0);
		layerStyle = dublicate.style().fills().lastObject();
		layerStyle.isEnabled = true;
		layerStyle.setFillType(0);
		layerStyle.color = MSColor.colorWithHue_saturation_brightness_alpha(1, 0, 0, 0.2)

	} else {
		doc.showMessage("You should select only one layer.");
	};
};
